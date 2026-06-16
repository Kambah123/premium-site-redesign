const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf-8');

// The interface seems completely broken from multiple passes.
// Let's manually reconstruct the top part of the file.

const splitPoint = code.indexOf('export const CATEGORIES: Category[]');
const topPart = `export type Category =
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
  price?: number;
  images?: string[];
}

`;

code = topPart + code.substring(splitPoint);
fs.writeFileSync('src/data/products.ts', code, 'utf-8');
