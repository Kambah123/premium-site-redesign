export type EvidenceTier =
  | 'Regulator-approved'
  | 'Human clinical (off-label)'
  | 'Animal & lab only'
  | 'Anecdote'
  | 'Inherited';

export interface Article {
  id: string;
  title: string;
  compound?: string;
  tier: EvidenceTier;
  summary: string;
  content: string;
  date: string;
}

export const libraryArticles: Article[] = [
  {
    id: 'ghk-cu-evidence',
    title: 'GHK-Cu: Understanding the Clinical Evidence',
    compound: 'GHK-Cu',
    tier: 'Human clinical (off-label)',
    summary: 'A naturally occurring copper-binding tripeptide with strong human evidence for topical skin remodeling and wound healing. The injectable form used in the community has far less human data.',
    date: '2024-03-15',
    content: `
GHK-Cu (Copper Tripeptide-1) is one of the most rigorously studied cosmetic peptides in existence. Originally isolated from human plasma in 1973 by Dr. Loren Pickart, it has a substantial base of human clinical data supporting its use in wound healing, skin remodeling, and hair growth.

**The Evidence Gap: Topical vs. Injectable**
The overwhelming majority of human clinical trials for GHK-Cu involve topical administration (creams, serums, and gels). In these formats, it has demonstrated an ability to improve skin elasticity, density, and firmness while reducing fine lines and hyperpigmentation.

However, the "research peptide" community frequently discusses the use of systemic, subcutaneous injections of GHK-Cu for systemic healing. It is critical to understand that the human clinical evidence for systemic injection is virtually non-existent.

**Mechanism of Action**
GHK-Cu is thought to work by modulating gene expression. It has been shown to upregulate genes associated with tissue remodeling (like collagen and elastin synthesis) and downregulate genes associated with inflammation and tissue breakdown.

**Verdict**
Excellent evidence for topical use in dermatology and wound care. Extremely limited evidence for systemic injection in humans.
    `
  },
  {
    id: 'bpc-157-evidence',
    title: 'BPC-157: The Gap Between Animal Trials and Human Evidence',
    compound: 'BPC-157',
    tier: 'Animal & lab only',
    summary: 'The community\'s flagship \'healing\' peptide — but its evidence is almost entirely from animals, with thin human data and an abandoned safety trial.',
    date: '2024-04-02',
    content: `
BPC-157 (Body Protection Compound-157) is a 15-amino acid sequence derived from a protein found in human gastric juice. It is arguably the most discussed and most purchased peptide in the "research" and biohacking communities, lauded for its purported ability to rapidly heal tendons, ligaments, muscles, and even the gut.

**The Reality of the Data**
The disconnect between BPC-157's reputation and its actual clinical evidence is stark. The vast majority of studies on BPC-157 have been conducted on rats and mice. In these animal models, it consistently demonstrates remarkable healing properties, particularly for angiogenesis (the formation of new blood vessels) and the healing of connective tissue.

However, human data is exceptionally thin. A phase II clinical trial for ulcerative colitis was initiated but the results were never published.

**Regulatory Action**
In recent years, regulatory bodies like the FDA and TGA have increasingly targeted BPC-157 due to the lack of human safety data and the explosion of its use in compounding pharmacies and grey markets. The FDA has categorized it as a substance with safety concerns.

**Verdict**
Highly promising in animal models for tissue repair and gut health. Unproven and unregulated in humans.
    `
  },
  {
    id: 'retatrutide-evidence',
    title: 'Retatrutide: The Triple-G Agonist',
    compound: 'Retatrutide',
    tier: 'Animal & lab only', // Phase 3 investigational
    summary: 'Eli Lilly\'s investigational \'triple-G\' weight-loss injectable with the strongest weight-loss data recorded in trials — but not approved anywhere in the world.',
    date: '2024-05-10',
    content: `
Retatrutide (LY3437943) represents the next frontier in pharmacological weight management. While Semaglutide targets one receptor (GLP-1) and Tirzepatide targets two (GLP-1 and GIP), Retatrutide is a "triple agonist," targeting GLP-1, GIP, and the Glucagon receptor.

**Clinical Trial Results**
In Phase 2 trials, Retatrutide demonstrated unprecedented weight loss efficacy. Participants taking the highest dose lost an average of 24.2% of their body weight over 48 weeks. This surpasses the results seen with both Semaglutide and Tirzepatide in similar timeframes.

The addition of the glucagon receptor agonism is believed to increase energy expenditure (calorie burning) directly, in addition to the appetite suppression provided by GLP-1 and GIP. It also showed profound effects on liver fat reduction.

**Regulatory Status**
Despite the incredible Phase 2 data, Retatrutide is currently in Phase 3 clinical trials. It is not an approved drug anywhere in the world. Any Retatrutide sold online is an unapproved, unregulated copy of an investigational drug.

**Verdict**
Potentially the most powerful weight-loss drug ever developed. Currently unapproved and strictly investigational.
    `
  }
];

export function getArticleById(id: string): Article | undefined {
  return libraryArticles.find(a => a.id === id);
}
