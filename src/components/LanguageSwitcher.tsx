"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="language-switcher" role="group" aria-label="Choose language">
      <button type="button" className={locale === "en" ? "is-active" : ""} aria-pressed={locale === "en"} onClick={() => setLocale("en")} title="Switch to English">EN</button>
      <button type="button" className={locale === "ur" ? "is-active" : ""} aria-pressed={locale === "ur"} onClick={() => setLocale("ur")} title="Switch to Urdu">اردو</button>
    </div>
  );
}
