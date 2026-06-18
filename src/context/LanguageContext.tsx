import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'bn' | 'hi';

export interface Translations {
  // Navbar
  home: string;
  products: string; // Will act as Marketplace
  research: string; // Will act as Library
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
  products: 'Marketplace',
  research: 'Library',
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
  products: 'মার্কেটপ্লেস',
  research: 'লাইব্রেরি',
  faq: 'সাধারণ প্রশ্ন',
  contact: 'যোগাযোগ',
  whatsappInquiry: 'হোয়াটসঅ্যাপ মেসেজ',

  heroTitle1: 'সেরা মানের পেপটাইড।',
  heroTitle2: '১০০% খাঁটি।',
  heroSubtitle:
    'বায়োজেনিক্স ল্যাবস গবেষকদের জন্য আসল এবং ল্যাব-টেস্টেড পেপটাইড সাপ্লাই দেয়। প্রতিটি প্রোডাক্টের সাথে ল্যাব রিপোর্ট পাবেন।',

  marketplaceLabel: 'মার্কেটপ্লেস',
  marketplaceTitle1: 'প্রধান রিসার্চ',
  marketplaceTitle2: 'পেপটাইড',
  viewAllProducts: 'সব প্রোডাক্ট দেখুন',

  aboutLabel: 'বায়োজেনিক্স ল্যাবস সম্পর্কে',
  aboutTitle1: 'বিজ্ঞানের',
  aboutTitle2: 'সেরা মানের জন্য',
  aboutP1:
    'বায়োজেনিক্স ল্যাবস গবেষক এবং ল্যাবরেটরির জন্য অরিজিনাল পেপটাইড সাপ্লাই করে থাকে।',
  aboutP2:
    'আমাদের মূল লক্ষ্য হলো সঠিক এবং ১০০% খাঁটি রিসার্চ ম্যাটেরিয়াল দেওয়া, যাতে আপনাদের কাজে কোনো সমস্যা না হয়।',

  complianceBanner: 'শুধুমাত্র গবেষণার জন্য — মানুষের ব্যবহারের জন্য নয়',
  complianceBody:
    'আমাদের সব প্রোডাক্ট শুধু ল্যাবরেটরি এবং গবেষণার জন্য। এগুলো মানুষ বা কোনো প্রাণীর উপর ব্যবহার করা যাবে না।',
  researchOnly: 'শুধু গবেষণার জন্য · মানুষের ব্যবহারের জন্য নয়',

  faqLabel: 'সাধারণ প্রশ্ন',
  faqTitle: 'সচরাচর জিজ্ঞাসা',

  footerDesc:
    'বায়োজেনিক্স ল্যাবস গবেষকদের জন্য আসল এবং ল্যাব-টেস্টেড পেপটাইড সাপ্লাই দেয়।',
  explore: 'অন্বেষণ',
  legal: 'আইনি তথ্য',
  termsOfService: 'শর্তাবলী',
  privacyPolicy: 'গোপনীয়তা নীতি',
  researchDisclaimer: 'গবেষণা সতর্কীকরণ',
  peptideLibrary: 'পেপটাইড লাইব্রেরি',
  featuredProducts: 'বিশেষ প্রোডাক্ট',

  overview: 'বিস্তারিত',
  mechanismOfAction: 'কীভাবে কাজ করে',
  researchFindings: 'রিসার্চের ফলাফল',
  potentialApplications: 'ব্যবহারের উপায়',
  fullSpecifications: 'সব বিবরণ',
  requestLabReport: 'ল্যাব রিপোর্ট চান',
  addToInquiry: 'লিস্টে যোগ করুন',
  addedToInquiry: 'লিস্টে যোগ করা হয়েছে!',
  directInquiry: 'সরাসরি জিজ্ঞাসা',
  backToLibrary: '← লাইব্রেরিতে ফিরে যান',

  libraryTitle1: 'পেপটাইড',
  libraryTitle2: 'নলেজ বেস',
  librarySubtitle:
    'আমাদের সব রিসার্চ-গ্রেড পেপটাইডের লিস্ট। এখানে আপনি প্রতিটি প্রোডাক্টের কাজ এবং সব রিপোর্ট দেখতে পারবেন।',
  searchPeptides: 'পেপটাইড খুঁজুন...',
  cantFind: 'যা খুঁজছেন তা পাচ্ছেন না?',
  cantFindDesc:
    'স্টক, কাস্টম অর্ডার বা অন্য কোনো প্রোডাক্টের জন্য আমাদের টিমের সাথে সরাসরি হোয়াটসঅ্যাপে কথা বলুন।',
  inquireVia: 'হোয়াটসঅ্যাপে মেসেজ দিন',

  currency: 'কারেন্সি',

  testimonialLabel: 'গবেষকরা যা বলেন',
};

const hi: Translations = {
  home: 'होम',
  products: 'मार्केटप्लेस',
  research: 'लाइब्रेरी',
  faq: 'सामान्य प्रश्न',
  contact: 'संपर्क करें',
  whatsappInquiry: 'व्हाट्सएप पूछताछ',

  heroTitle1: 'रिसर्च-ग्रेड पेप्टाइड्स।',
  heroTitle2: '100% शुद्धता।',
  heroSubtitle:
    'बायोजेनिक्स लैब्स शोधकर्ताओं के लिए सर्वोत्तम गुणवत्ता वाले पेप्टाइड्स प्रदान करता है। हर प्रोडक्ट के साथ आपको लैब रिपोर्ट मिलेगी।',

  marketplaceLabel: 'मार्केटप्लेस',
  marketplaceTitle1: 'प्रमुख रिसर्च',
  marketplaceTitle2: 'पेप्टाइड्स',
  viewAllProducts: 'सभी प्रोडक्ट देखें',

  aboutLabel: 'बायोजेनिक्स लैब्स के बारे में',
  aboutTitle1: 'वैज्ञानिक',
  aboutTitle2: 'सटीकता के लिए',
  aboutP1:
    'बायोजेनिक्स लैब्स एक रिसर्च-ग्रेड पेप्टाइड सप्लायर है जो प्रयोगशालाओं और शोधकर्ताओं को सेवा प्रदान करता है।',
  aboutP2:
    'हमारा ध्यान आपको बेहतरीन और 100% शुद्ध सामग्री देने पर है।',

  complianceBanner: 'केवल रिसर्च के लिए - मानव उपयोग के लिए नहीं',
  complianceBody:
    'बायोजेनिक्स लैब्स के सभी प्रोडक्ट केवल प्रयोगशाला रिसर्च के लिए हैं। इन्हें मानव या पशुओं पर इस्तेमाल नहीं किया जाना चाहिए।',
  researchOnly: 'केवल रिसर्च के लिए · मानव उपयोग के लिए नहीं',

  faqLabel: 'सामान्य प्रश्न',
  faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',

  footerDesc:
    'बायोजेनिक्स लैब्स प्रयोगशालाओं और शोधकर्ताओं को रिसर्च-ग्रेड पेप्टाइड्स प्रदान करता है।',
  explore: 'खोजें',
  legal: 'कानूनी जानकारी',
  termsOfService: 'सेवा की शर्तें',
  privacyPolicy: 'गोपनीयता नीति',
  researchDisclaimer: 'रिसर्च उपयोग अस्वीकरण',
  peptideLibrary: 'पेप्टाइड लाइब्रेरी',
  featuredProducts: 'प्रमुख प्रोडक्ट',

  overview: 'विवरण',
  mechanismOfAction: 'कार्य करने का तरीका',
  researchFindings: 'रिसर्च के परिणाम',
  potentialApplications: 'संभावित उपयोग',
  fullSpecifications: 'पूरी जानकारी',
  requestLabReport: 'पूरी लैब रिपोर्ट मांगें',
  addToInquiry: 'पूछताछ में जोड़ें',
  addedToInquiry: 'पूछताछ में जोड़ा गया!',
  directInquiry: 'सीधी पूछताछ',
  backToLibrary: '← लाइब्रेरी में वापस जाएँ',

  libraryTitle1: 'पेप्टाइड',
  libraryTitle2: 'जानकारी',
  librarySubtitle:
    'रिसर्च-ग्रेड कंपाउंड्स की हमारी पूरी लाइब्रेरी देखें। हर प्रोडक्ट के काम करने का तरीका और लैब रिपोर्ट यहाँ मौजूद है।',
  searchPeptides: 'पेप्टाइड खोजें...',
  cantFind: 'आपको जो चाहिए वो नहीं मिल रहा?',
  cantFindDesc:
    'कस्टम ऑर्डर या स्टॉक के बारे में बात करने के लिए हमारी टीम से व्हाट्सएप पर संपर्क करें।',
  inquireVia: 'व्हाट्सएप पर पूछें',

  currency: 'मुद्रा',

  testimonialLabel: 'शोधकर्ताओं की राय',
};

const dictionaries: Record<Lang, Translations> = { en, bn, hi };

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
