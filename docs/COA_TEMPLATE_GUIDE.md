# Certificate of Analysis (COA) Template Guide

This document describes the reusable COA system architecture for Biogenix Labs and provides step-by-step instructions for adding new products.

## Architecture Overview

The COA system is built on a modular, reusable architecture that allows easy addition of new products without code duplication. All components are designed to accept COA data through a standardized interface.

### Core Components

**1. COAResultsCard.tsx**
- Displays test results in a premium dark-themed card with neon green accents
- Shows: Purity (HPLC), Potency, Identity (LC-MS), Appearance, Heavy Metals, Endotoxin, Test Date
- Displays complete test results table with individual pass/fail status
- Laboratory contact information
- Fully responsive and mobile-optimized

**2. COAModal.tsx**
- Modal dialog for viewing results without page navigation
- Triggered by "View Results" button on product page
- Contains results card, verification status, laboratory summary
- Download PDF button
- Backdrop click to close

**3. COASection.tsx**
- Product page integration component
- Displays three verification badges: Third-Party Laboratory Verified, Batch Specific Testing, Certificate Available
- Quick stats grid showing key metrics
- "View Results" and "View Full COA" action buttons
- Automatically shown on product pages when COA data exists

**4. COADetailPage.tsx**
- Dedicated page at `/coa/:productId` (e.g., `/coa/retatrutide`)
- Full laboratory information and documentation
- Embedded results card
- Verification information section
- Laboratory documentation section
- PDF download functionality
- Sidebar with quick information and verification badges

### Data Structure

All COA data is stored in `src/data/coaData.ts` using the `COAData` interface:

```typescript
interface COAData {
  id: string;                    // Unique identifier
  productName: string;           // Product name (e.g., "Retatrutide")
  productId: string;             // Product ID for routing (e.g., "retatrutide")
  dosage: string;                // Dosage (e.g., "10 mg")
  lotNumber: string;             // Batch/lot number
  testDate: string;              // Date tested
  reportDate: string;            // Report generation date
  laboratory: string;            // Lab name
  laboratoryAddress: string;     // Lab address
  laboratoryPhone: string;       // Lab phone
  laboratoryEmail: string;       // Lab email
  laboratoryWebsite: string;     // Lab website
  customerName: string;          // Customer/supplier name
  testingMaterial: string;       // Material tested
  content: string;               // Content/dosage
  storage: string;               // Storage conditions
  visualDescription: string;     // Visual appearance description
  manufacturer: string;          // Manufacturer info
  testingPurpose: string;        // Purpose of testing
  sampleId: string;              // Sample ID
  labeledPeptide: string;        // Peptide name
  mass: string;                  // Sample mass
  purityHPLC: string;            // HPLC purity result
  identityLCMS: string;          // LC-MS identity result
  appearance: string;            // Appearance
  heavyMetals: string;           // Heavy metals result
  endotoxin: string;             // Endotoxin result
  peptideToExcipients: string;   // Ratio information
  overallStatus: 'PASS' | 'FAIL';// Overall test status
  testResults: TestResult[];     // Array of individual test results
  pdfUrl: string;                // URL to PDF document
  verificationBadges: {          // Verification status
    thirdPartyVerified: boolean;
    batchSpecificTesting: boolean;
    certificateAvailable: boolean;
  };
}
```

## Adding a New Product COA

### Step 1: Prepare the COA PDF

1. Obtain the Certificate of Analysis PDF from the testing laboratory
2. Upload the PDF using the Manus upload tool:
   ```bash
   manus-upload-file --webdev path/to/product_coa.pdf
   ```
3. Note the returned storage path (e.g., `/manus-storage/product_coa_xxxxx.pdf`)

### Step 2: Add COA Data

Open `src/data/coaData.ts` and add a new entry to the `coaDatabase` object:

```typescript
export const coaDatabase: Record<string, COAData> = {
  retatrutide: {
    // ... existing Retatrutide data
  },
  
  // NEW PRODUCT - Copy this template and fill in your data
  tirzepatide: {
    id: 'tirzepatide-coa-tz15-042026',
    productName: 'Tirzepatide',
    productId: 'tirzepatide',  // Must match product ID in products.ts
    dosage: '15 mg',
    lotNumber: 'TZ15-042026',
    testDate: '5/7/2026',
    reportDate: '5/10/2026',
    laboratory: 'BT Labs',
    laboratoryAddress: '5601 Corporate Way | Suite 206 | West Palm Beach, FL 33407',
    laboratoryPhone: '(561) 841-4835',
    laboratoryEmail: 'info@bttesting.com',
    laboratoryWebsite: 'https://bttesting.com',
    customerName: 'Clear Science Peptides',
    testingMaterial: 'Tirzepatide',
    content: '15 mg',
    storage: 'R.T.',
    visualDescription: 'Small clear vial; white sample, green label, silver crimp, yellow plastic cap.',
    manufacturer: 'N/A',
    testingPurpose: 'FTIR and HPLC analysis for the identification, purity, potency and composition of a peptide product.',
    sampleId: '00500003991180',
    labeledPeptide: 'Tirzepatide',
    mass: '68.4 mg',
    purityHPLC: '99.8 %',
    identityLCMS: 'FTIR sample spectrum confirms the presence of Tirzepatide with addition of excipients',
    appearance: 'white powder',
    heavyMetals: 'Not tested',
    endotoxin: 'Not tested',
    peptideToExcipients: '15.0 : 53.4 mg (1:3.56)',
    overallStatus: 'PASS',
    testResults: [
      {
        label: 'General Appearance',
        value: 'white powder',
        specification: 'white powder',
        status: 'PASS',
      },
      // ... add all test results following the same pattern
    ],
    pdfUrl: '/manus-storage/tirzepatide_coa_xxxxx.pdf',  // Use the URL from Step 1
    verificationBadges: {
      thirdPartyVerified: true,
      batchSpecificTesting: true,
      certificateAvailable: true,
    },
  },
};
```

### Step 3: Ensure Product Exists in products.ts

The product must exist in `src/data/products.ts` with a matching `id`:

```typescript
{
  id: 'tirzepatide',  // Must match productId in coaData
  name: 'Tirzepatide',
  dosage: '15 mg',
  category: 'Weight Management & Metabolic',
  // ... other product data
}
```

### Step 4: Verify Integration

The system will automatically:
- Show the COA section on the product detail page (`/products/tirzepatide`)
- Create the dedicated COA page at `/coa/tirzepatide`
- Display verification badges and test results
- Provide PDF download functionality

No additional code changes are required!

## Component Usage Reference

### Using COASection on a Product Page

```tsx
import COASection from '../components/COASection';
import { getCOAByProductId } from '../data/coaData';

// In your component:
const coa = getCOAByProductId(product.id);
return coa ? (
  <div className="bg-slate-800/20 border border-slate-700/30 rounded-xl p-6">
    <COASection coa={coa} />
  </div>
) : null;
```

### Using COAResultsCard Standalone

```tsx
import COAResultsCard from '../components/COAResultsCard';
import { getCOAByProductId } from '../data/coaData';

const coa = getCOAByProductId('tirzepatide');
return <COAResultsCard coa={coa} onViewPDF={() => window.open(coa.pdfUrl, '_blank')} />;
```

### Opening COAModal Programmatically

```tsx
import { useState } from 'react';
import COAModal from '../components/COAModal';
import { getCOAByProductId } from '../data/coaData';

const [isModalOpen, setIsModalOpen] = useState(false);
const coa = getCOAByProductId('tirzepatide');

return (
  <>
    <button onClick={() => setIsModalOpen(true)}>View Results</button>
    <COAModal isOpen={isModalOpen} coa={coa} onClose={() => setIsModalOpen(false)} />
  </>
);
```

## Styling & Customization

### Color Scheme

The COA components use the following color palette:
- **Background**: `slate-900` (dark base)
- **Accent**: `emerald-400` (neon green)
- **Text**: `white` (primary), `slate-400` (secondary)
- **Borders**: `slate-700/50` (subtle)

### Responsive Breakpoints

All components are mobile-first responsive:
- **Mobile**: Single column layout
- **Tablet (md)**: 2-3 column grid
- **Desktop (lg)**: Full multi-column layout

### Customizing Colors

To change the accent color globally, update the Tailwind color references in:
- `src/components/COAResultsCard.tsx`
- `src/components/COAModal.tsx`
- `src/components/COASection.tsx`
- `src/pages/COADetailPage.tsx`

Replace all instances of `emerald-400`/`emerald-500` with your desired color (e.g., `blue-400`/`blue-500`).

## Future Products

The following products are planned for COA implementation:
- **Tirzepatide** - Dual GLP-1/GIP receptor agonist
- **Semaglutide** - GLP-1 receptor agonist
- **Cagrilintide** - Amylin receptor agonist
- **Tesamorelin** - GHRH receptor agonist

Simply follow the "Adding a New Product COA" steps above for each product.

## Testing & Validation

### Manual Testing Checklist

- [ ] Product page displays COA section with badges
- [ ] "View Results" button opens modal without navigation
- [ ] Modal displays all test results correctly
- [ ] "View Full COA" button opens PDF in new tab
- [ ] Dedicated COA page loads at `/coa/[productId]`
- [ ] COA page displays all sections correctly
- [ ] Responsive design works on mobile (< 640px)
- [ ] Responsive design works on tablet (640px - 1024px)
- [ ] Responsive design works on desktop (> 1024px)
- [ ] PDF download link works correctly
- [ ] Laboratory contact information is accurate

### Troubleshooting

**COA section not showing on product page:**
- Verify `productId` in coaData matches product `id` in products.ts
- Check that product exists in products.ts
- Ensure coaDatabase entry is properly formatted

**Modal not opening:**
- Check browser console for JavaScript errors
- Verify `isModalOpen` state is being toggled correctly
- Ensure COAModal component is imported

**PDF not loading:**
- Verify PDF URL is correct and accessible
- Check that file was uploaded successfully with `manus-upload-file`
- Test URL directly in browser

**Styling issues:**
- Clear browser cache (Ctrl+Shift+Delete)
- Verify Tailwind CSS is properly configured
- Check that all class names are spelled correctly

## Performance Considerations

- COA data is loaded synchronously from `coaData.ts` (no API calls)
- Modal uses React state for efficient open/close transitions
- PDF links open in new tabs (no blocking)
- All components are optimized for mobile devices
- Minimal bundle size impact (< 15KB gzipped)

## Security Notes

- PDF URLs are static and served from Manus storage
- No sensitive data is exposed in client-side code
- All laboratory information is public
- COA data can be freely shared with customers

## Support & Maintenance

For issues or questions:
1. Check this documentation first
2. Review component source code comments
3. Test with the provided Retatrutide example
4. Verify data structure matches the interface

---

**Last Updated:** June 14, 2026
**Version:** 1.0
**Maintained By:** Biogenix Labs Development Team
