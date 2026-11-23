"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

export type SiteLocale = "en" | "ur";

type LocaleContextValue = {
  locale: SiteLocale;
  setLocale: (locale: SiteLocale) => void;
};

type TranslationDictionary = Record<string, string>;
type TextState = { original: string; translated: string };
type AttributeState = { original: string; translated: string };

const LocaleContext = createContext<LocaleContextValue | null>(null);

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function withWhitespace(original: string, replacement: string) {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return leading + replacement + trailing;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<SiteLocale>("en");
  const textStates = useRef(new WeakMap<Text, TextState>());
  const attributeStates = useRef(new WeakMap<Element, Map<string, AttributeState>>());
  const hasAppliedUrdu = useRef(false);
  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  useEffect(() => {
    const stored = window.localStorage.getItem("apnaab-language");
    if (stored === "ur") setLocale("ur");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ur" ? "rtl" : "ltr";
    window.localStorage.setItem("apnaab-language", locale);

    let cancelled = false;
    let observer: MutationObserver | undefined;
    const skipped = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "TEXTAREA", "CODE", "PRE"]);
    const attributes = ["placeholder", "aria-label", "title"];

    const processText = (node: Text, translations: TranslationDictionary) => {
      const current = node.nodeValue ?? "";
      const previous = textStates.current.get(node);
      const original = previous && current === previous.translated ? previous.original : current;
      const translated = translations[normalize(original)];

      if (translated) {
        const next = withWhitespace(original, translated);
        textStates.current.set(node, { original, translated: next });
        if (current !== next) node.nodeValue = next;
      } else if (previous && current === previous.translated) {
        textStates.current.delete(node);
      }
    };

    const processAttributes = (element: Element, translations: TranslationDictionary) => {
      let states = attributeStates.current.get(element);

      for (const name of attributes) {
        const current = element.getAttribute(name);
        if (current === null) continue;

        const previous = states?.get(name);
        const original = previous && current === previous.translated ? previous.original : current;
        const translated = translations[normalize(original)];

        if (translated) {
          if (!states) {
            states = new Map();
            attributeStates.current.set(element, states);
          }
          states.set(name, { original, translated });
          if (current !== translated) element.setAttribute(name, translated);
        } else if (previous && current === previous.translated) {
          states?.delete(name);
        }
      }
    };

    const restoreText = (node: Text) => {
      const previous = textStates.current.get(node);
      if (!previous) return;
      if ((node.nodeValue ?? "") === previous.translated) node.nodeValue = previous.original;
      textStates.current.delete(node);
    };

    const restoreAttributes = (element: Element) => {
      const states = attributeStates.current.get(element);
      if (!states) return;

      for (const [name, previous] of states) {
        if (element.getAttribute(name) === previous.translated) {
          element.setAttribute(name, previous.original);
        }
      }
      attributeStates.current.delete(element);
    };

    const walk = (node: Node, translations?: TranslationDictionary) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node as Text;
        const parent = text.parentElement;
        if (!parent || skipped.has(parent.tagName) || parent.closest("script,style,noscript,svg,textarea,code,pre")) return;
        if (translations) processText(text, translations);
        else restoreText(text);
        return;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        if (translations) processAttributes(element, translations);
        else restoreAttributes(element);
        if (skipped.has(element.tagName)) return;
      }

      for (const child of Array.from(node.childNodes)) walk(child, translations);
    };

    // English is the default fast path: no dictionary download, DOM scan or observer.
    if (locale === "en") {
      if (hasAppliedUrdu.current) {
        walk(document.body);
        hasAppliedUrdu.current = false;
      }

      return () => {
        cancelled = true;
        observer?.disconnect();
      };
    }

    const startUrduTranslation = async () => {
      try {
        const module = await import("@/lib/urdu-translations");
        if (cancelled) return;

        const translations = module.default;
        walk(document.body, translations);
        hasAppliedUrdu.current = true;

        observer = new MutationObserver((records) => {
          for (const record of records) {
            if (record.type === "characterData" && record.target.nodeType === Node.TEXT_NODE) {
              walk(record.target, translations);
            }
            if (record.type === "attributes" && record.target.nodeType === Node.ELEMENT_NODE) {
              processAttributes(record.target as Element, translations);
            }
            for (const added of Array.from(record.addedNodes)) walk(added, translations);
          }
        });

        observer.observe(document.body, {
          subtree: true,
          childList: true,
          characterData: true,
          attributes: true,
          attributeFilter: attributes
        });
      } catch {
        if (!cancelled) {
          root.lang = "en";
          root.dir = "ltr";
          window.localStorage.setItem("apnaab-language", "en");
          setLocale("en");
        }
      }
    };

    void startUrduTranslation();

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return value;
}
