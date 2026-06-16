import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'bn';

export interface Translations {
  // Navbar
  home: string;
  products: string;
  research: string;
  faq: string;
  contact: string;
  whatsappInquiry: string;

  // Hero
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;

  // Marketplace
  marketplaceLabel: string;
  marketplaceTitle1: string;
  marketplaceTitle2: string;
  viewAllProducts: string;

  // About
  aboutLabel: string;
  aboutTitle1: string;
  aboutTitle2: string;
  aboutP1: string;
  aboutP2: string;

  // Compliance
  complianceBanner: string;
  complianceBody: string;
  researchOnly: string;

  // FAQ
  faqLabel: string;
  faqTitle: string;

  // Footer
  footerDesc: string;
  explore: string;
  legal: string;
  termsOfService: string;
  privacyPolicy: string;
  researchDisclaimer: string;
  peptideLibrary: string;
  featuredProducts: string;

  // Product detail
  overview: string;
  mechanismOfAction: string;
  researchFindings: string;
  potentialApplications: string;
  fullSpecifications: string;
  requestLabReport: string;
  addToInquiry: string;
  addedToInquiry: string;
  directInquiry: string;
  backToLibrary: string;

  // Library page
  libraryTitle1: string;
  libraryTitle2: string;
  librarySubtitle: string;
  searchPeptides: string;
  cantFind: string;
  cantFindDesc: string;
  inquireVia: string;

  // Currency
  currency: string;

  // Testimonials
  testimonialLabel: string;
}

const en: Translations = {
  home: 'Home',
  products: 'Products',
  research: 'Research',
  faq: 'FAQ',
  contact: 'Contact',
  whatsappInquiry: 'WhatsApp Inquiry',

  heroTitle1: 'Research-Grade Peptides.',
  heroTitle2: 'Verified Purity.',
  heroSubtitle:
    'Biogenix Labs supplies HPLC-verified research peptides to qualified investigators across Australia, Bangladesh, Pakistan, and the USA. Transparent specifications. Certificate of Analysis included.',

  marketplaceLabel: 'Marketplace',
  marketplaceTitle1: 'Flagship Research',
  marketplaceTitle2: 'Peptides',
  viewAllProducts: 'View all products',

  aboutLabel: 'About Biogenix Labs',
  aboutTitle1: 'Built for',
  aboutTitle2: 'Scientific Rigor',
  aboutP1:
    'Biogenix Labs is a research-grade peptide supplier serving academic institutions, laboratories, and qualified investigators across Australia and Bangladesh. Every compound we distribute is verified by HPLC and accompanied by transparent specifications.',
  aboutP2:
    'Our focus is the science — providing consistent, high-purity research material that supports reproducible experimentation. We maintain strict compliance with research-use-only distribution and never market products for human or veterinary administration.',

  complianceBanner: 'FOR RESEARCH PURPOSES ONLY — NOT FOR HUMAN CONSUMPTION',
  complianceBody:
    'All Biogenix Labs products are intended strictly for in-vitro and laboratory research use. Not for human or veterinary administration. By purchasing, you confirm you are a qualified researcher.',
  researchOnly: 'For Research Purposes Only · Not For Human Consumption',

  faqLabel: 'FAQ',
  faqTitle: 'Common Questions',

  footerDesc:
    'Biogenix Labs supplies research-grade peptide compounds to academic institutions and qualified researchers in Australia and Bangladesh. All products are intended strictly for in-vitro and laboratory research.',
  explore: 'Explore',
  legal: 'Legal',
  termsOfService: 'Terms of Service',
  privacyPolicy: 'Privacy Policy',
  researchDisclaimer: 'Research Use Disclaimer',
  peptideLibrary: 'Peptide Library',
  featuredProducts: 'Featured Products',

  overview: 'Overview',
  mechanismOfAction: 'Mechanism of Action',
  researchFindings: 'Research Findings',
  potentialApplications: 'Potential Research Applications',
  fullSpecifications: 'Full Specifications',
  requestLabReport: 'Request Full Lab Report',
  addToInquiry: 'Add to Inquiry',
  addedToInquiry: 'Added to Inquiry!',
  directInquiry: 'Direct Inquiry',
  backToLibrary: '← Back to Library',

  libraryTitle1: 'Peptide',
  libraryTitle2: 'Knowledge Base',
  librarySubtitle:
    'Browse our complete library of research-grade compounds. Each entry includes mechanism of action, research findings, and full specifications.',
  searchPeptides: 'Search peptides...',
  cantFind: "Can't find what you need?",
  cantFindDesc:
    'Contact our research team via WhatsApp to discuss availability, custom quantities, or compounds not yet listed.',
  inquireVia: 'Inquire via WhatsApp',

  currency: 'Currency',

  testimonialLabel: 'What Researchers Say',
};

const bn: Translations = {
  home: 'হোম',
  products: 'পণ্যসমূহ',
  research: 'গবেষণা',
  faq: 'সাধারণ প্রশ্ন',
  contact: 'যোগাযোগ',
  whatsappInquiry: 'হোয়াটসঅ্যাপ অনুসন্ধান',

  heroTitle1: 'গবেষণা-গ্রেড পেপটাইড।',
  heroTitle2: 'যাচাইকৃত বিশুদ্ধতা।',
  heroSubtitle:
    'বায়োজেনিক্স ল্যাবস অস্ট্রেলিয়া, বাংলাদেশ, পাকিস্তান এবং মার্কিন যুক্তরাষ্ট্র জুড়ে যোগ্য গবেষকদের জন্য HPLC-যাচাইকৃত গবেষণা পেপটাইড সরবরাহ করে। স্বচ্ছ স্পেসিফিকেশন। বিশ্লেষণের সার্টিফিকেট অন্তর্ভুক্ত।',

  marketplaceLabel: 'মার্কেটপ্লেস',
  marketplaceTitle1: 'প্রধান গবেষণা',
  marketplaceTitle2: 'পেপটাইড',
  viewAllProducts: 'সকল পণ্য দেখুন',

  aboutLabel: 'বায়োজেনিক্স ল্যাবস সম্পর্কে',
  aboutTitle1: 'নির্মিত',
  aboutTitle2: 'বৈজ্ঞানিক নিষ্ঠার জন্য',
  aboutP1:
    'বায়োজেনিক্স ল্যাবস হল একটি গবেষণা-গ্রেড পেপটাইড সরবরাহকারী যা অস্ট্রেলিয়া এবং বাংলাদেশ জুড়ে শিক্ষাপ্রতিষ্ঠান, পরীক্ষাগার এবং যোগ্য গবেষকদের সেবা প্রদান করে।',
  aboutP2:
    'আমাদের ফোকাস হল বিজ্ঞান — সামঞ্জস্যপূর্ণ, উচ্চ-বিশুদ্ধতার গবেষণা উপাদান প্রদান করা যা পুনরুত্পাদনযোগ্য পরীক্ষা-নিরীক্ষাকে সমর্থন করে।',

  complianceBanner: 'শুধুমাত্র গবেষণার উদ্দেশ্যে — মানব ব্যবহারের জন্য নয়',
  complianceBody:
    'বায়োজেনিক্স ল্যাবসের সকল পণ্য কঠোরভাবে ইন-ভিট্রো এবং পরীক্ষাগার গবেষণা ব্যবহারের জন্য। মানব বা পশুচিকিৎসা প্রশাসনের জন্য নয়।',
  researchOnly: 'শুধুমাত্র গবেষণার উদ্দেশ্যে · মানব ব্যবহারের জন্য নয়',

  faqLabel: 'সাধারণ প্রশ্ন',
  faqTitle: 'সচরাচর জিজ্ঞাসিত প্রশ্ন',

  footerDesc:
    'বায়োজেনিক্স ল্যাবস অস্ট্রেলিয়া এবং বাংলাদেশে শিক্ষাপ্রতিষ্ঠান এবং যোগ্য গবেষকদের জন্য গবেষণা-গ্রেড পেপটাইড যৌগ সরবরাহ করে।',
  explore: 'অন্বেষণ',
  legal: 'আইনি',
  termsOfService: 'সেবার শর্তাবলী',
  privacyPolicy: 'গোপনীয়তা নীতি',
  researchDisclaimer: 'গবেষণা ব্যবহার দাবিত্যাগ',
  peptideLibrary: 'পেপটাইড লাইব্রেরি',
  featuredProducts: 'বৈশিষ্ট্যযুক্ত পণ্য',

  overview: 'সংক্ষিপ্ত বিবরণ',
  mechanismOfAction: 'কর্ম প্রক্রিয়া',
  researchFindings: 'গবেষণার ফলাফল',
  potentialApplications: 'সম্ভাব্য গবেষণা প্রয়োগ',
  fullSpecifications: 'সম্পূর্ণ স্পেসিফিকেশন',
  requestLabReport: 'সম্পূর্ণ ল্যাব রিপোর্ট অনুরোধ',
  addToInquiry: 'অনুসন্ধানে যোগ করুন',
  addedToInquiry: 'অনুসন্ধানে যোগ হয়েছে!',
  directInquiry: 'সরাসরি অনুসন্ধান',
  backToLibrary: '← লাইব্রেরিতে ফিরুন',

  libraryTitle1: 'পেপটাইড',
  libraryTitle2: 'জ্ঞানভাণ্ডার',
  librarySubtitle:
    'আমাদের সম্পূর্ণ গবেষণা-গ্রেড যৌগের লাইব্রেরি ব্রাউজ করুন। প্রতিটি এন্ট্রিতে কর্ম প্রক্রিয়া, গবেষণার ফলাফল এবং সম্পূর্ণ স্পেসিফিকেশন অন্তর্ভুক্ত।',
  searchPeptides: 'পেপটাইড অনুসন্ধান করুন...',
  cantFind: 'আপনার প্রয়োজনীয় পণ্য খুঁজে পাচ্ছেন না?',
  cantFindDesc:
    'প্রাপ্যতা, কাস্টম পরিমাণ বা এখনও তালিকাভুক্ত নয় এমন যৌগ নিয়ে আলোচনা করতে হোয়াটসঅ্যাপের মাধ্যমে আমাদের গবেষণা দলের সাথে যোগাযোগ করুন।',
  inquireVia: 'হোয়াটসঅ্যাপে অনুসন্ধান করুন',

  currency: 'মুদ্রা',

  testimonialLabel: 'গবেষকরা কী বলেন',
};

const dictionaries: Record<Lang, Translations> = { en, bn };

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
