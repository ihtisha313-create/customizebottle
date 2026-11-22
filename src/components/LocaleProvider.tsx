"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export type SiteLocale = "en" | "ur";

type LocaleContextValue = {
  locale: SiteLocale;
  setLocale: (locale: SiteLocale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const translations: Record<string, string> = {
  "Home": "ہوم",
  "Bottles": "بوتلیں",
  "Our Bottles": "ہماری بوتلیں",
  "Industries": "شعبہ جات",
  "How It Works": "طریقۂ کار",
  "Portfolio": "ڈیزائن گیلری",
  "About": "تعارف",
  "About Us": "ہمارا تعارف",
  "Contact": "رابطہ",
  "Request a Quote": "قیمت معلوم کریں",
  "CUSTOM-BRANDED BOTTLES & SUPPLY": "آپ کے برانڈ کی خصوصی بوتلیں",
  "CUSTOM-BRANDED WATER": "خصوصی برانڈ والی پانی کی بوتلیں",
  "APNAAB · CUSTOM-BRANDED WATER FOR YOUR BUSINESS": "آپ کے کاروبار کے لیے APNAAB کی خصوصی برانڈ والی پانی کی بوتلیں",
  "Skip to content": "مرکزی مواد پر جائیں",
  "Close menu": "مینو بند کریں",
  "Open menu": "مینو کھولیں",
  "Choose language": "زبان منتخب کریں",
  "Switch to English": "انگریزی منتخب کریں",
  "Switch to Urdu": "اردو منتخب کریں",
  "Chat with us": "ہم سے بات کریں",
  "Explore": "مزید دیکھیں",
  "Talk to our team": "ہماری ٹیم سے بات کریں",
  "Tell us about your business and the bottles you need.": "اپنے کاروبار اور درکار بوتلوں کے بارے میں بتائیں۔",
  "Minimum order:": "کم از کم آرڈر:",
  "Privacy Policy": "رازداری کی پالیسی",
  "Terms & Conditions": "شرائط و ضوابط",
  "All rights reserved.": "جملہ حقوق محفوظ ہیں۔",
  "Made for businesses across Pakistan.": "پاکستان بھر کے کاروباروں کے لیے۔",
  "Back to home": "ہوم پیج پر واپس جائیں",
  "Read Terms & Conditions": "شرائط و ضوابط پڑھیں",
  "Read Privacy Policy": "رازداری کی پالیسی پڑھیں",

  "CUSTOM-BRANDED WATER · MADE FOR YOUR BUSINESS": "آپ کے کاروبار کے لیے، آپ کے برانڈ کے ساتھ",
  "Your Brand.": "آپ کا برانڈ۔",
  "On Every Bottle.": "ہر بوتل پر۔",
  "Custom-labelled 500 ml drinking water, thoughtfully presented for hotels, restaurants, clinics, celebrations and businesses.": "ہوٹلوں، ریسٹورنٹس، کلینکس، تقریبات اور کاروباروں کے لیے آپ کے اپنے لیبل کے ساتھ 500 ملی لیٹر پینے کا پانی۔",
  "Explore bottle options": "بوتل کی تفصیل دیکھیں",
  "500 ml format": "500 ملی لیٹر",
  "Filled & sealed": "بھری ہوئی اور سیل بند",
  "From 500 bottles": "کم از کم 500 بوتلیں",
  "01": "۰۱",
  "THE WATER, YOUR IDENTITY": "پانی، آپ کی پہچان",
  "DESIGNED TO BE REMEMBERED": "ایسی پیشکش جو یاد رہے",
  "COORDINATED FROM PESHAWAR, PAKISTAN": "پشاور، پاکستان سے رابطہ و انتظام",
  "What would you like to arrange?": "آپ کس مقصد کے لیے بوتلیں بنوانا چاہتے ہیں؟",
  "Choose the option that best matches your need. We’ll guide you to the right next step.": "اپنی ضرورت کے مطابق انتخاب کریں۔ ہم آپ کو اگلے درست مرحلے تک رہنمائی دیں گے۔",
  "For my business": "اپنے کاروبار کے لیے",
  "Hotels, restaurants, clinics, offices and hospitality spaces.": "ہوٹلز، ریسٹورنٹس، کلینکس، دفاتر اور مہمان نوازی کے مراکز۔",
  "Explore business options": "کاروباری آپشنز دیکھیں",
  "For an event": "کسی تقریب کے لیے",
  "Weddings, celebrations, conferences and catering services.": "شادیوں، تقریبات، کانفرنسز اور کیٹرنگ کے لیے۔",
  "Explore event options": "تقریبات کے آپشنز دیکھیں",
  "I need a quotation": "مجھے قیمت معلوم کرنی ہے",
  "Share your quantity, delivery city and label idea with us.": "اپنی تعداد، ڈیلیوری شہر اور لیبل کا خیال ہمارے ساتھ شیئر کریں۔",
  "Start my quote": "قیمت معلوم کرنے کے لیے آگے بڑھیں",
  "STANDARD BOTTLE": "معیاری بوتل",
  "Our current bottle format": "ہماری موجودہ بوتل",
  "LABEL DESIGN": "لیبل ڈیزائن",
  "Made for you": "آپ کے لیے تیار کردہ",
  "Artwork shaped around your brand": "آپ کے برانڈ کے مطابق ڈیزائن",
  "COMPLETE SUPPLY": "مکمل سپلائی",
  "Ready for your agreed order": "طے شدہ آرڈر کے مطابق تیار",
  "BASED IN": "مقام",
  "Peshawar": "پشاور",
  "Pakistan-wide business enquiries": "پاکستان بھر سے کاروباری رابطے",
  "A SMALL DETAIL. A LASTING IMPRESSION.": "ایک چھوٹی سی تفصیل، ایک دیرپا تاثر۔",
  "Make the everyday": "روزمرہ کے تجربے کو",
  "feel like your brand.": "اپنے برانڈ کی پہچان بنائیں۔",
  "Give guests, customers and teams a bottled-water experience that feels considered from the first glance. We coordinate custom-labelled 500 ml drinking water as a complete supply—not labels alone.": "مہمانوں، صارفین اور ٹیموں کو ایسا بوتل بند پانی پیش کریں جو پہلی نظر سے آپ کے برانڈ کی نمائندگی کرے۔ ہم صرف لیبل نہیں بلکہ بھری ہوئی، ڈھکن اور سیل کے ساتھ مکمل 500 ملی لیٹر بوتلوں کی سپلائی کا انتظام کرتے ہیں۔",
  "Custom label direction using your brand details": "آپ کے برانڈ کی معلومات کے مطابق خصوصی لیبل",
  "Filled, capped and sealed bottle supply": "پانی سے بھری، ڈھکن اور سیل کے ساتھ بوتلیں",
  "Design and full quotation review before confirmation": "حتمی منظوری سے پہلے ڈیزائن اور مکمل قیمت کا جائزہ",
  "Minimum order starts at": "کم از کم آرڈر",
  "bottles": "بوتلیں",
  "Discover the 500 ml bottle option": "500 ملی لیٹر بوتل کی تفصیل دیکھیں",
  "YOUR BRAND": "آپ کا برانڈ",
  "THE 500 ML SIGNATURE": "500 ملی لیٹر کی خصوصی بوتل",
  "Illustrative design direction": "نمونے کے طور پر ڈیزائن",
  "BOTTLES FOR YOUR BUSINESS": "آپ کے کاروبار کے لیے بوتلیں",
  "One thoughtful detail.": "ایک خوبصورت تفصیل۔",
  "Many ways to welcome.": "مہمان نوازی کے کئی انداز۔",
  "From a hotel room to a wedding table, custom-branded bottled water can make your business presentation feel more complete.": "ہوٹل کے کمرے سے شادی کی میز تک، آپ کے برانڈ والی پانی کی بوتل آپ کی پیشکش کو مزید مکمل بناتی ہے۔",
  "Hotels & Hospitality": "ہوٹلز اور مہمان نوازی",
  "A considered welcome for guest rooms, suites and hospitality spaces.": "مہمانوں کے کمروں، سویٹس اور مہمان نوازی کے مقامات کے لیے خوش آمدیدی پیشکش۔",
  "Restaurants & Cafés": "ریسٹورنٹس اور کیفے",
  "Bring your identity to the table with custom-labelled bottles.": "اپنے خصوصی لیبل والی بوتلوں کے ذریعے اپنے برانڈ کو ہر میز تک پہنچائیں۔",
  "Hospitals & Clinics": "ہسپتال اور کلینکس",
  "A clear, professional presentation for visitors and teams.": "مہمانوں اور ٹیموں کے لیے صاف ستھری اور پیشہ ورانہ پیشکش۔",
  "Weddings & Events": "شادی بیاہ اور تقریبات",
  "A personal finishing touch for celebrations and special occasions.": "خوشیوں اور خاص مواقع کے لیے ایک ذاتی اور خوبصورت اضافہ۔",
  "Corporate Gatherings": "کارپوریٹ تقریبات",
  "Custom-branded bottles for meetings, conferences and company events.": "میٹنگز، کانفرنسز اور کمپنی تقریبات کے لیے خصوصی برانڈ والی بوتلیں۔",
  "Catering & Venues": "کیٹرنگ اور تقریبات کے مقامات",
  "A coordinated presentation for catering teams and venue service.": "کیٹرنگ ٹیموں اور تقریبات کے مقامات کے لیے ہم آہنگ پیشکش۔",
  "Explore solutions": "حل دیکھیں",
  "Have a different business or event in mind?": "کیا آپ کے ذہن میں کوئی اور کاروبار یا تقریب ہے؟",
  "Tell us what you need": "اپنی ضرورت بتائیں",
  "A CLEAR, FIVE-STEP JOURNEY": "پانچ آسان مراحل",
  "From first idea": "پہلے خیال سے",
  "to finished bottles.": "تیار بوتلوں تک۔",
  "Good communication matters. We keep the details clear so you can review the proposed design and quotation before confirming an order.": "واضح رابطہ اہم ہے۔ ہم تمام تفصیلات واضح رکھتے ہیں تاکہ آرڈر کی منظوری سے پہلے آپ ڈیزائن اور قیمت کا جائزہ لے سکیں۔",
  "Share your business type, city and estimated quantity.": "اپنے کاروبار کی نوعیت، شہر اور متوقع تعداد بتائیں۔",
  "Create your label direction": "لیبل کا ڈیزائن تیار کریں",
  "Send your logo and brand details for a custom design concept.": "خصوصی ڈیزائن کے لیے اپنا لوگو اور برانڈ کی تفصیلات بھیجیں۔",
  "Review your quotation": "قیمت کی پیشکش دیکھیں",
  "Confirm the design, quantity, timing and complete order price.": "ڈیزائن، تعداد، وقت اور مکمل آرڈر کی قیمت کی تصدیق کریں۔",
  "Approve the details": "تفصیلات منظور کریں",
  "We proceed only after the important order details are agreed.": "ہم تمام اہم تفصیلات طے ہونے کے بعد ہی آگے بڑھتے ہیں۔",
  "Arrange your supply": "سپلائی کا انتظام کریں",
  "Coordinate preparation and delivery for your confirmed order.": "اپنے منظور شدہ آرڈر کی تیاری اور ڈیلیوری کا انتظام کریں۔",
  "View the ordering process": "آرڈر کا طریقۂ کار دیکھیں",
  "THE APNAAB APPROACH": "APNAAB کا طریقۂ کار",
  "Well presented.": "خوبصورت پیشکش۔",
  "Clearly agreed.": "ہر بات واضح اور طے شدہ۔",
  "A custom bottle order should suit your identity, your quantity and the occasion. We discuss the details with you before anything is confirmed.": "خصوصی بوتلوں کا آرڈر آپ کے برانڈ، تعداد اور موقع کے مطابق ہونا چاہیے۔ حتمی منظوری سے پہلے ہم آپ کے ساتھ تمام تفصیلات طے کرتے ہیں۔",
  "Made around your brand": "آپ کے برانڈ کے مطابق",
  "Your logo, colours and business identity guide the label direction.": "آپ کا لوگو، رنگ اور کاروباری شناخت لیبل کے ڈیزائن کی بنیاد بنتے ہیں۔",
  "A complete bottle order": "مکمل بوتل کا آرڈر",
  "The planned supply includes filling, capping, sealing and your custom label.": "مجوزہ سپلائی میں پانی بھرنا، ڈھکن لگانا، سیل کرنا اور آپ کا خصوصی لیبل شامل ہے۔",
  "Clear approval first": "پہلے واضح منظوری",
  "Review the proposed design and quotation before confirming production.": "تیاری کی منظوری سے پہلے مجوزہ ڈیزائن اور قیمت کا جائزہ لیں۔",
  "Straightforward coordination": "آسان اور واضح رابطہ",
  "Discuss quantity, delivery city and timing before the order is confirmed.": "آرڈر کی تصدیق سے پہلے تعداد، ڈیلیوری شہر اور وقت طے کریں۔",
  "LET'S PUT YOUR BRAND ON THE BOTTLE": "آئیے آپ کا برانڈ بوتل پر نمایاں کریں",
  "Start with a conversation.": "بات چیت سے آغاز کریں۔",
  "We'll take it from there.": "آگے کا عمل ہم آپ کے ساتھ طے کریں گے۔",
  "Tell us your business, delivery city and expected quantity. We'll guide you through the design and quotation steps.": "اپنے کاروبار، ڈیلیوری شہر اور متوقع تعداد کے بارے میں بتائیں۔ ہم ڈیزائن اور قیمت کے مراحل میں آپ کی رہنمائی کریں گے۔",
  "500 ml bottle format": "500 ملی لیٹر بوتل",
  "Minimum 500 bottles": "کم از کم 500 بوتلیں",
  "Start a WhatsApp enquiry": "واٹس ایپ پر رابطہ کریں",
  "Prefer the contact page?": "کیا آپ رابطہ فارم استعمال کرنا چاہتے ہیں؟",
  "Visit here": "یہاں جائیں",

  "ABOUT APNAAB": "APNAAB کے بارے میں",
  "We help your brand": "ہم آپ کے برانڈ کو",
  "show up in the details.": "ہر چھوٹی تفصیل میں نمایاں کرتے ہیں۔",
  "Customized drinking-water bottles for businesses that care about the experience they create.": "ان کاروباروں کے لیے خصوصی لیبل والی پانی کی بوتلیں جو اپنے صارفین کے تجربے کو اہمیت دیتے ہیں۔",
  "WHO WE ARE": "ہم کون ہیں",
  "A practical service with": "ایک آسان خدمت،",
  "your business in mind.": "آپ کے کاروبار کو مدِنظر رکھتے ہوئے۔",
  "APNAAB is a Peshawar-based business being developed to help hotels, restaurants, hospitals, wedding halls, event organizers and other businesses order drinking-water bottles with labels shaped around their own identity.": "APNAAB پشاور میں قائم ایک کاروبار ہے جس کا مقصد ہوٹلوں، ریسٹورنٹس، ہسپتالوں، شادی ہالز، ایونٹ آرگنائزرز اور دیگر کاروباروں کو ان کی اپنی شناخت کے مطابق لیبل والی پانی کی بوتلیں فراہم کرنے میں مدد دینا ہے۔",
  "Customers can discuss their logo, brand colours, business information and order requirements with us. We coordinate the design and complete bottled-water order around the details agreed in the quotation.": "صارفین اپنے لوگو، برانڈ کے رنگ، کاروباری معلومات اور آرڈر کی ضروریات پر ہم سے بات کر سکتے ہیں۔ ہم طے شدہ کوٹیشن کے مطابق ڈیزائن اور مکمل بوتلوں کے آرڈر کا انتظام کرتے ہیں۔",
  "Our starting offer is a customized 500 ml bottle, with a minimum order of": "ہماری ابتدائی پیشکش خصوصی لیبل والی 500 ملی لیٹر بوتل ہے، جس کا کم از کم آرڈر",
  "Discuss your order": "اپنے آرڈر پر بات کریں",
  "Chat on WhatsApp": "واٹس ایپ پر بات کریں",
  "WHAT GUIDES US": "ہماری رہنمائی کے اصول",
  "Good business starts with": "اچھے کاروبار کی بنیاد ہے",
  "clear expectations.": "واضح توقعات۔",
  "We want customers to know what they are ordering, what has been approved and what will happen next.": "ہم چاہتے ہیں کہ صارفین کو معلوم ہو کہ وہ کیا آرڈر کر رہے ہیں، کیا منظور ہو چکا ہے اور اگلا مرحلہ کیا ہوگا۔",
  "Brand-led design": "برانڈ کے مطابق ڈیزائن",
  "Bottle labels are planned around each customer's logo, colours and approved business details.": "بوتل کے لیبل ہر صارف کے لوگو، رنگوں اور منظور شدہ کاروباری معلومات کے مطابق تیار کیے جاتے ہیں۔",
  "Clear communication": "واضح رابطہ",
  "Requirements, artwork, quotation and order details are discussed before an order is confirmed.": "آرڈر کی منظوری سے پہلے ضروریات، ڈیزائن، قیمت اور آرڈر کی تمام تفصیلات پر بات کی جاتی ہے۔",
  "Responsible presentation": "ذمہ دارانہ پیشکش",
  "We aim to present product information clearly and avoid claims that have not been verified.": "ہم مصنوعات کی معلومات واضح انداز میں پیش کرتے ہیں اور غیر تصدیق شدہ دعووں سے گریز کرتے ہیں۔",
  "STARTING IN PESHAWAR": "آغاز پشاور سے",
  "Built to serve local businesses, with room to grow.": "مقامی کاروباروں کی خدمت، ترقی کے روشن امکانات کے ساتھ۔",
  "Our initial focus is to understand the needs of businesses in Peshawar and build dependable customer relationships. Delivery availability outside the area is confirmed individually with each quotation.": "ہماری ابتدائی توجہ پشاور کے کاروباروں کی ضروریات سمجھنے اور قابلِ اعتماد تعلقات قائم کرنے پر ہے۔ شہر سے باہر ڈیلیوری کی دستیابی ہر کوٹیشن میں الگ سے طے کی جاتی ہے۔",
  "minimum bottles per order": "فی آرڈر کم از کم بوتلیں",
  "Current starting order quantity": "موجودہ کم از کم آرڈر",
  "LET'S TALK": "آئیے بات کرتے ہیں",
  "Tell us what your": "اپنے",
  "business needs.": "کاروبار کی ضرورت بتائیں۔",
  "Share your idea and we'll discuss the available next steps.": "اپنا خیال شیئر کریں، ہم اگلے ممکنہ مراحل پر بات کریں گے۔",
  "Contact APNAAB": "APNAAB سے رابطہ کریں",

  "OUR BOTTLES": "ہماری بوتلیں",
  "One bottle.": "ایک بوتل۔",
  "Your whole identity.": "آپ کی مکمل پہچان۔",
  "Custom-branded 500 ml drinking-water bottles, finished around your business.": "آپ کے کاروبار کے مطابق تیار کردہ خصوصی لیبل والی 500 ملی لیٹر پانی کی بوتلیں۔",
  "500 ml option": "500 ملی لیٹر",
  "Custom label": "خصوصی لیبل",
  "THE 500 ML OPTION": "500 ملی لیٹر کا انتخاب",
  "Designed to carry": "آپ کے برانڈ کی نمائندگی کے لیے",
  "your brand.": "آپ کا برانڈ۔",
  "Whether you welcome hotel guests, serve restaurant customers or host a special event, a customized bottle gives your business another opportunity to make a consistent impression.": "چاہے آپ ہوٹل کے مہمانوں کا استقبال کریں، ریسٹورنٹ میں صارفین کو سروس دیں یا کوئی خاص تقریب منعقد کریں، خصوصی بوتل آپ کے کاروبار کو ایک مستقل اور خوبصورت تاثر دینے کا موقع دیتی ہے۔",
  "STANDARD SIZE": "معیاری سائز",
  "Other sizes can be discussed as future options.": "دیگر سائز کے بارے میں مستقبل میں بات کی جا سکتی ہے۔",
  "MINIMUM ORDER QUANTITY": "کم از کم آرڈر کی تعداد",
  "Request a bottle quotation": "بوتلوں کی قیمت معلوم کریں",
  "WHAT'S INCLUDED": "اس میں کیا شامل ہے",
  "A complete bottle,": "ایک مکمل بوتل،",
  "thoughtfully presented.": "خوبصورتی سے تیار کردہ۔",
  "Discuss your preferred design and order details with our team before confirming.": "آرڈر کی تصدیق سے پہلے اپنی پسند کے ڈیزائن اور تفصیلات ہماری ٹیم سے طے کریں۔",
  "500 ml bottle": "500 ملی لیٹر بوتل",
  "A practical size for hospitality, dining, events and business use.": "مہمان نوازی، کھانے پینے، تقریبات اور کاروباری استعمال کے لیے موزوں سائز۔",
  "Custom label design": "خصوصی لیبل ڈیزائن",
  "A label concept built around your logo, colours and business information.": "آپ کے لوگو، رنگوں اور کاروباری معلومات کے مطابق لیبل کا ڈیزائن۔",
  "Filled, capped & sealed": "بھری ہوئی، ڈھکن اور سیل کے ساتھ",
  "A complete bottled-water order prepared with filling, cap and tamper-evident seal.": "پانی سے بھرا مکمل آرڈر، ڈھکن اور چھیڑ چھاڑ ظاہر کرنے والی سیل کے ساتھ۔",
  "Order coordination": "آرڈر کا انتظام",
  "Confirm the design, quotation, quantity and delivery details before production.": "تیاری سے پہلے ڈیزائن، قیمت، تعداد اور ڈیلیوری کی تفصیلات طے کریں۔",
  "YOUR LABEL, YOUR WAY": "آپ کا لیبل، آپ کے انداز میں",
  "Make it unmistakably": "اپنی پہچان کو",
  "yours.": "منفرد بنائیں۔",
  "We can discuss a label direction that suits your business identity.": "ہم آپ کے کاروبار کی شناخت کے مطابق لیبل ڈیزائن پر بات کر سکتے ہیں۔",
  "HOTEL COLLECTION": "ہوٹل کلیکشن",
  "Your Logo": "آپ کا لوگو",
  "WELCOME · 500 ml": "خوش آمدید · 500 ملی لیٹر",
  "RESTAURANT COLLECTION": "ریسٹورنٹ کلیکشن",
  "Your Brand": "آپ کا برانڈ",
  "MADE FOR YOUR TABLE · 500 ml": "آپ کی میز کے لیے · 500 ملی لیٹر",
  "EVENT COLLECTION": "ایونٹ کلیکشن",
  "Your Occasion": "آپ کی تقریب",
  "A PERSONAL TOUCH · 500 ml": "ایک ذاتی انداز · 500 ملی لیٹر",
  "Illustrative label concepts only. Final artwork is prepared using your approved business details.": "یہ صرف لیبل ڈیزائن کے نمونے ہیں۔ حتمی ڈیزائن آپ کی منظور شدہ کاروباری معلومات کے مطابق تیار ہوگا۔",
  "READY TO GET STARTED?": "کیا آپ آغاز کے لیے تیار ہیں؟",
  "Let's plan your": "آئیے آپ کے",
  "custom bottle order.": "خصوصی بوتلوں کا آرڈر طے کریں۔",
  "Start with your quantity, business type and preferred label direction.": "اپنی تعداد، کاروبار کی نوعیت اور پسندیدہ لیبل ڈیزائن سے آغاز کریں۔",

  "CONTACT APNAAB": "APNAAB سے رابطہ کریں",
  "Let's create a bottle": "آئیے ایک ایسی بوتل بنائیں",
  "that feels like yours.": "جو آپ کی اپنی پہچان ہو۔",
  "Tell us about your business, the quantity you need and how you'd like your bottles to look.": "اپنے کاروبار، درکار تعداد اور بوتلوں کے پسندیدہ انداز کے بارے میں بتائیں۔",
  "Minimum order": "کم از کم آرڈر",
  "Direct WhatsApp inquiry": "براہِ راست واٹس ایپ رابطہ",
  "WE'RE HERE TO HELP": "ہم مدد کے لیے موجود ہیں",
  "Start with a": "آغاز کریں",
  "conversation.": "بات چیت سے۔",
  "Whether you already have a label design or are starting with an idea, share your requirements and we'll guide you through the next steps.": "چاہے آپ کے پاس پہلے سے لیبل ڈیزائن موجود ہو یا صرف ایک خیال، اپنی ضروریات بتائیں اور ہم اگلے مراحل میں آپ کی رہنمائی کریں گے۔",
  "WHATSAPP INQUIRIES": "واٹس ایپ رابطہ",
  "REQUEST A QUOTE": "قیمت معلوم کریں",
  "Tell us what you need.": "اپنی ضرورت بتائیں۔",
  "Complete the details below. Your inquiry will open in WhatsApp for you to review and send.": "نیچے دی گئی تفصیلات مکمل کریں۔ آپ کا پیغام واٹس ایپ میں کھلے گا جہاں آپ اسے دیکھ کر بھیج سکتے ہیں۔",
  "Your name *": "آپ کا نام *",
  "Enter your name": "اپنا نام درج کریں",
  "Business name *": "کاروبار کا نام *",
  "Hotel, restaurant or company": "ہوٹل، ریسٹورنٹ یا کمپنی",
  "Business type": "کاروبار کی نوعیت",
  "Preferred contact number": "رابطے کا پسندیدہ نمبر",
  "Optional phone / WhatsApp": "فون / واٹس ایپ نمبر (اختیاری)",
  "Estimated quantity *": "متوقع تعداد *",
  "Delivery city *": "ڈیلیوری کا شہر *",
  "e.g. Peshawar": "مثلاً پشاور",
  "Tell us about your requirements": "اپنی ضروریات کے بارے میں بتائیں",
  "Share your preferred label style, logo details or any other requirements...": "اپنا پسندیدہ لیبل انداز، لوگو کی تفصیلات یا کوئی اور ضرورت لکھیں۔۔۔",
  "Please complete your name, business name and delivery city.": "براہِ کرم اپنا نام، کاروبار کا نام اور ڈیلیوری شہر درج کریں۔",
  "The minimum order is 500 bottles. Please enter 500 or more.": "کم از کم آرڈر 500 بوتلوں کا ہے۔ براہِ کرم 500 یا اس سے زیادہ تعداد درج کریں۔",
  "Send inquiry on WhatsApp": "واٹس ایپ پر استفسار بھیجیں",
  "Your inquiry opens in WhatsApp. Review the message and send it when you are ready.": "آپ کا پیغام واٹس ایپ میں کھلے گا۔ بھیجنے سے پہلے اسے دیکھ لیں۔",
  "Hotel": "ہوٹل",
  "Restaurant / Cafe": "ریسٹورنٹ / کیفے",
  "Hospital / Clinic": "ہسپتال / کلینک",
  "Wedding Hall": "شادی ہال",
  "Corporate / Event": "کارپوریٹ / تقریب",
  "Catering": "کیٹرنگ",
  "Other": "دیگر",

  "HOW IT WORKS": "طریقۂ کار",
  "From your idea": "آپ کے خیال سے",
  "to your bottle.": "آپ کی بوتل تک۔",
  "A straightforward process that keeps you informed at every important step.": "ایک آسان طریقہ جس میں ہر اہم مرحلے پر آپ کو مکمل معلومات دی جاتی ہیں۔",
  "Design approval first": "پہلے ڈیزائن کی منظوری",
  "THE ORDERING JOURNEY": "آرڈر کا سفر",
  "Five steps to a": "صرف پانچ مراحل میں",
  "customized order.": "آپ کا خصوصی آرڈر۔",
  "We keep the process clear, so you know what is needed from the first inquiry to delivery coordination.": "ہم طریقۂ کار واضح رکھتے ہیں تاکہ پہلے رابطے سے ڈیلیوری کے انتظام تک آپ کو ہر ضرورت معلوم ہو۔",
  "Share your requirements": "اپنی ضروریات بتائیں",
  "Tell us your business type, delivery city, estimated quantity and label preferences. You can share your logo and business details through WhatsApp.": "اپنے کاروبار کی نوعیت، ڈیلیوری شہر، متوقع تعداد اور لیبل کی پسند بتائیں۔ آپ واٹس ایپ کے ذریعے اپنا لوگو اور کاروباری معلومات بھیج سکتے ہیں۔",
  "Discuss your label direction": "لیبل کے ڈیزائن پر بات کریں",
  "We discuss how your logo, colours and approved information can be arranged on the label. Existing artwork can be shared as a starting point.": "ہم طے کرتے ہیں کہ آپ کا لوگو، رنگ اور منظور شدہ معلومات لیبل پر کس طرح ترتیب دی جائیں۔ آغاز کے لیے موجودہ ڈیزائن بھی شیئر کیا جا سکتا ہے۔",
  "Review the quotation": "قیمت کی پیشکش کا جائزہ لیں",
  "We confirm the product details, quantity, label requirements, pricing and delivery arrangements in a quotation for your review.": "ہم مصنوعات کی تفصیلات، تعداد، لیبل کی ضروریات، قیمت اور ڈیلیوری کے انتظامات کو کوٹیشن میں واضح کرتے ہیں۔",
  "Approve before production": "تیاری سے پہلے منظوری دیں",
  "You review the final label artwork and written order details. Production is arranged only after the agreed design and quotation are approved.": "آپ حتمی لیبل ڈیزائن اور تحریری آرڈر کی تفصیلات کا جائزہ لیتے ہیں۔ طے شدہ ڈیزائن اور کوٹیشن کی منظوری کے بعد ہی تیاری کا انتظام ہوتا ہے۔",
  "Order preparation and delivery": "آرڈر کی تیاری اور ڈیلیوری",
  "The confirmed order is prepared with the agreed bottled-water, cap, seal and label specifications. Delivery timing and destination are coordinated with you.": "تصدیق شدہ آرڈر طے شدہ پانی، ڈھکن، سیل اور لیبل کی تفصیلات کے مطابق تیار کیا جاتا ہے۔ ڈیلیوری کا وقت اور مقام آپ کے ساتھ طے کیا جاتا ہے۔",
  "FREQUENTLY ASKED QUESTIONS": "اکثر پوچھے جانے والے سوالات",
  "Before you": "آرڈر دینے سے پہلے",
  "place an inquiry.": "یہ معلومات دیکھ لیں۔",
  "Helpful answers to common questions about customized bottle orders.": "خصوصی بوتلوں کے آرڈر سے متعلق عام سوالات کے مفید جوابات۔",
  "What is the minimum order quantity?": "کم از کم آرڈر کی تعداد کتنی ہے؟",
  "The current minimum order is 500 bottles per order. Contact us to discuss your expected quantity and delivery city.": "اس وقت ہر آرڈر کی کم از کم تعداد 500 بوتلیں ہے۔ اپنی متوقع تعداد اور ڈیلیوری شہر کے بارے میں ہم سے رابطہ کریں۔",
  "Which bottle size is currently featured?": "اس وقت کون سا بوتل سائز دستیاب ہے؟",
  "Our starting offer is a 500 ml customized drinking-water bottle. Any additional size or format must be confirmed before it is advertised or quoted.": "ہماری ابتدائی پیشکش 500 ملی لیٹر کی خصوصی لیبل والی پانی کی بوتل ہے۔ کسی اضافی سائز یا فارمیٹ کی تشہیر یا قیمت دینے سے پہلے اس کی تصدیق ضروری ہے۔",
  "What do I need to provide for the label?": "لیبل کے لیے مجھے کیا فراہم کرنا ہوگا؟",
  "You can share your business name, logo, preferred colours and the exact information you want displayed. Please check spelling and details before approving final artwork.": "آپ کاروبار کا نام، لوگو، پسندیدہ رنگ اور وہ درست معلومات فراہم کر سکتے ہیں جو لیبل پر درج کرنا چاہتے ہیں۔ حتمی ڈیزائن منظور کرنے سے پہلے املا اور تفصیلات ضرور دیکھ لیں۔",
  "Does the order include water, a cap and a seal?": "کیا آرڈر میں پانی، ڈھکن اور سیل شامل ہیں؟",
  "The service is planned around complete filled, capped, sealed and custom-labelled bottles. Exact product specifications are listed in the quotation before you confirm an order.": "یہ خدمت مکمل بھری ہوئی، ڈھکن اور سیل کے ساتھ خصوصی لیبل والی بوتلوں کے لیے ہے۔ آرڈر کی منظوری سے پہلے مصنوعات کی مکمل تفصیلات کوٹیشن میں درج کی جاتی ہیں۔",
  "How much does a customized bottle cost?": "ایک خصوصی بوتل کی قیمت کتنی ہے؟",
  "Pricing depends on the agreed bottle and label specifications, quantity and delivery arrangements. We provide a quotation after understanding your requirements.": "قیمت بوتل اور لیبل کی طے شدہ خصوصیات، تعداد اور ڈیلیوری کے انتظامات پر منحصر ہے۔ آپ کی ضروریات سمجھنے کے بعد قیمت فراہم کی جاتی ہے۔",
  "Can you deliver outside Peshawar?": "کیا پشاور سے باہر ڈیلیوری ہو سکتی ہے؟",
  "Share your delivery city with your inquiry. Availability, delivery cost and timing are confirmed individually before an order is accepted.": "اپنے پیغام میں ڈیلیوری شہر بتائیں۔ آرڈر قبول کرنے سے پہلے دستیابی، ڈیلیوری لاگت اور وقت کی الگ سے تصدیق کی جاتی ہے۔",
  "When does production start?": "تیاری کب شروع ہوتی ہے؟",
  "Production arrangements begin after you have reviewed and approved the final design and written quotation, subject to the agreed order terms.": "طے شدہ شرائط کے مطابق، حتمی ڈیزائن اور تحریری کوٹیشن کے جائزے اور منظوری کے بعد تیاری کا انتظام شروع ہوتا ہے۔",
  "HAVE YOUR REQUIREMENTS READY?": "کیا آپ کی ضروریات تیار ہیں؟",
  "Let's discuss your": "آئیے آپ کے",
  "first order.": "پہلے آرڈر پر بات کریں۔",
  "Send us your expected quantity and delivery city to begin.": "آغاز کے لیے اپنی متوقع تعداد اور ڈیلیوری شہر بتائیں۔",

  "INDUSTRIES WE SERVE": "ہمارے خدماتی شعبے",
  "Made for your": "آپ کے",
  "kind of business.": "کاروبار کے مطابق۔",
  "Thoughtful, customized bottled-water presentation for the places people gather, work, dine and celebrate.": "ان مقامات کے لیے خصوصی لیبل والی پانی کی بوتلیں جہاں لوگ ملتے، کام کرتے، کھانا کھاتے اور خوشیاں مناتے ہیں۔",
  "WHO WE WORK WITH": "ہم کن کے ساتھ کام کرتے ہیں",
  "One service.": "ایک خدمت۔",
  "Many ways to make it yours.": "آپ کے انداز کے کئی طریقے۔",
  "Choose your industry to see how customized bottles can fit into your customer experience.": "اپنا شعبہ منتخب کریں اور دیکھیں کہ خصوصی بوتلیں آپ کے صارفین کے تجربے کو کیسے بہتر بنا سکتی ہیں۔",
  "Hotels": "ہوٹلز",
  "A welcoming detail for every stay.": "ہر قیام کے لیے خوش آمدیدی تفصیل۔",
  "Offer guests a consistent brand experience in rooms, suites, meeting spaces and hospitality areas. Custom labels can reflect your hotel's name, visual identity and service style.": "کمروں، سویٹس، میٹنگ رومز اور مہمان نوازی کے مقامات پر اپنے مہمانوں کو ایک جیسا برانڈ تجربہ دیں۔ خصوصی لیبل آپ کے ہوٹل کے نام، شناخت اور سروس کے انداز کی عکاسی کر سکتے ہیں۔",
  "Guest rooms and suites": "مہمانوں کے کمرے اور سویٹس",
  "Hotel restaurants and lounges": "ہوٹل ریسٹورنٹس اور لاؤنجز",
  "Meetings and guest events": "میٹنگز اور مہمانوں کی تقریبات",
  "Your identity, right at the table.": "آپ کی پہچان، ہر میز پر۔",
  "Bring your restaurant or café identity into the dining experience with customized bottles that complement your menu, interior and customer service.": "اپنے مینو، اندرونی سجاوٹ اور کسٹمر سروس کے مطابق خصوصی بوتلوں کے ذریعے ریسٹورنٹ یا کیفے کی شناخت کو کھانے کے تجربے کا حصہ بنائیں۔",
  "Restaurant tables": "ریسٹورنٹ کی میزیں",
  "Café service": "کیفے سروس",
  "Private dining and catering": "نجی تقریبات اور کیٹرنگ",
  "A consistent look across your facility.": "آپ کے ادارے میں یکساں انداز۔",
  "Create a coordinated bottled-water presentation for reception areas, visitor spaces, staff meetings and approved hospitality arrangements.": "استقبالیہ، مہمانوں کے مقامات، اسٹاف میٹنگز اور منظور شدہ مہمان نوازی کے انتظامات کے لیے ہم آہنگ بوتلوں کی پیشکش تیار کریں۔",
  "Visitor and reception areas": "مہمانوں اور استقبالیہ کے مقامات",
  "Meetings and conferences": "میٹنگز اور کانفرنسز",
  "Clinic hospitality spaces": "کلینک کے مہمان نوازی کے مقامات",
  "Wedding Halls & Events": "شادی ہالز اور تقریبات",
  "A personal touch for special occasions.": "خاص مواقع کے لیے ذاتی انداز۔",
  "Add a customized detail to wedding celebrations, family events and formal gatherings. Labels can be designed around the couple, event theme or host identity.": "شادیوں، خاندانی تقریبات اور رسمی اجتماعات میں خصوصی بوتلوں کا اضافہ کریں۔ لیبل جوڑے، تقریب کے موضوع یا میزبان کی شناخت کے مطابق ڈیزائن کیے جا سکتے ہیں۔",
  "Wedding receptions": "شادی کی تقریبات",
  "Family celebrations": "خاندانی خوشیاں",
  "Formal functions": "رسمی تقریبات",
  "Corporate Events": "کارپوریٹ تقریبات",
  "A branded detail for your next gathering.": "آپ کی اگلی تقریب کے لیے برانڈڈ تفصیل۔",
  "Keep your event presentation consistent with bottles customized for conferences, seminars, product launches and company meetings.": "کانفرنسز، سیمینارز، مصنوعات کی رونمائی اور کمپنی میٹنگز کے لیے خصوصی بوتلوں کے ذریعے تقریب کی پیشکش کو یکساں رکھیں۔",
  "Conferences and seminars": "کانفرنسز اور سیمینارز",
  "Company meetings": "کمپنی میٹنگز",
  "Brand activations": "برانڈ کی تشہیری سرگرمیاں",
  "Catering Businesses": "کیٹرنگ کے کاروبار",
  "A coordinated finish for every service.": "ہر سروس کے لیے ہم آہنگ تکمیل۔",
  "Support your catering presentation with customized bottled water for corporate functions, celebrations and hospitality orders.": "کارپوریٹ تقریبات، خوشیوں اور مہمان نوازی کے آرڈرز کے لیے خصوصی بوتلوں کے ذریعے اپنی کیٹرنگ کی پیشکش بہتر بنائیں۔",
  "Corporate catering": "کارپوریٹ کیٹرنگ",
  "Private functions": "نجی تقریبات",
  "Off-site hospitality": "بیرونی مقامات پر مہمان نوازی",
  "WATER · BRAND · EXPERIENCE": "پانی · برانڈ · تجربہ",
  "Discuss your requirements": "اپنی ضروریات پر بات کریں",
  "YOUR BUSINESS, YOUR BOTTLE": "آپ کا کاروبار، آپ کی بوتل",
  "Don't see your industry?": "کیا آپ کا شعبہ یہاں موجود نہیں؟",
  "Let's talk.": "آئیے بات کرتے ہیں۔",
  "Share what you have in mind and we'll discuss a suitable customized bottle solution.": "اپنا خیال بتائیں، ہم آپ کے لیے موزوں خصوصی بوتلوں کے حل پر بات کریں گے۔",
  "Current minimum order:": "موجودہ کم از کم آرڈر:",
  "Contact us": "ہم سے رابطہ کریں",

  "OUR PORTFOLIO": "ہماری ڈیزائن گیلری",
  "Ideas that put": "ایسے آئیڈیاز جو",
  "your brand in view.": "آپ کے برانڈ کو نمایاں کریں۔",
  "Explore visual directions for customized bottles across different business settings.": "مختلف کاروباری شعبوں کے لیے خصوصی بوتلوں کے ڈیزائن دیکھیں۔",
  "DESIGN INSPIRATION": "ڈیزائن کے لیے آئیڈیاز",
  "A starting point for": "آپ کے اپنے ڈیزائن کے لیے",
  "your own design.": "ایک ابتدائی خیال۔",
  "These are illustrative concept examples, created to show possible styles and settings. They are not presented as completed customer projects or endorsements. Your artwork is developed around your approved business details.": "یہ صرف ممکنہ انداز دکھانے کے لیے بنائے گئے ڈیزائن کے نمونے ہیں۔ انہیں مکمل شدہ کسٹمر پروجیکٹس یا توثیق کے طور پر پیش نہیں کیا گیا۔ آپ کا حتمی ڈیزائن آپ کی منظور شدہ کاروباری معلومات کے مطابق تیار ہوگا۔",
  "All portfolio visuals are generated with lightweight water-motion artwork. They are illustrative inspiration, not photographs of completed customer orders. Final bottle appearance, label dimensions, materials and print specifications are confirmed in the order quotation.": "پورٹ فولیو کے تمام ویژول پانی کی ہلکی اینیمیشن سے تیار کردہ نمونے ہیں۔ یہ صرف آئیڈیاز ہیں، مکمل کسٹمر آرڈرز کی تصاویر نہیں۔ بوتل کی حتمی شکل، لیبل کے سائز، مواد اور پرنٹنگ کی تفصیلات کوٹیشن میں طے کی جائیں گی۔",
  "HAVE A DESIGN IN MIND?": "کیا آپ کے ذہن میں کوئی ڈیزائن ہے؟",
  "Let's make a label": "آئیے ایک لیبل بنائیں",
  "for your business.": "آپ کے کاروبار کے لیے۔",
  "Share your logo, preferred style and expected quantity.": "اپنا لوگو، پسندیدہ انداز اور متوقع تعداد شیئر کریں۔",
  "Discuss your design": "اپنے ڈیزائن پر بات کریں",
  "All": "تمام",
  "Restaurants": "ریسٹورنٹس",
  "Healthcare": "صحت کے ادارے",
  "Events": "تقریبات",
  "Corporate": "کارپوریٹ",
  "Hotel welcome concept": "ہوٹل ویلکم ڈیزائن",
  "Restaurant table concept": "ریسٹورنٹ ٹیبل ڈیزائن",
  "Clinic hospitality concept": "کلینک مہمان نوازی ڈیزائن",
  "Wedding celebration concept": "شادی کی تقریب کا ڈیزائن",
  "Corporate meeting concept": "کارپوریٹ میٹنگ ڈیزائن",
  "Event service concept": "ایونٹ سروس ڈیزائن",
  "A calm label direction for guest rooms and hospitality spaces.": "مہمانوں کے کمروں اور مہمان نوازی کے مقامات کے لیے پُرسکون لیبل ڈیزائن۔",
  "A clean presentation designed to complement a dining experience.": "کھانے کے تجربے کو بہتر بنانے کے لیے صاف ستھرا ڈیزائن۔",
  "A clear design direction for clinics and visitor areas.": "کلینکس اور مہمانوں کے مقامات کے لیے واضح ڈیزائن۔",
  "A personal label direction for weddings and special occasions.": "شادیوں اور خاص مواقع کے لیے ذاتی نوعیت کا لیبل۔",
  "A professional visual direction for conferences and company gatherings.": "کانفرنسز اور کمپنی اجتماعات کے لیے پیشہ ورانہ ڈیزائن۔",
  "A versatile direction for catered functions and hosted events.": "کیٹرنگ اور تقریبات کے لیے ہمہ گیر ڈیزائن۔",
  "Filter concept examples": "ڈیزائن کے نمونے فلٹر کریں",

  "APNAAB": "APNAAB",
  "Privacy": "رازداری",
  "Policy": "پالیسی",
  "This page explains what happens when you visit our website or use its inquiry features.": "یہ صفحہ بتاتا ہے کہ ہماری ویب سائٹ دیکھنے یا رابطے کی سہولت استعمال کرنے پر آپ کی معلومات کے ساتھ کیا ہوتا ہے۔",
  "Website:": "ویب سائٹ:",
  "1. Information you choose to share": "1۔ آپ کی فراہم کردہ معلومات",
  "The quotation form asks for details such as your name, business name, business type, estimated order quantity, delivery city and additional requirements. The information is used to prepare a message for you to review in WhatsApp.": "قیمت معلوم کرنے کے فارم میں آپ کا نام، کاروبار کا نام، کاروبار کی نوعیت، متوقع تعداد، ڈیلیوری شہر اور اضافی ضروریات پوچھی جاتی ہیں۔ ان معلومات سے واٹس ایپ کے لیے پیغام تیار ہوتا ہے جسے آپ بھیجنے سے پہلے دیکھ سکتے ہیں۔",
  "2. WhatsApp inquiries": "2۔ واٹس ایپ پر رابطہ",
  "When you select a WhatsApp contact or submit the quotation form, your browser opens WhatsApp with a prepared message. The message is not sent until you choose to send it in WhatsApp. Information you send through WhatsApp is handled by WhatsApp under its own terms and privacy policy.": "جب آپ واٹس ایپ رابطہ منتخب کرتے یا کوٹیشن فارم مکمل کرتے ہیں تو آپ کے براؤزر میں تیار شدہ پیغام کے ساتھ واٹس ایپ کھلتا ہے۔ آپ کی اجازت کے بغیر پیغام نہیں بھیجا جاتا۔ واٹس ایپ کے ذریعے بھیجی گئی معلومات واٹس ایپ کی اپنی شرائط اور رازداری کی پالیسی کے مطابق استعمال ہوتی ہیں۔",
  "3. Website storage": "3۔ ویب سائٹ پر معلومات کا ذخیرہ",
  "This website does not provide customer accounts, online payments or a database-backed inquiry submission service. The quotation form formats the inquiry in your browser and opens WhatsApp; it does not submit the form contents to a APNAAB website database.": "یہ ویب سائٹ صارف اکاؤنٹس، آن لائن ادائیگی یا ڈیٹا بیس کے ذریعے استفسار جمع کرنے کی سہولت فراہم نہیں کرتی۔ کوٹیشن فارم آپ کے براؤزر میں پیغام تیار کر کے واٹس ایپ کھولتا ہے؛ فارم کا ڈیٹا APNAAB کے ویب سائٹ ڈیٹا بیس میں جمع نہیں ہوتا۔",
  "4. Technical information": "4۔ تکنیکی معلومات",
  "The website is hosted by a third-party hosting provider. The provider may process technical information such as IP address, browser details and request logs as needed to deliver, secure and maintain the website. We have not added advertising trackers or an analytics profile to the current website.": "ویب سائٹ ایک بیرونی ہوسٹنگ فراہم کنندہ کے ذریعے چلائی جاتی ہے۔ ویب سائٹ کی فراہمی، حفاظت اور دیکھ بھال کے لیے ہوسٹنگ فراہم کنندہ آئی پی ایڈریس، براؤزر کی تفصیلات اور درخواستوں کے لاگز جیسی تکنیکی معلومات استعمال کر سکتا ہے۔ موجودہ ویب سائٹ میں اشتہاری ٹریکرز یا صارفین کی تجزیاتی پروفائلنگ شامل نہیں کی گئی۔",
  "5. Visual design and external services": "5۔ بصری ڈیزائن اور بیرونی خدمات",
  "The water-motion backgrounds and decorative surfaces on this website are rendered locally by CSS and SVG. They do not load stock-photo galleries or looping background-video files. WhatsApp links open an external service, which may process information according to its own policies.": "اس ویب سائٹ کے پانی سے متعلق متحرک پس منظر اور آرائشی عناصر CSS اور SVG کے ذریعے مقامی طور پر تیار ہوتے ہیں۔ ان میں اسٹاک تصاویر کی گیلری یا مسلسل چلنے والی ویڈیو فائلیں لوڈ نہیں ہوتیں۔ واٹس ایپ لنکس ایک بیرونی سروس کھولتے ہیں جو اپنی پالیسی کے مطابق معلومات استعمال کر سکتی ہے۔",
  "6. Sharing and sensitive information": "6۔ معلومات کا اشتراک اور حساس معلومات",
  "Do not include passwords, payment card information, identity documents or other sensitive personal information in a quotation inquiry. We do not sell inquiry details. We may use the details you choose to share to respond to your business inquiry and discuss the requested order.": "قیمت معلوم کرنے کے پیغام میں پاس ورڈ، ادائیگی کارڈ کی معلومات، شناختی دستاویزات یا دیگر حساس ذاتی معلومات شامل نہ کریں۔ ہم رابطے کی معلومات فروخت نہیں کرتے۔ آپ کی فراہم کردہ معلومات آپ کے کاروباری استفسار کا جواب دینے اور مطلوبہ آرڈر پر بات کرنے کے لیے استعمال ہو سکتی ہیں۔",
  "7. Updates": "7۔ پالیسی میں تبدیلیاں",
  "This policy may be updated when website features or business practices change. The current version will be published on this page.": "ویب سائٹ کی سہولیات یا کاروباری طریقۂ کار میں تبدیلی کے ساتھ اس پالیسی کو اپ ڈیٹ کیا جا سکتا ہے۔ موجودہ ورژن اسی صفحے پر شائع ہوگا۔",
  "8. Questions": "8۔ سوالات",
  "For a privacy-related question, contact us through": "رازداری سے متعلق سوال کے لیے رابطہ کریں:",
  "WhatsApp at": "واٹس ایپ:",
  "Terms &": "شرائط و",
  "Conditions": "ضوابط",
  "These general terms apply to use of this website and to initial discussions about customized bottle orders.": "یہ عمومی شرائط اس ویب سائٹ کے استعمال اور خصوصی بوتلوں کے آرڈرز سے متعلق ابتدائی گفتگو پر لاگو ہوتی ہیں۔",
  "1. Website information": "1۔ ویب سائٹ کی معلومات",
  "This website introduces APNAAB's customized bottled-water service and provides a way to request a quotation. Product descriptions and water-motion visuals are for general information and design inspiration. Final product specifications are the details confirmed in the written quotation for an order.": "یہ ویب سائٹ APNAAB کی خصوصی لیبل والی پانی کی بوتلوں کی خدمت متعارف کراتی ہے اور قیمت معلوم کرنے کا طریقہ فراہم کرتی ہے۔ مصنوعات کی تفصیلات اور پانی سے متعلق متحرک ویژول عمومی معلومات اور ڈیزائن آئیڈیاز کے لیے ہیں۔ حتمی مصنوعات کی خصوصیات آرڈر کی تحریری کوٹیشن میں طے ہوں گی۔",
  "2. Minimum order quantity": "2۔ کم از کم آرڈر کی تعداد",
  "The current minimum order quantity shown on this website is": "اس ویب سائٹ پر موجودہ کم از کم آرڈر کی تعداد",
  "Any exception must be agreed with APNAAB in writing before an order is accepted.": "کسی بھی استثنا پر آرڈر قبول کرنے سے پہلے APNAAB کے ساتھ تحریری اتفاق ضروری ہے۔",
  "3. Quotations and pricing": "3۔ کوٹیشن اور قیمتیں",
  "Prices are not fixed by the website. A quotation is prepared according to the agreed bottle specifications, label requirements, order quantity and delivery arrangements. A WhatsApp inquiry is a request for information and is not, by itself, acceptance of an order or a confirmed price.": "ویب سائٹ پر قیمتیں مقرر نہیں کی گئیں۔ کوٹیشن بوتل کی طے شدہ خصوصیات، لیبل کی ضروریات، آرڈر کی تعداد اور ڈیلیوری کے انتظامات کے مطابق تیار ہوتی ہے۔ واٹس ایپ پر رابطہ صرف معلومات کی درخواست ہے، یہ بذاتِ خود آرڈر کی منظوری یا حتمی قیمت نہیں ہے۔",
  "4. Artwork and customer approval": "4۔ ڈیزائن اور صارف کی منظوری",
  "Customers are responsible for reviewing the spelling, logos, business names and other information supplied for their labels. The customer must approve the final artwork and written order details before production arrangements proceed. Any requested change after approval may affect timing or price and must be discussed before it is made.": "صارفین اپنے لیبل کے لیے فراہم کردہ املا، لوگو، کاروباری نام اور دیگر معلومات کا جائزہ لینے کے ذمہ دار ہیں۔ تیاری کا انتظام شروع ہونے سے پہلے حتمی ڈیزائن اور تحریری آرڈر کی تفصیلات منظور کرنا ضروری ہے۔ منظوری کے بعد کسی تبدیلی سے وقت یا قیمت متاثر ہو سکتی ہے، اس لیے تبدیلی سے پہلے بات کرنا ضروری ہے۔",
  "5. Product and delivery details": "5۔ مصنوعات اور ڈیلیوری کی تفصیلات",
  "The service is intended to supply complete filled, capped, sealed and customized bottles. The specific water, bottle, cap, seal, label, packaging, quantity, delivery location, timing and any applicable charges must be confirmed in the written quotation. Availability and delivery outside the initial service area are confirmed individually.": "اس خدمت کا مقصد مکمل بھری ہوئی، ڈھکن اور سیل کے ساتھ خصوصی لیبل والی بوتلیں فراہم کرنا ہے۔ پانی، بوتل، ڈھکن، سیل، لیبل، پیکنگ، تعداد، ڈیلیوری کا مقام، وقت اور قابلِ اطلاق اخراجات تحریری کوٹیشن میں طے ہوں گے۔ ابتدائی سروس ایریا سے باہر دستیابی اور ڈیلیوری کی الگ تصدیق کی جائے گی۔",
  "6. Compliance and product information": "6۔ ضابطوں کی پابندی اور مصنوعات کی معلومات",
  "Product descriptions, quality information, regulatory details and any certifications must be supported by current documentation and confirmed before they are represented as applicable to an order. Nothing on this website should be read as a claim of a certification, approval or laboratory result that has not been verified.": "مصنوعات کی تفصیلات، معیار، ضابطہ جاتی معلومات اور کسی بھی سرٹیفکیشن کو آرڈر کے لیے بیان کرنے سے پہلے موجودہ دستاویزات سے ثابت اور تصدیق شدہ ہونا چاہیے۔ ویب سائٹ پر کسی غیر تصدیق شدہ سرٹیفکیشن، منظوری یا لیبارٹری رپورٹ کا دعویٰ نہیں کیا گیا۔",
  "7. Illustrative concept visuals": "7۔ ڈیزائن کے نمائشی ویژول",
  "Water-motion graphics and design concepts on the website are illustrative visual elements. They do not represent completed customer orders, endorsements or guaranteed final product appearance.": "ویب سائٹ پر پانی کی اینیمیشن اور ڈیزائن تصورات صرف نمائشی عناصر ہیں۔ یہ مکمل شدہ کسٹمر آرڈرز، کسی توثیق یا حتمی مصنوعات کی یقینی شکل کی نمائندگی نہیں کرتے۔",
  "8. Changes to these terms": "8۔ شرائط میں تبدیلی",
  "These website terms may be updated as the service and website develop. Specific order terms agreed in a written quotation will govern the relevant order to the extent they differ from general website information.": "خدمت اور ویب سائٹ کی ترقی کے ساتھ ان شرائط کو اپ ڈیٹ کیا جا سکتا ہے۔ تحریری کوٹیشن میں طے شدہ مخصوص آرڈر کی شرائط، عمومی ویب سائٹ معلومات سے مختلف ہونے کی صورت میں متعلقہ آرڈر پر لاگو ہوں گی۔",
  "9. Contact": "9۔ رابطہ",
  "For questions about these terms or to request a quotation, contact us through": "ان شرائط سے متعلق سوال یا قیمت معلوم کرنے کے لیے رابطہ کریں:",
  "PAGE NOT FOUND": "صفحہ نہیں ملا",
  "This page seems to have": "لگتا ہے یہ صفحہ",
  "gone missing.": "دستیاب نہیں ہے۔",
  "The link may be outdated or the page may have moved. Head back to APNAAB or contact our team for help.": "ممکن ہے لنک پرانا ہو یا صفحہ منتقل ہو گیا ہو۔ APNAAB کے ہوم پیج پر واپس جائیں یا مدد کے لیے ہماری ٹیم سے رابطہ کریں۔",

  "From": "کم از کم",
  "PURE PRESENTATION": "سادہ، نفیس پیشکش",
  "500 ML · CUSTOM LABEL": "500 ملی لیٹر · خصوصی لیبل",
  "START WITH WHAT YOU NEED": "اپنی ضرورت سے آغاز کریں",
  "Water, shaped around your identity.": "آپ کی شناخت کے مطابق پانی کی بوتل۔",
  "Minimum": "کم از کم",
  "bottles.": "بوتلیں۔",
  "A LITTLE DETAIL. YOUR WHOLE IDENTITY.": "ایک چھوٹی تفصیل، آپ کی مکمل پہچان۔",
  "CUSTOM-LABELLED · 500 ML": "خصوصی لیبل · 500 ملی لیٹر",
  "ILLUSTRATIVE PRODUCT VISUAL": "مصنوعات کا نمائشی خاکہ",
  "Request a quote": "قیمت معلوم کریں",
  "CONCEPT EXAMPLE": "ڈیزائن کا نمونہ",
  "APNAAB · 500 ML": "APNAAB · 500 ملی لیٹر",
  "DINING COLLECTION": "ڈائننگ کلیکشن",
  "CARE COLLECTION": "نگہداشت کلیکشن",
  "CELEBRATION COLLECTION": "تقریبات کا کلیکشن",
  "BUSINESS COLLECTION": "کاروباری کلیکشن",
  "Peshawar, Pakistan": "پشاور، پاکستان",
  "MINIMUM ORDER": "کم از کم آرڈر",
  "Chat directly on WhatsApp": "واٹس ایپ پر براہِ راست بات کریں",
  "When you choose Urdu, the site saves that language preference in your browser's local storage so it can remember your choice on a later visit. That preference is not sent to APNAAB.": "جب آپ اردو منتخب کرتے ہیں تو ویب سائٹ آپ کی زبان کی یہ ترجیح براؤزر کی لوکل اسٹوریج میں محفوظ کرتی ہے تاکہ اگلی بار آپ کی پسند یاد رکھی جا سکے۔ یہ ترجیح APNAAB کو نہیں بھیجی جاتی۔",
  "Page Not Found": "صفحہ نہیں ملا",
};

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function withWhitespace(original: string, replacement: string) {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return leading + replacement + trailing;
}

type TextState = { original: string; translated: string };
type AttributeState = { original: string; translated: string };

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<SiteLocale>("en");
  const textStates = useRef(new WeakMap<Text, TextState>());
  const attributeStates = useRef(new WeakMap<Element, Map<string, AttributeState>>());

  useEffect(() => {
    const stored = window.localStorage.getItem("apnaab-language");
    if (stored === "ur") setLocale("ur");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ur" ? "rtl" : "ltr";
    window.localStorage.setItem("apnaab-language", locale);

    const processText = (node: Text) => {
      const current = node.nodeValue ?? "";
      const previous = textStates.current.get(node);
      const original = previous && current === previous.translated ? previous.original : current;
      if (locale === "ur") {
        const translated = translations[normalize(original)];
        if (translated) {
          textStates.current.set(node, { original, translated: withWhitespace(original, translated) });
          const next = withWhitespace(original, translated);
          if (current !== next) node.nodeValue = next;
        } else if (previous && current === previous.translated) {
          textStates.current.delete(node);
        }
      } else if (previous) {
        if (current === previous.translated) node.nodeValue = previous.original;
        textStates.current.delete(node);
      }
    };

    const processAttributes = (element: Element) => {
      const attrs = ["placeholder", "aria-label", "title"];
      let states = attributeStates.current.get(element);
      for (const name of attrs) {
        const current = element.getAttribute(name);
        if (current === null) continue;
        const previous = states?.get(name);
        const original = previous && current === previous.translated ? previous.original : current;
        if (locale === "ur") {
          const translated = translations[normalize(original)];
          if (translated) {
            const next = translated;
            if (!states) {
              states = new Map();
              attributeStates.current.set(element, states);
            }
            states.set(name, { original, translated: next });
            if (current !== next) element.setAttribute(name, next);
          } else if (previous && current === previous.translated) {
            states?.delete(name);
          }
        } else if (previous) {
          if (current === previous.translated) element.setAttribute(name, previous.original);
          states?.delete(name);
        }
      }
    };

    const skipped = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "TEXTAREA", "CODE", "PRE"]);
    const walk = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node as Text;
        const parent = text.parentElement;
        if (!parent || skipped.has(parent.tagName) || parent.closest("script,style,noscript,svg,textarea,code,pre")) return;
        processText(text);
        return;
      }
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        processAttributes(element);
        if (skipped.has(element.tagName)) return;
      }
      for (const child of Array.from(node.childNodes)) walk(child);
    };

    walk(document.body);
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "characterData" && record.target.nodeType === Node.TEXT_NODE) {
          walk(record.target);
        }
        if (record.type === "attributes" && record.target.nodeType === Node.ELEMENT_NODE) {
          processAttributes(record.target as Element);
        }
        for (const added of Array.from(record.addedNodes)) walk(added);
      }
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["placeholder", "aria-label", "title"]
    });

    return () => observer.disconnect();
  }, [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return value;
}
