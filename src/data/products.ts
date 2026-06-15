export type Category =
  | 'Featured'
  | 'Weight Management & Metabolic'
  | 'Tissue Regeneration & Recovery'
  | 'Cognitive & Neurological'
  | 'Immune & Systemic Support'
  | 'Appearance & Skin Health'
  | 'Metabolic & Cellular Health'
  | 'Specialized Blends'
  | 'Supportive Products';

export interface ResearchFinding {
  title: string;
  source: string;
  year: string;
  summary: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  dosage: string;
  category: Category;
  featured?: boolean;
  badge?: string;
  tagline: string;
  description: string;
  mechanism: string[];
  researchFindings: ResearchFinding[];
  applications: string[];
  specifications: Specification[];
  relatedIds: string[];
  image?: string;
}

export const CATEGORIES: Category[] = [
  'Weight Management & Metabolic',
  'Tissue Regeneration & Recovery',
  'Cognitive & Neurological',
  'Immune & Systemic Support',
  'Appearance & Skin Health',
  'Metabolic & Cellular Health',
  'Specialized Blends',
  'Supportive Products',
];

export const CATEGORY_COLORS: Record<Category, string> = {
  'Featured': 'bg-gold-50 text-gold-700 border-gold-200',
  'Weight Management & Metabolic': 'bg-blue-50 text-blue-700 border-blue-200',
  'Tissue Regeneration & Recovery': 'bg-green-50 text-green-700 border-green-200',
  'Cognitive & Neurological': 'bg-purple-50 text-purple-700 border-purple-200',
  'Immune & Systemic Support': 'bg-orange-50 text-orange-700 border-orange-200',
  'Appearance & Skin Health': 'bg-pink-50 text-pink-700 border-pink-200',
  'Metabolic & Cellular Health': 'bg-teal-50 text-teal-700 border-teal-200',
  'Specialized Blends': 'bg-gold-50 text-gold-700 border-gold-200',
  'Supportive Products': 'bg-gray-50 text-gray-700 border-gray-200',
};

export const products: Product[] = [
  // ── FEATURED ──────────────────────────────────────────────────────────────
  {
    id: 'retatrutide',
    name: 'Retatrutide',
    dosage: '10 mg',
    category: 'Weight Management & Metabolic',
    featured: true,
    badge: 'COA Verified',
    tagline: 'Triple receptor agonist for advanced metabolic research',
    description:
      'Retatrutide is a novel triple receptor agonist targeting GLP-1, GIP, and glucagon receptors simultaneously. This triple-action mechanism positions it as one of the most potent investigational compounds in metabolic research, demonstrating significant efficacy in preclinical models of obesity and type 2 diabetes.',
    mechanism: [
      'Retatrutide simultaneously activates three distinct receptor pathways. As a GLP-1 receptor agonist, it stimulates insulin secretion in a glucose-dependent manner, suppresses glucagon release, and reduces gastric emptying — collectively improving glycaemic control and reducing caloric intake.',
      'Its GIP receptor agonism enhances the insulinotropic effects of GLP-1 while also modulating lipid metabolism in adipose tissue, improving lipid profiles in preclinical models.',
      'The glucagon receptor component increases energy expenditure by promoting fatty acid oxidation in the liver and elevating basal metabolic rate, differentiating retatrutide from dual-agonist compounds and contributing to its superior weight reduction profile observed in phase 2 studies.',
      'The synergistic activation of all three incretin and glucagon pathways results in a multi-faceted metabolic effect that addresses both glycaemic dysregulation and adiposity simultaneously, making it a subject of intensive research interest.',
    ],
    researchFindings: [
      {
        title: 'Phase 2 Trial: Retatrutide for Obesity',
        source: 'New England Journal of Medicine, 2023',
        year: '2023',
        summary: 'Participants receiving the highest dose demonstrated up to 24.2% body weight reduction over 48 weeks, surpassing results seen with existing approved GLP-1 therapies.',
      },
      {
        title: 'Triple Receptor Pharmacodynamics',
        source: 'Journal of Clinical Endocrinology & Metabolism',
        year: '2022',
        summary: 'Preclinical data confirmed simultaneous agonism at GLP-1R, GIPR, and GCGR with favourable receptor binding profiles and dose-dependent metabolic responses.',
      },
      {
        title: 'Cardiometabolic Risk Reduction',
        source: 'Diabetes Care, 2023',
        year: '2023',
        summary: 'Secondary endpoints showed significant improvements in triglycerides, HbA1c, blood pressure, and waist circumference alongside primary weight loss outcomes.',
      },
    ],
    applications: [
      'Obesity and adiposity research models',
      'Type 2 diabetes and insulin resistance investigations',
      'Cardiometabolic risk factor studies',
      'Comparative efficacy studies against GLP-1 monotherapy',
      'Lipid metabolism and hepatic steatosis research',
    ],
    specifications: [
      { label: 'Purity', value: '≥99% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '4,859.5 Da' },
      { label: 'Storage', value: '-20°C (long-term); 2-8°C (short-term)' },
      { label: 'Reconstitution', value: 'Bacteriostatic water' },
      { label: 'Shelf Life', value: '24 months lyophilized; 30 days reconstituted' },
    ],
    relatedIds: ['tirzepatide', 'semaglutide', 'cjc-1295-dac', 'tesamorelin'],
    image: '/images/products/retatrutide_10mg.webp',
  },
  {
    id: 'ghk-cu',
    name: 'GHK-Cu',
    dosage: '50 mg',
    category: 'Appearance & Skin Health',
    featured: true,
    badge: 'COA Verified',
    tagline: 'Copper-binding tripeptide for skin remodeling research',
    description:
      'GHK-Cu (Glycine-Histidine-Lysine copper complex) is a naturally occurring copper-binding tripeptide found in human plasma, saliva, and urine. It has been extensively studied for its role in wound healing, anti-aging mechanisms, and tissue remodeling, with a well-established safety profile in in-vitro and ex-vivo models.',
    mechanism: [
      'GHK-Cu exerts its biological effects primarily through modulation of gene expression, having been shown to upregulate more than 30 genes involved in tissue repair and downregulate genes associated with inflammation and cancerous proliferation.',
      'The copper component plays a critical role in enzymatic reactions, particularly in lysyl oxidase activity which is essential for collagen and elastin cross-linking. GHK-Cu promotes the synthesis of collagen I, III, and VI while simultaneously enhancing production of glycosaminoglycans such as dermatan sulfate.',
      'Studies demonstrate GHK-Cu\'s ability to activate TGF-β signalling pathways, promoting fibroblast proliferation and migration. It also exhibits antioxidant properties by chelating free copper ions and upregulating superoxide dismutase activity.',
      'At the wound healing level, GHK-Cu has been shown to accelerate re-epithelialization, promote angiogenesis through VEGF upregulation, and modulate MMP expression to facilitate controlled extracellular matrix remodeling.',
    ],
    researchFindings: [
      {
        title: 'GHK-Cu and Collagen Synthesis in Dermal Fibroblasts',
        source: 'Journal of Investigative Dermatology',
        year: '2000',
        summary: 'Demonstrated dose-dependent increases in collagen synthesis in human dermal fibroblasts, with optimal effects observed at nanomolar concentrations.',
      },
      {
        title: 'Gene Expression Modulation by GHK-Cu',
        source: 'Annals of the New York Academy of Sciences',
        year: '2012',
        summary: 'GHK-Cu was shown to reverse gene expression patterns associated with aging, downregulating inflammatory and oncogenic pathways while upregulating repair mechanisms.',
      },
      {
        title: 'Wound Healing Acceleration',
        source: 'Wound Repair and Regeneration',
        year: '1999',
        summary: 'In vivo models demonstrated significantly accelerated wound closure and improved tissue quality in GHK-Cu treated subjects compared to controls.',
      },
    ],
    applications: [
      'Dermatological wound healing studies',
      'Age-related skin remodeling research',
      'Hair follicle biology and growth factor research',
      'Collagen and elastin synthesis investigations',
      'Gene expression modulation in fibroblast cultures',
    ],
    specifications: [
      { label: 'Purity', value: '≥99% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '340.4 Da (peptide); 403.9 Da (Cu complex)' },
      { label: 'CAS Number', value: '89030-95-5' },
      { label: 'Storage', value: '-20°C (long-term); 2-8°C (short-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized; 14 days reconstituted' },
    ],
    relatedIds: ['bpc-157', 'tb-500', 'melanotan-ii', 'epithalon'],
    image: '/images/products/ghk_cu_50mg.webp',
  },
  {
    id: 'bpc-157',
    name: 'BPC-157',
    dosage: '10 mg',
    category: 'Tissue Regeneration & Recovery',
    featured: true,
    badge: 'COA Verified',
    tagline: 'Gastric-derived pentadecapeptide for systemic repair research',
    description:
      'BPC-157 (Body Protection Compound-157) is a synthetic pentadecapeptide derived from a protein found in human gastric juice. Comprising 15 amino acids, it has been extensively studied in animal models for its remarkable tissue-protective and regenerative properties across multiple organ systems.',
    mechanism: [
      'BPC-157 promotes angiogenesis — the formation of new blood vessels — through upregulation of VEGFR2 expression and nitric oxide signalling. This neovascularisation effect is considered central to its tissue repair properties, ensuring adequate nutrient and oxygen delivery to damaged tissues.',
      'The peptide modulates the expression of growth factors including EGF, FGF, and HGF, which collectively stimulate cell proliferation and differentiation in multiple tissue types including muscle, tendon, ligament, and gastrointestinal epithelium.',
      'BPC-157 interacts with dopaminergic and serotonergic neurotransmitter systems, which may account for its observed effects on mood regulation and neuroprotection in preclinical models. It also demonstrates interactions with the nitric oxide (NO) pathway, modulating both eNOS and iNOS expression.',
      'In gastrointestinal research, BPC-157 has shown cytoprotective effects on gastric mucosa, accelerating ulcer healing through multiple mechanisms including COX-2 modulation, gastrin upregulation, and promotion of mucosal cell migration and proliferation.',
    ],
    researchFindings: [
      {
        title: 'Tendon Healing Acceleration',
        source: 'Journal of Physiology (Paris)',
        year: '2014',
        summary: 'BPC-157 significantly accelerated tendon healing in rat models, with histological analysis showing improved collagen organisation and increased tendon-to-bone junction strength.',
      },
      {
        title: 'Gastric Ulcer Protection',
        source: 'Current Pharmaceutical Design',
        year: '2018',
        summary: 'Comprehensive review confirming BPC-157\'s protective effects against NSAID-induced, alcohol-induced, and stress-induced gastric ulceration through multiple cytoprotective pathways.',
      },
      {
        title: 'Muscle Injury Recovery',
        source: 'Journal of Orthopaedic Research',
        year: '2010',
        summary: 'Demonstrated accelerated recovery from crush injury and laceration in muscle tissue, with significantly improved functional outcomes at 14 and 28 day endpoints.',
      },
    ],
    applications: [
      'Musculoskeletal injury repair research',
      'Gastrointestinal mucosal protection studies',
      'Tendon and ligament healing investigations',
      'Neurotrophic and neuroprotective research',
      'Inflammatory bowel disease models',
    ],
    specifications: [
      { label: 'Purity', value: '≥99% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '1,419.5 Da' },
      { label: 'Sequence', value: 'Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val' },
      { label: 'Storage', value: '-20°C (long-term); 2-8°C (short-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized; 30 days reconstituted' },
    ],
    relatedIds: ['tb-500', 'ghk-cu', 'thymosin-alpha-1', 'kpv'],
    image: '/images/products/bpc_157_10mg.webp',
  },
  {
    id: 'tb-500',
    name: 'TB-500',
    dosage: '10 mg',
    category: 'Tissue Regeneration & Recovery',
    featured: true,
    badge: 'COA Verified',
    tagline: 'Thymosin Beta-4 fragment for actin regulation research',
    description:
      'TB-500 is a synthetic peptide fragment derived from Thymosin Beta-4, a naturally occurring 43 amino acid protein found in virtually all human and animal cells. The active sequence Ac-SDKP (N-acetyl-seryl-aspartyl-lysyl-proline) is responsible for its primary biological activities, including actin regulation and promotion of cell migration.',
    mechanism: [
      'TB-500 binds to G-actin with high affinity, regulating actin polymerisation. This interaction is fundamental to cell motility, wound contraction, and the cytoskeletal remodeling necessary for tissue repair. By modulating the actin pool, TB-500 facilitates efficient cell migration to sites of injury.',
      'The peptide promotes angiogenesis through upregulation of vascular endothelial growth factor (VEGF) and metalloproteinase pathways. This neovascularisation activity is critical for delivering nutrients and oxygen to hypoxic tissues during the healing process.',
      'TB-500 has demonstrated cardioprotective effects in preclinical models, promoting cardiomyocyte survival, reducing apoptosis, and stimulating progenitor cell migration. It activates the PI3K/Akt signalling pathway, which is central to cell survival and anti-apoptotic responses.',
      'Anti-inflammatory properties have been documented, with TB-500 shown to reduce the expression of pro-inflammatory cytokines including TNF-α and IL-1β. This dual reparative and anti-inflammatory action is believed to contribute to its broad tissue-protective effects.',
    ],
    researchFindings: [
      {
        title: 'Thymosin Beta-4 in Cardiac Repair',
        source: 'Circulation, 2010',
        year: '2010',
        summary: 'TB-4 treatment following myocardial infarction in mouse models resulted in significant improvements in cardiac function, reduced infarct size, and stimulated epicardial progenitor cell activation.',
      },
      {
        title: 'Wound Healing in Dermal Models',
        source: 'Annals of the New York Academy of Sciences',
        year: '2007',
        summary: 'TB-4 fragment (Ac-SDKP) demonstrated accelerated wound closure and improved dermis quality in multiple wound healing models, with superior results to vehicle controls.',
      },
      {
        title: 'Neurological Recovery Potential',
        source: 'Journal of Neuroscience',
        year: '2012',
        summary: 'Preclinical evidence of neuroprotective effects following traumatic brain injury, with TB-4 treatment associated with reduced neuronal death and improved functional recovery.',
      },
    ],
    applications: [
      'Musculoskeletal and soft tissue repair research',
      'Cardiac injury and cardioprotection studies',
      'Wound healing and dermal regeneration models',
      'Neurological injury recovery investigations',
      'Anti-inflammatory pathway research',
    ],
    specifications: [
      { label: 'Purity', value: '≥99% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '4,963.5 Da (full TB-4)' },
      { label: 'Active Sequence', value: 'Ac-SDKP' },
      { label: 'Storage', value: '-20°C (long-term); 2-8°C (short-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized; 30 days reconstituted' },
    ],
    relatedIds: ['bpc-157', 'ghk-cu', 'thymosin-alpha-1', 'epithalon'],
    image: '/images/products/tb_500_10mg.webp',
  },

  // ── WEIGHT MANAGEMENT & METABOLIC ─────────────────────────────────────────
  {
    id: 'tirzepatide',
    name: 'Tirzepatide',
    dosage: '5 mg',
    category: 'Weight Management & Metabolic',
    tagline: 'Dual GLP-1/GIP receptor agonist for metabolic research',
    description:
      'Tirzepatide is a dual agonist targeting both GLP-1 and GIP receptors. As a once-weekly injectable approved for T2DM, it has demonstrated exceptional weight reduction efficacy in clinical trials, making it a key reference compound in metabolic research.',
    mechanism: [
      'Tirzepatide activates GLP-1 receptors to enhance glucose-dependent insulin secretion and suppress glucagon, while GIP receptor agonism amplifies these effects and directly targets adipose tissue to improve insulin sensitivity.',
      'The dual incretin mechanism produces synergistic effects on appetite suppression, caloric intake reduction, and glycaemic control that exceed GLP-1 monotherapy across multiple clinical endpoints.',
      'GIP receptor activation also modulates bone metabolism, cognitive function, and cardiovascular parameters through independent pathways, contributing to the compound\'s broad metabolic profile.',
    ],
    researchFindings: [
      {
        title: 'SURMOUNT-1 Phase 3 Trial',
        source: 'New England Journal of Medicine, 2022',
        year: '2022',
        summary: 'Participants achieved up to 22.5% mean weight reduction from baseline, with 63% of subjects achieving ≥20% weight loss at highest dose over 72 weeks.',
      },
      {
        title: 'SURPASS Clinical Trial Programme',
        source: 'The Lancet, 2021',
        year: '2021',
        summary: 'Comprehensive T2DM management data demonstrating superior HbA1c reduction vs. semaglutide, with favourable cardiovascular and renal secondary endpoints.',
      },
    ],
    applications: [
      'Dual incretin receptor pharmacology studies',
      'Comparative metabolic efficacy research',
      'Adipose tissue biology investigations',
      'Glycaemic control pathway analysis',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '4,813.6 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['semaglutide', 'retatrutide', 'aod-9604', 'cjc-1295-dac'],
  },
  {
    id: 'semaglutide',
    name: 'Semaglutide',
    dosage: '5 mg',
    category: 'Weight Management & Metabolic',
    tagline: 'GLP-1 receptor agonist — reference compound for incretin research',
    description:
      'Semaglutide is a long-acting GLP-1 receptor agonist with 94% sequence homology to native GLP-1. Its extended half-life of approximately 7 days facilitates once-weekly dosing and makes it a valuable reference standard in incretin biology research.',
    mechanism: [
      'Semaglutide binds and activates the GLP-1 receptor with high affinity, stimulating glucose-dependent insulin secretion, suppressing glucagon, and slowing gastric emptying to reduce postprandial glucose excursions.',
      'Central nervous system GLP-1 receptor activation in the hypothalamus and brainstem reduces appetite and caloric intake through modulation of satiety pathways, accounting for its significant weight management effects.',
      'Cardiovascular effects include anti-inflammatory and anti-atherosclerotic properties independent of glycaemic control, with demonstrated reduction in MACE events in the LEADER and SUSTAIN-6 trials.',
    ],
    researchFindings: [
      {
        title: 'STEP 1 Phase 3 Trial (Obesity)',
        source: 'New England Journal of Medicine, 2021',
        year: '2021',
        summary: '2.4mg once-weekly semaglutide produced 14.9% mean weight reduction vs 2.4% placebo over 68 weeks in non-diabetic subjects with obesity.',
      },
    ],
    applications: [
      'GLP-1 receptor pharmacology reference studies',
      'Obesity and type 2 diabetes model research',
      'Cardiovascular benefit mechanism studies',
      'Comparative incretin agonist research',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '4,113.6 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['tirzepatide', 'retatrutide', 'ipamorelin', 'aod-9604'],
  },
  {
    id: 'cjc-1295-dac',
    name: 'CJC-1295 (with DAC)',
    dosage: '2 mg',
    category: 'Weight Management & Metabolic',
    tagline: 'Long-acting GHRH analogue for growth hormone research',
    description:
      'CJC-1295 with DAC (Drug Affinity Complex) is a synthetic analogue of growth hormone-releasing hormone (GHRH) with an extended half-life of 6-8 days, achieved through covalent binding to endogenous albumin via the DAC technology.',
    mechanism: [
      'CJC-1295 DAC binds to and activates GHRH receptors on somatotroph cells in the anterior pituitary, stimulating growth hormone secretion in a pulsatile pattern that mimics physiological release.',
      'The DAC modification enables covalent binding to plasma albumin, dramatically extending half-life from minutes to days and allowing sustained receptor activation without continuous administration.',
      'Downstream IGF-1 production is stimulated through GH-mediated hepatic signalling, activating anabolic and lipolytic pathways that have broad implications for body composition research.',
    ],
    researchFindings: [
      {
        title: 'Extended GH Elevation with CJC-1295 DAC',
        source: 'Journal of Clinical Endocrinology & Metabolism, 2006',
        year: '2006',
        summary: 'Single injection of CJC-1295 with DAC produced sustained GH elevation for 6+ days with linear pharmacokinetics and no tachyphylaxis over multiple doses.',
      },
    ],
    applications: [
      'Growth hormone axis research',
      'Body composition and lipolysis studies',
      'IGF-1 signalling pathway investigations',
      'Pituitary function research models',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '3,647.3 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['cjc-1295-no-dac', 'ipamorelin', 'igf-1-lr3', 'tesamorelin'],
  },
  {
    id: 'cjc-1295-no-dac',
    name: 'CJC-1295 (no DAC)',
    dosage: '2 mg',
    category: 'Weight Management & Metabolic',
    tagline: 'Short-acting GHRH analogue for pulsatile GH research',
    description:
      'CJC-1295 without DAC (also known as Modified GRF 1-29) is a shorter-acting GHRH analogue that preserves the pulsatile nature of natural GH secretion. Its half-life of approximately 30 minutes makes it suitable for research requiring physiologically timed GH release.',
    mechanism: [
      'Activates GHRH receptors on pituitary somatotrophs to stimulate GH pulse secretion, closely mimicking the endogenous GHRH pulse pattern.',
      'Combines synergistically with GHRP compounds such as Ipamorelin, with the two classes acting at distinct receptor types (GHRHR and GHS-R) to produce amplified GH release.',
    ],
    researchFindings: [
      {
        title: 'Pulsatile GH Release Patterns',
        source: 'Growth Hormone & IGF Research, 2005',
        year: '2005',
        summary: 'Modified GRF 1-29 demonstrated reliable GH pulse stimulation with preserved negative feedback mechanisms, supporting its use as a physiologically relevant GHRH model.',
      },
    ],
    applications: [
      'Physiological GH pulse research',
      'Combined GHRP/GHRH synergy studies',
      'Short-term GH axis modulation',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '3,367.9 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['cjc-1295-dac', 'ipamorelin', 'tesamorelin', 'igf-1-lr3'],
  },
  {
    id: 'ipamorelin',
    name: 'Ipamorelin',
    dosage: '2 mg',
    category: 'Weight Management & Metabolic',
    tagline: 'Selective GHRP-6 analogue with minimal side-effect profile',
    description:
      'Ipamorelin is a pentapeptide growth hormone secretagogue that selectively stimulates GH release without significantly affecting cortisol, prolactin, or ACTH levels — distinguishing it from earlier generation GHRPs.',
    mechanism: [
      'Ipamorelin binds to the GHS-R (ghrelin receptor) on pituitary somatotrophs, triggering GH release through a mechanism distinct from GHRH. This complementary mechanism makes ipamorelin an ideal research partner for CJC-1295 studies.',
      'Its selectivity profile — strong GH release with minimal effect on other pituitary hormones — makes it a preferred compound for isolated GH axis research without confounding cortisol or prolactin changes.',
    ],
    researchFindings: [
      {
        title: 'Selective GH Release Profile',
        source: 'Journal of Endocrinology, 1998',
        year: '1998',
        summary: 'Ipamorelin demonstrated potent GH release comparable to GHRP-6 while producing significantly less cortisol and prolactin elevation, establishing its selectivity advantage.',
      },
    ],
    applications: [
      'Selective GH secretagogue research',
      'Combined GHRP/GHRH protocol studies',
      'Age-related GH decline investigations',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '711.9 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['cjc-1295-no-dac', 'cjc-1295-dac', 'igf-1-lr3', 'tesamorelin'],
  },
  {
    id: 'tesamorelin',
    name: 'Tesamorelin',
    dosage: '2 mg',
    category: 'Weight Management & Metabolic',
    tagline: 'GHRH analogue for visceral adiposity research',
    description:
      'Tesamorelin is a synthetic analogue of endogenous GHRH with a trans-3-hexenoic acid modification that confers enhanced stability. It is the only GHRH analogue with FDA approval, indicating a well-characterised safety and efficacy profile from clinical development.',
    mechanism: [
      'Tesamorelin binds to pituitary GHRH receptors to stimulate GH secretion, with downstream IGF-1 production promoting lipolysis — particularly of visceral adipose tissue through adipocyte-specific hormone-sensitive lipase activation.',
      'Unlike supraphysiologic GH dosing, tesamorelin\'s pulsatile GH stimulation preserves the natural feedback mechanisms of the GH/IGF-1 axis, reducing off-target effects.',
    ],
    researchFindings: [
      {
        title: 'Visceral Fat Reduction in HIV-Associated Lipodystrophy',
        source: 'New England Journal of Medicine, 2010',
        year: '2010',
        summary: 'Tesamorelin reduced visceral adipose tissue by a mean of 15.2% vs. placebo over 26 weeks, the basis for its FDA approval in HIV-associated lipodystrophy.',
      },
    ],
    applications: [
      'Visceral adiposity and metabolic syndrome research',
      'HIV-associated lipodystrophy model studies',
      'GH/IGF-1 axis modulation research',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '5,135.0 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['cjc-1295-dac', 'ipamorelin', 'aod-9604', 'igf-1-lr3'],
  },
  {
    id: 'aod-9604',
    name: 'AOD 9604',
    dosage: '5 mg',
    category: 'Weight Management & Metabolic',
    tagline: 'GH fragment (176-191) for lipolytic pathway research',
    description:
      'AOD 9604 is a modified fragment of the C-terminus of human growth hormone (amino acids 176-191) that retains the lipolytic properties of GH without its growth-promoting effects mediated by IGF-1.',
    mechanism: [
      'AOD 9604 stimulates lipolysis through direct interaction with adipocyte beta-3 adrenergic receptors and HSL activation, independent of the full-length GH receptor and without stimulating IGF-1 production.',
      'This receptor selectivity profile makes it a unique research tool for studying fat metabolism in isolation from the anabolic and growth-promoting effects of native GH.',
    ],
    researchFindings: [
      {
        title: 'Selective Lipolysis Without IGF-1 Elevation',
        source: 'Molecular and Cellular Endocrinology, 2001',
        year: '2001',
        summary: 'AOD 9604 demonstrated potent lipolytic activity equivalent to hGH in in vitro fat cell models while producing no significant IGF-1 elevation, confirming receptor-selective mechanism.',
      },
    ],
    applications: [
      'Adipocyte lipolysis mechanistic studies',
      'Beta-3 adrenergic receptor research',
      'GH fragment pharmacology investigations',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '1,817.1 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['semaglutide', 'tirzepatide', 'igf-1-lr3', 'mots-c'],
  },

  // ── TISSUE REGENERATION & RECOVERY ────────────────────────────────────────
  {
    id: 'thymosin-alpha-1',
    name: 'Thymosin Alpha-1',
    dosage: '5 mg',
    category: 'Tissue Regeneration & Recovery',
    tagline: 'Immunomodulatory thymic peptide for immune research',
    description:
      'Thymosin Alpha-1 is a 28 amino acid peptide derived from prothymosin alpha and naturally produced by the thymus gland. It is one of the most extensively researched immunomodulatory peptides, with regulatory approval in multiple countries for immune-related indications.',
    mechanism: [
      'Thymosin Alpha-1 enhances T-cell maturation and differentiation, particularly stimulating CD4+ T helper cell development and activity, thereby amplifying adaptive immune responses against pathogens and tumour antigens.',
      'It modulates cytokine production, promoting Th1-type responses characterised by IFN-γ, TNF-α, and IL-2 secretion while modulating pathological Th2 responses, making it relevant to both infectious disease and autoimmunity research.',
    ],
    researchFindings: [
      {
        title: 'Immune Reconstitution in Chronic Hepatitis B',
        source: 'Journal of Hepatology, 2006',
        year: '2006',
        summary: 'Thymosin Alpha-1 produced significant improvements in immune parameters and viral suppression in chronic HBV patients, supporting its approved use in hepatitis B treatment.',
      },
    ],
    applications: [
      'Immune reconstitution and T-cell biology research',
      'Chronic viral infection models',
      'Immunosenescence research',
      'Oncology immunotherapy support studies',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '3,108.4 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['tb-500', 'bpc-157', 'kpv', 'epithalon'],
  },
  {
    id: 'epithalon',
    name: 'Epithalon',
    dosage: '10 mg',
    category: 'Tissue Regeneration & Recovery',
    tagline: 'Tetrapeptide for telomerase activation and longevity research',
    description:
      'Epithalon (Epitalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) derived from Epithalamin, a natural polypeptide extracted from the pineal gland. It is a primary subject of longevity and anti-aging research due to its documented effects on telomerase activity.',
    mechanism: [
      'Epithalon has been shown to activate telomerase, the enzyme responsible for maintaining telomere length during cell division. Telomere shortening is a recognised hallmark of cellular aging, and telomerase activation represents a potential mechanism for extending cellular replicative capacity.',
      'Research has documented normalisation of circadian rhythm and pineal gland function, with effects on melatonin production and antioxidant defence mechanisms through SOD and GPx activity enhancement.',
    ],
    researchFindings: [
      {
        title: 'Telomerase Activation and Lifespan Extension',
        source: 'Bulletin of Experimental Biology and Medicine, 2003',
        year: '2003',
        summary: 'Epithalon treatment in animal models produced measurable telomerase activation and statistically significant extension of mean and maximum lifespan compared to controls.',
      },
    ],
    applications: [
      'Telomere biology and aging research',
      'Circadian rhythm modulation studies',
      'Antioxidant pathway investigations',
      'Longevity mechanism research',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '390.3 Da' },
      { label: 'CAS Number', value: '307297-39-8' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['ghk-cu', 'tb-500', 'thymosin-alpha-1', 'dsip'],
  },

  // ── COGNITIVE & NEUROLOGICAL ───────────────────────────────────────────────
  {
    id: 'semax',
    name: 'Semax',
    dosage: '30 mg',
    category: 'Cognitive & Neurological',
    tagline: 'ACTH-derived nootropic peptide for cognitive research',
    description:
      'Semax is a synthetic peptide analogue of the ACTH (4-7) fragment, extended with a Pro-Gly-Pro sequence to enhance stability and CNS activity. Developed and used in Russia, it is a well-characterised nootropic compound in neuroscience research.',
    mechanism: [
      'Semax stimulates BDNF (Brain-Derived Neurotrophic Factor) and NGF production, promoting neuronal survival, synaptic plasticity, and the formation of new neural connections — key mechanisms in cognitive enhancement research.',
      'It modulates dopaminergic, serotonergic, and cholinergic neurotransmitter systems, with particular effects on prefrontal cortical circuits associated with working memory and executive function.',
    ],
    researchFindings: [
      {
        title: 'BDNF Upregulation and Cognitive Enhancement',
        source: 'Bulletin of Experimental Biology and Medicine, 2001',
        year: '2001',
        summary: 'Semax produced robust BDNF upregulation in rat hippocampus and cortex, with associated improvements in spatial memory tasks and learning efficiency.',
      },
    ],
    applications: [
      'Nootropic mechanism research',
      'Neurotrophic factor regulation studies',
      'Stroke and ischaemia neuroprotection models',
      'Cognitive enhancement pathway research',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '813.9 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['selank', 'dsip', 'mots-c'],
  },
  {
    id: 'selank',
    name: 'Selank',
    dosage: '5 mg',
    category: 'Cognitive & Neurological',
    tagline: 'Anxiolytic nootropic peptide for stress and cognition research',
    description:
      'Selank is a synthetic heptapeptide analogue of the immunomodulatory peptide Tuftsin with a Met-Gly-Lys-Pro sequence extension. It demonstrates anxiolytic effects comparable to benzodiazepines in animal models without the associated sedation or dependence potential.',
    mechanism: [
      'Selank modulates GABA-A receptor function and serotonin metabolism, producing anxiolytic effects through distinct mechanisms from classical benzodiazepines, without receptor downregulation or dependency.',
      'It also demonstrates immunomodulatory properties through Tuftsin-like activity, stimulating phagocytosis and NK cell activity while simultaneously influencing BDNF expression in cortical regions.',
    ],
    researchFindings: [
      {
        title: 'Anxiolytic Effects Without Sedation',
        source: 'Journal of Peptide Science, 2007',
        year: '2007',
        summary: 'Selank produced significant anxiety reduction in elevated plus maze and open field tests at doses producing no sedation or motor impairment, distinguishing it from benzodiazepine class.',
      },
    ],
    applications: [
      'Anxiety pathway research',
      'Cognitive enhancement under stress conditions',
      'Immune-neurological axis studies',
      'GABA modulation mechanism research',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '751.9 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['semax', 'dsip', 'vip'],
  },
  {
    id: 'dsip',
    name: 'DSIP',
    dosage: '5 mg',
    category: 'Cognitive & Neurological',
    tagline: 'Delta sleep-inducing peptide for sleep cycle research',
    description:
      'DSIP (Delta Sleep-Inducing Peptide) is a neuropeptide that was first isolated from the cerebral venous blood of rabbits during slow-wave sleep. It plays a role in sleep regulation, stress response modulation, and various neuroendocrine functions.',
    mechanism: [
      'DSIP modulates the release of multiple pituitary hormones including GH, LH, and corticotrophin, contributing to its broad neuroendocrine effects and relevance to sleep architecture research.',
      'It demonstrates antioxidant properties and may interact with sigma receptors, contributing to stress attenuation effects observed in preclinical studies.',
    ],
    researchFindings: [
      {
        title: 'Sleep Architecture Modulation',
        source: 'European Journal of Pharmacology, 1980',
        year: '1980',
        summary: 'DSIP produced reliable induction of slow-wave (delta) sleep in rabbits when administered centrally, with dose-dependent effects on sleep stage distribution.',
      },
    ],
    applications: [
      'Sleep regulation pathway research',
      'Neuroendocrine axis modulation studies',
      'Stress response attenuation research',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '848.8 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['selank', 'semax', 'epithalon'],
  },

  // ── IMMUNE & SYSTEMIC SUPPORT ──────────────────────────────────────────────
  {
    id: 'kpv',
    name: 'KPV',
    dosage: '10 mg',
    category: 'Immune & Systemic Support',
    tagline: 'Alpha-MSH C-terminal tripeptide with potent anti-inflammatory properties',
    description:
      'KPV (Lys-Pro-Val) is the C-terminal tripeptide of alpha-melanocyte stimulating hormone (α-MSH). It retains the anti-inflammatory potency of the full α-MSH peptide through direct MC1R and MC3R activation, with a simpler structure suited to in vitro and in vivo mechanistic studies.',
    mechanism: [
      'KPV directly enters cells and interacts with intracellular inflammatory signalling pathways, inhibiting NF-κB activation and reducing the production of pro-inflammatory cytokines including IL-1β, IL-6, and TNF-α.',
      'As an MC1R agonist, it modulates cAMP levels in immune cells, suppressing macrophage and neutrophil activation while promoting anti-inflammatory M2 macrophage polarisation.',
    ],
    researchFindings: [
      {
        title: 'Intestinal Anti-Inflammatory Effects',
        source: 'American Journal of Physiology, 2006',
        year: '2006',
        summary: 'KPV showed significant reduction of intestinal inflammation in IBD models, with improved mucosal integrity and reduced cytokine expression superior to control interventions.',
      },
    ],
    applications: [
      'Intestinal inflammation research (IBD models)',
      'NF-κB signalling pathway studies',
      'Melanocortin receptor pharmacology',
      'Mucosal immunity research',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '341.4 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['bpc-157', 'thymosin-alpha-1', 'vip', 'tb-500'],
  },
  {
    id: 'vip',
    name: 'VIP',
    dosage: '5 mg',
    category: 'Immune & Systemic Support',
    tagline: 'Vasoactive intestinal peptide for neuro-immune research',
    description:
      'VIP (Vasoactive Intestinal Peptide) is a 28 amino acid neuropeptide with broad biological activity across the immune, gastrointestinal, and nervous systems. It is a potent anti-inflammatory and immunomodulatory agent with relevance to numerous disease models.',
    mechanism: [
      'VIP acts through VPAC1 and VPAC2 receptors to increase intracellular cAMP, producing vasodilation, smooth muscle relaxation, and inhibition of pro-inflammatory cytokine production.',
      'In immune contexts, VIP shifts T-helper cell balance from Th1 to Th2/Treg phenotypes, offering potential utility in autoimmune and chronic inflammatory disease research models.',
    ],
    researchFindings: [
      {
        title: 'VIP in Autoimmune Disease Models',
        source: 'Journal of Immunology, 2000',
        year: '2000',
        summary: 'VIP treatment in collagen-induced arthritis models produced significant disease attenuation through Th1 cytokine suppression and regulatory T-cell expansion.',
      },
    ],
    applications: [
      'Autoimmune disease model research',
      'GI motility and inflammation studies',
      'Neuroprotection research',
      'Pulmonary vasodilation investigations',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '3,326.8 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['kpv', 'selank', 'bpc-157', 'thymosin-alpha-1'],
  },

  // ── APPEARANCE & SKIN HEALTH ───────────────────────────────────────────────
  {
    id: 'melanotan-ii',
    name: 'Melanotan II',
    dosage: '10 mg',
    category: 'Appearance & Skin Health',
    tagline: 'Melanocortin receptor agonist for pigmentation research',
    description:
      'Melanotan II is a synthetic cyclic heptapeptide analogue of alpha-melanocyte stimulating hormone (α-MSH). It is a potent, non-selective melanocortin receptor agonist studied for its effects on melanogenesis, sexual function, and appetite.',
    mechanism: [
      'Melanotan II acts as a non-selective agonist at MC1R, MC3R, MC4R, and MC5R. MC1R activation in melanocytes increases eumelanin production, the primary pigment responsible for UV-protective tanning response.',
      'MC4R activation in the hypothalamus mediates appetite suppression and influences sexual arousal pathways, accounting for the compound\'s documented effects on libido and spontaneous erection in preclinical and human research.',
    ],
    researchFindings: [
      {
        title: 'Melanogenesis and Photoprotection',
        source: 'Journal of Investigative Dermatology, 2000',
        year: '2000',
        summary: 'MT-II produced dose-dependent increases in skin pigmentation in human subjects, with eumelanin-specific increases suggesting potential photoprotective applications.',
      },
    ],
    applications: [
      'Melanocortin receptor pharmacology research',
      'Melanogenesis mechanistic studies',
      'Sexual function pathway research (MC4R)',
      'Photoprotection mechanism investigations',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '1,024.2 Da' },
      { label: 'CAS Number', value: '121062-08-6' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['melanotan-i', 'pt-141', 'ghk-cu'],
  },
  {
    id: 'melanotan-i',
    name: 'Melanotan I',
    dosage: '10 mg',
    category: 'Appearance & Skin Health',
    tagline: 'Linear alpha-MSH analogue for selective melanogenesis research',
    description:
      'Melanotan I (afamelanotide) is a synthetic linear analogue of α-MSH with high selectivity for the MC1R receptor. Unlike Melanotan II, it has minimal MC4R activity, providing a more targeted melanogenesis research tool without significant effects on sexual function or appetite.',
    mechanism: [
      'Selective MC1R agonism in dermal melanocytes stimulates tyrosinase activity and increases production of eumelanin through the cAMP/PKA/MITF pathway, producing photoprotective pigmentation without erythema or UV-dependent photodamage.',
    ],
    researchFindings: [
      {
        title: 'Erythropoietic Protoporphyria Treatment',
        source: 'New England Journal of Medicine, 2015',
        year: '2015',
        summary: 'Afamelanotide (MT-I) significantly increased pain-free sun exposure time in EPP patients through melanocyte-mediated photoprotection, receiving EU regulatory approval.',
      },
    ],
    applications: [
      'Selective MC1R pharmacology research',
      'Photoprotection mechanism studies',
      'Pigmentation disorder research',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '1,646.9 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['melanotan-ii', 'ghk-cu'],
  },
  {
    id: 'pt-141',
    name: 'PT-141',
    dosage: '10 mg',
    category: 'Appearance & Skin Health',
    tagline: 'Bremelanotide — MC3R/MC4R agonist for sexual function research',
    description:
      'PT-141 (Bremelanotide) is a cyclic heptapeptide melanocortin receptor agonist derived from Melanotan II. It acts centrally via MC3R and MC4R to influence sexual arousal pathways, and has received FDA approval for hypoactive sexual desire disorder in premenopausal women.',
    mechanism: [
      'PT-141 activates MC3R and MC4R in hypothalamic and limbic circuits associated with sexual arousal regulation, producing pro-sexual effects through central nervous system mechanisms distinct from PDE5 inhibitors.',
    ],
    researchFindings: [
      {
        title: 'FDA Approval: Hypoactive Sexual Desire Disorder',
        source: 'Journal of Sexual Medicine, 2019',
        year: '2019',
        summary: 'Phase 3 trials demonstrated significant improvements in satisfying sexual events and sexual desire in premenopausal women with HSDD, supporting regulatory approval.',
      },
    ],
    applications: [
      'Central sexual arousal pathway research',
      'Melanocortin receptor CNS pharmacology',
      'Female sexual dysfunction mechanistic studies',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '1,025.2 Da' },
      { label: 'CAS Number', value: '189691-06-3' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['melanotan-ii', 'melanotan-i', 'kisspeptin-10'],
  },

  // ── METABOLIC & CELLULAR HEALTH ───────────────────────────────────────────
  {
    id: 'mots-c',
    name: 'MOTS-c',
    dosage: '10 mg',
    category: 'Metabolic & Cellular Health',
    tagline: 'Mitochondrial-derived peptide for metabolic regulation research',
    description:
      'MOTS-c is a 16 amino acid peptide encoded within the mitochondrial genome\'s 12S rRNA region, making it one of the few known mitochondria-derived peptides. It plays a regulatory role in energy homeostasis and metabolic adaptation, representing a novel class of mitochondrial signalling molecules.',
    mechanism: [
      'MOTS-c translocates to the nucleus where it activates AMPK and the FOXO transcription factor pathway, upregulating antioxidant defences and mitochondrial biogenesis while improving insulin sensitivity in skeletal muscle.',
      'It modulates folate cycle and methionine metabolism, influencing purine biosynthesis and AICAR production, which activates AMPK — a master regulator of energy homeostasis.',
    ],
    researchFindings: [
      {
        title: 'Mitochondrial Peptide Regulates Metabolism',
        source: 'Cell Metabolism, 2015',
        year: '2015',
        summary: 'MOTS-c was identified as a novel mitochondria-derived peptide that prevents diet-induced insulin resistance in mice, establishing its role in metabolic regulation.',
      },
    ],
    applications: [
      'Mitochondrial biology and biogenesis research',
      'Insulin sensitivity mechanistic studies',
      'Aging and longevity metabolic research',
      'AMPK pathway investigation',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '2,174.6 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['igf-1-lr3', 'aod-9604', 'epithalon', 'tesamorelin'],
  },
  {
    id: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    dosage: '1 mg',
    category: 'Metabolic & Cellular Health',
    tagline: 'Long-acting insulin-like growth factor analogue for anabolic research',
    description:
      'IGF-1 LR3 (Insulin-like Growth Factor-1 Long R3) is a recombinant analogue of human IGF-1 with an N-terminal 13 amino acid extension and a Glu→Arg substitution that reduces binding to IGF binding proteins, dramatically extending its half-life and bioavailability.',
    mechanism: [
      'IGF-1 LR3 binds the IGF-1 receptor (IGF1R) to activate the PI3K/Akt/mTOR and MAPK signalling cascades, stimulating protein synthesis, cell proliferation, differentiation, and inhibiting apoptosis in virtually all tissue types.',
      'The reduced IGFBP binding prolongs its half-life to approximately 20-30 hours compared to 12-15 minutes for native IGF-1, enabling more sustained in vitro and in vivo research protocols.',
    ],
    researchFindings: [
      {
        title: 'Muscle Hypertrophy Signalling',
        source: 'American Journal of Physiology, 2004',
        year: '2004',
        summary: 'IGF-1 LR3 produced superior and more prolonged activation of mTOR-mediated protein synthesis in muscle cell cultures compared to native IGF-1, supporting its use as a research tool.',
      },
    ],
    applications: [
      'Muscle biology and protein synthesis research',
      'IGF-1 receptor signal transduction studies',
      'Anabolic pathway mechanistic research',
      'Cell proliferation and differentiation models',
    ],
    specifications: [
      { label: 'Purity', value: '≥97% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '9,200 Da (approx)' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['cjc-1295-dac', 'ipamorelin', 'mots-c', 'tesamorelin'],
  },
  {
    id: 'kisspeptin-10',
    name: 'Kisspeptin-10',
    dosage: '5 mg',
    category: 'Metabolic & Cellular Health',
    tagline: 'Gonadotropin regulation peptide for reproductive axis research',
    description:
      'Kisspeptin-10 is the shortest biologically active fragment of the kisspeptin family, derived from the KISS1 gene product. It is a potent stimulator of the hypothalamic-pituitary-gonadal (HPG) axis, regulating LH and FSH secretion through GPR54 (KISS1R) activation.',
    mechanism: [
      'Kisspeptin-10 activates KISS1R (GPR54) on GnRH neurons in the hypothalamus, stimulating pulsatile GnRH release which drives LH and FSH secretion from the anterior pituitary — the foundational signal for gonadal sex hormone production.',
    ],
    researchFindings: [
      {
        title: 'Gonadotropin Release in Human Subjects',
        source: 'Journal of Clinical Endocrinology & Metabolism, 2005',
        year: '2005',
        summary: 'Kisspeptin-10 infusion produced robust dose-dependent LH secretion in healthy male and female volunteers, establishing its role as a potent HPG axis activator.',
      },
    ],
    applications: [
      'Reproductive endocrinology research',
      'HPG axis modulation studies',
      'Puberty timing and GnRH pulse research',
      'Hypogonadism mechanism investigations',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '1,302.5 Da' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['oxytocin', 'ipamorelin', 'cjc-1295-dac'],
  },
  {
    id: 'oxytocin',
    name: 'Oxytocin',
    dosage: '2 mg',
    category: 'Metabolic & Cellular Health',
    tagline: 'Nonapeptide for social bonding and metabolic signalling research',
    description:
      'Oxytocin is a naturally occurring nonapeptide produced in the hypothalamus and released by the posterior pituitary. Beyond its classical roles in parturition and lactation, it has emerging importance in social behaviour, appetite regulation, and metabolic function research.',
    mechanism: [
      'Oxytocin acts through the oxytocin receptor (OXTR), a G-protein coupled receptor expressed in uterine smooth muscle, mammary glands, CNS regions associated with social behaviour, and adipose/muscle tissue relevant to metabolic regulation.',
      'Central OXTR activation modulates appetite, reduces food intake, and improves insulin sensitivity in multiple preclinical models, suggesting roles in metabolic disease research beyond its reproductive functions.',
    ],
    researchFindings: [
      {
        title: 'Oxytocin and Metabolic Regulation',
        source: 'Diabetes, 2010',
        year: '2010',
        summary: 'Central oxytocin administration reduced food intake and body weight in rodent obesity models through OXTR-mediated suppression of hypothalamic appetite circuits.',
      },
    ],
    applications: [
      'Social behaviour and bonding mechanistic research',
      'Appetite and metabolic regulation studies',
      'Uterine contractility research',
      'Neuropeptide CNS pharmacology',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '1,007.2 Da' },
      { label: 'CAS Number', value: '50-56-6' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['kisspeptin-10', 'vip', 'selank'],
  },
  {
    id: '5-amino-1mq',
    name: '5-Amino-1MQ',
    dosage: '100 mg',
    category: 'Metabolic & Cellular Health',
    tagline: 'NNMT inhibitor for fat cell metabolism research',
    description:
      'is a small molecule inhibitor of NNMT (Nicotinamide N-methyltransferase), an enzyme highly expressed in adipose tissue that plays a key role in epigenetic regulation of fat cell metabolism and NAD+ availability.',
    mechanism: [
      '5-Amino-1MQ inhibits NNMT, preventing the methylation of nicotinamide that would otherwise reduce intracellular NAD+ levels. Elevated NAD+ activates SIRT1 and other sirtuins, promoting fat oxidation and limiting adipogenesis.',
      'In adipocyte models, NNMT inhibition reduces fat cell size, inhibits adipogenic gene expression, and increases energy expenditure through sirtuin-mediated transcriptional changes — making it a key compound in obesity epigenetics research.',
    ],
    researchFindings: [
      {
        title: 'NNMT Inhibition Prevents Obesity',
        source: 'Nature Chemical Biology, 2018',
        year: '2018',
        summary: 'NNMT inhibition in obese mice reduced adiposity and improved metabolic parameters without food intake changes, through NAD+/sirtuin-mediated mechanisms.',
      },
    ],
    applications: [
      'Adipose tissue epigenetics research',
      'NAD+ metabolism and sirtuin pathway studies',
      'Obesity mechanistic investigations',
      'NNMT enzyme pharmacology',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Crystalline powder' },
      { label: 'Molecular Weight', value: '179.22 Da' },
      { label: 'Storage', value: '2-8°C' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    relatedIds: ['mots-c', 'aod-9604', 'epithalon'],
    image: '/images/products/retatrutide_10mg.webp',
  },

  // ── SPECIALIZED BLENDS ─────────────────────────────────────────────────────
  {
    id: 'wolverine-stack',
    name: 'Wolverine Stack',
    dosage: 'BPC-157 + TB-500',
    category: 'Specialized Blends',
    tagline: 'Combined tissue repair stack for comprehensive recovery research',
    description:
      'The Wolverine Stack combines BPC-157 and TB-500 — two of the most well-researched tissue repair peptides — into a synergistic research protocol. Each compound operates through complementary mechanisms, with BPC-157 targeting angiogenesis and GI-mediated repair while TB-500 focuses on actin regulation and systemic cell migration.',
    mechanism: [
      'BPC-157 promotes vascular growth through VEGFR2 upregulation and modulates growth factor cascades including EGF and FGF. TB-500 drives cell migration to injury sites through actin-binding activity and activates systemic anti-inflammatory pathways.',
      'The combined protocol is hypothesised to address multiple repair phases simultaneously: TB-500 facilitating cell migration and initial injury response while BPC-157 supports sustained vascular and tissue remodeling across multiple organ systems.',
    ],
    researchFindings: [
      {
        title: 'Synergistic Tissue Repair',
        source: 'Multiple peer-reviewed sources',
        year: '2015-2023',
        summary: 'Individual mechanistic research supports complementary and potentially synergistic tissue repair activity across tendon, muscle, ligament, and gastrointestinal tissue models.',
      },
    ],
    applications: [
      'Comprehensive musculoskeletal repair protocols',
      'Synergistic peptide combination research',
      'Multi-tissue recovery model investigations',
    ],
    specifications: [
      { label: 'Components', value: 'BPC-157 + TB-500' },
      { label: 'Purity (each)', value: '≥99% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder (separate vials)' },
      { label: 'Storage', value: '-20°C (long-term)' },
    ],
    relatedIds: ['bpc-157', 'tb-500', 'thymosin-alpha-1', 'ghk-cu'],
  },
  {
    id: 'growth-stack',
    name: 'Growth Stack',
    dosage: 'CJC-1295 + Ipamorelin',
    category: 'Specialized Blends',
    tagline: 'GHRH/GHRP synergy stack for GH axis research',
    description:
      'The Growth Stack combines CJC-1295 (no DAC) with Ipamorelin, pairing a GHRH analogue with a selective GHRP to produce synergistic GH release through complementary receptor mechanisms. This combination is one of the most studied GHRH/GHRP protocols in growth hormone research.',
    mechanism: [
      'CJC-1295 activates GHRH receptors on pituitary somatotrophs, providing the primary signal for GH release. Ipamorelin simultaneously activates the ghrelin receptor (GHS-R), amplifying GH pulse amplitude through a distinct but complementary pathway.',
      'The dual-receptor activation produces GH pulses approximately 3-4 times greater than either compound alone, while preserving the pulsatile rhythm essential for physiological GH axis function.',
    ],
    researchFindings: [
      {
        title: 'GHRH/GHRP Synergism in GH Release',
        source: 'Journal of Clinical Endocrinology & Metabolism',
        year: '2000',
        summary: 'Combined GHRH and GHRP administration produces supra-additive GH release that exceeds either compound alone, establishing the pharmacological basis for combination protocols.',
      },
    ],
    applications: [
      'GH axis synergy research protocols',
      'Pulsatile GH physiology studies',
      'Body composition mechanistic research',
    ],
    specifications: [
      { label: 'Components', value: 'CJC-1295 no DAC + Ipamorelin' },
      { label: 'Purity (each)', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder (separate vials)' },
      { label: 'Storage', value: '-20°C (long-term)' },
    ],
    relatedIds: ['cjc-1295-no-dac', 'ipamorelin', 'cjc-1295-dac', 'igf-1-lr3'],
  },
  {
    id: 'glow-stack',
    name: 'Glow',
    dosage: 'TB-500 + BPC-157 + GHK-Cu',
    category: 'Specialized Blends',
    tagline: 'Regenerative skin and systemic repair stack',
    description:
      'The Glow Stack combines TB-500, BPC-157, and GHK-Cu to create a comprehensive skin and systemic regenerative research protocol. Each compound contributes unique mechanisms: BPC-157 for systemic repair, TB-500 for cell migration, and GHK-Cu for collagen synthesis and gene expression remodeling.',
    mechanism: [
      'GHK-Cu addresses dermal collagen and elastin synthesis at the gene expression level, TB-500 facilitates cell migration and wound closure through actin regulation, and BPC-157 supports angiogenesis and multi-tissue repair.',
      'The combination is theorised to address skin aging and repair through three distinct and complementary pathways, providing a comprehensive research model for anti-aging dermatology.',
    ],
    researchFindings: [
      {
        title: 'Multi-Modal Skin Repair Mechanisms',
        source: 'Multiple peer-reviewed sources',
        year: '2010-2023',
        summary: 'Individual compound research demonstrates complementary mechanisms in fibroblast biology, wound healing, and anti-aging gene expression modulation.',
      },
    ],
    applications: [
      'Comprehensive skin regeneration research',
      'Anti-aging mechanism studies',
      'Wound healing combination protocols',
    ],
    specifications: [
      { label: 'Components', value: 'TB-500 + BPC-157 + GHK-Cu' },
      { label: 'Purity (each)', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder (separate vials)' },
      { label: 'Storage', value: '-20°C (long-term)' },
    ],
    relatedIds: ['tb-500', 'bpc-157', 'ghk-cu', 'melanotan-i'],
  },
  {
    id: 'klow-stack',
    name: 'Klow',
    dosage: 'TB-500 + BPC-157 + GHK-Cu + KPV',
    category: 'Specialized Blends',
    tagline: 'Extended regenerative stack with anti-inflammatory support',
    description:
      'The Klow Stack extends the Glow formulation with KPV, adding targeted NF-κB inhibition and melanocortin anti-inflammatory activity to the existing repair and regeneration mechanisms. This four-compound stack provides the most comprehensive coverage of inflammatory, regenerative, and dermal repair pathways.',
    mechanism: [
      'KPV contributes direct NF-κB pathway inhibition, reducing chronic low-grade inflammation that can impair regenerative processes. Combined with the cellular repair mechanisms of BPC-157, the actin-mediated migration of TB-500, and the collagen modulation of GHK-Cu, the stack addresses all major phases of tissue repair.',
    ],
    researchFindings: [
      {
        title: 'Combined Anti-Inflammatory and Regenerative Research',
        source: 'Multiple peer-reviewed sources',
        year: '2000-2023',
        summary: 'Each component has demonstrated efficacy in its respective domain; the combination represents a multi-pathway research approach to tissue repair and inflammation resolution.',
      },
    ],
    applications: [
      'Multi-modal anti-inflammatory and repair protocols',
      'Chronic inflammation-impaired healing models',
      'Comprehensive skin and systemic recovery research',
    ],
    specifications: [
      { label: 'Components', value: 'TB-500 + BPC-157 + GHK-Cu + KPV' },
      { label: 'Purity (each)', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder (separate vials)' },
      { label: 'Storage', value: '-20°C (long-term)' },
    ],
    relatedIds: ['tb-500', 'bpc-157', 'ghk-cu', 'kpv'],
  },

  // ── SUPPORTIVE PRODUCTS ────────────────────────────────────────────────────
  {
    id: 'bacteriostatic-water',
    name: 'Bacteriostatic Water',
    dosage: '30 mL',
    category: 'Supportive Products',
    tagline: 'Sterile reconstitution solution for lyophilized peptides',
    description:
      'Bacteriostatic water (0.9% benzyl alcohol in sterile water for injection) is the standard reconstitution solution for lyophilized peptide research compounds. The benzyl alcohol inhibits microbial growth, enabling multi-use vials and extending the usability of reconstituted solutions.',
    mechanism: [
      'Benzyl alcohol at 0.9% concentration provides bacteriostatic activity sufficient to prevent microbial proliferation in reconstituted peptide solutions, while remaining compatible with the stability requirements of most research peptides.',
    ],
    researchFindings: [
      {
        title: 'Standard Reconstitution Protocol',
        source: 'USP/NF Pharmaceutical Standards',
        year: 'Ongoing',
        summary: 'Bacteriostatic water with 0.9% benzyl alcohol is the established pharmaceutical standard for multi-dose reconstitution of protein and peptide compounds.',
      },
    ],
    applications: [
      'Lyophilized peptide reconstitution',
      'Multi-dose vial preparation',
      'Research peptide administration preparation',
    ],
    specifications: [
      { label: 'Benzyl Alcohol', value: '0.9% (w/v)' },
      { label: 'Form', value: 'Sterile aqueous solution' },
      { label: 'Volume', value: '30 mL per vial' },
      { label: 'Storage', value: '15-30°C (room temperature)' },
      { label: 'Shelf Life', value: '28 days after opening' },
    ],
    relatedIds: ['glutathione'],
  },
  {
    id: 'glutathione',
    name: 'Glutathione',
    dosage: '600 mg',
    category: 'Supportive Products',
    tagline: 'Master antioxidant tripeptide for oxidative stress research',
    description:
      'Glutathione (γ-L-glutamyl-L-cysteinyl-glycine) is the most abundant intracellular antioxidant, synthesised in virtually all mammalian cells. It plays central roles in redox homeostasis, xenobiotic detoxification, and immune function, making it a key reference compound in oxidative stress research.',
    mechanism: [
      'Glutathione provides antioxidant protection through its thiol group, directly neutralising reactive oxygen species (ROS) and serving as a cofactor for glutathione peroxidase in the reduction of lipid peroxides.',
      'Its roles in phase II detoxification, protein folding (via thiol-disulfide exchange), and immune cell function (supporting T-lymphocyte proliferation and NK cell activity) make it relevant across multiple research domains.',
    ],
    researchFindings: [
      {
        title: 'Glutathione in Cellular Redox Regulation',
        source: 'Annual Review of Biochemistry, 1989',
        year: '1989',
        summary: 'Comprehensive characterisation of glutathione\'s roles in oxidative stress defence, xenobiotic metabolism, and immune function established its status as the primary cellular antioxidant.',
      },
    ],
    applications: [
      'Oxidative stress and antioxidant research',
      'Liver detoxification mechanism studies',
      'Immune function and T-cell research',
      'ROS modulation investigations',
    ],
    specifications: [
      { label: 'Purity', value: '≥98% (HPLC verified)' },
      { label: 'Form', value: 'Lyophilized powder' },
      { label: 'Molecular Weight', value: '307.3 Da' },
      { label: 'CAS Number', value: '70-18-8' },
      { label: 'Storage', value: '-20°C (long-term)' },
      { label: 'Shelf Life', value: '24 months lyophilized' },
    ],
    relatedIds: ['epithalon', 'mots-c', 'bacteriostatic-water'],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(ids: string[]): Product[] {
  return ids.map((id) => getProductById(id)).filter(Boolean) as Product[];
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}
