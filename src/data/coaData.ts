/**
 * Certificate of Analysis (COA) Data Structure
 * Designed to be reusable for all peptide products
 */

export interface TestResult {
  label: string;
  value: string;
  unit?: string;
  specification?: string;
  status: 'PASS' | 'FAIL' | 'PENDING';
}

export interface COAData {
  id: string;
  productName: string;
  productId: string;
  dosage: string;
  lotNumber: string;
  testDate: string;
  reportDate: string;
  laboratory: string;
  laboratoryAddress: string;
  laboratoryPhone: string;
  laboratoryEmail: string;
  laboratoryWebsite: string;
  customerName: string;
  testingMaterial: string;
  content: string;
  storage: string;
  visualDescription: string;
  manufacturer: string;
  testingPurpose: string;
  sampleId: string;
  labeledPeptide: string;
  mass: string;
  purityHPLC: string;
  identityLCMS: string;
  appearance: string;
  heavyMetals: string;
  endotoxin: string;
  peptideToExcipients: string;
  overallStatus: 'PASS' | 'FAIL';
  testResults: TestResult[];
  pdfUrl: string;
  verificationBadges: {
    thirdPartyVerified: boolean;
    batchSpecificTesting: boolean;
    certificateAvailable: boolean;
  };
}

export const coaDatabase: Record<string, COAData> = {
  retatrutide: {
    id: 'retatrutide-coa-rt10-042026',
    productName: 'Retatrutide',
    productId: 'retatrutide',
    dosage: '10 mg',
    lotNumber: 'RT10-042026',
    testDate: '5/7/2026',
    reportDate: '5/10/2026',
    laboratory: 'BT Labs',
    laboratoryAddress: '5601 Corporate Way | Suite 206 | West Palm Beach, FL 33407',
    laboratoryPhone: '(561) 841-4835',
    laboratoryEmail: 'info@bttesting.com',
    laboratoryWebsite: 'https://bttesting.com',
    customerName: 'Clear Science Peptides',
    testingMaterial: 'Retatrutide',
    content: '10 mg',
    storage: 'R.T.',
    visualDescription: 'Small clear vial; white sample, green label, silver crimp, yellow plastic cap.',
    manufacturer: 'N/A',
    testingPurpose: 'FTIR and HPLC analysis for the identification, purity, potency and composition of a peptide product. It does not provide information on particulate matter, microbial contamination or presence of endotoxins.',
    sampleId: '00500003991179',
    labeledPeptide: 'Retatrutide',
    mass: '68.4 mg',
    purityHPLC: '99.6 %',
    identityLCMS: 'FTIR sample spectrum confirms the presence of Retatrutide with addition of excipients',
    appearance: 'white powder',
    heavyMetals: 'Not tested',
    endotoxin: 'Not tested',
    peptideToExcipients: '10.4 : 58 mg (1:5.5)',
    overallStatus: 'PASS',
    testResults: [
      {
        label: 'General Appearance',
        value: 'white powder',
        specification: 'white powder',
        status: 'PASS',
      },
      {
        label: 'Mass',
        value: '68.4 mg',
        unit: 'mg',
        specification: 'As recorded',
        status: 'PASS',
      },
      {
        label: 'FTIR Identification and Composition Analysis',
        value: 'FTIR sample spectrum confirms the presence of Retatrutide with addition of excipients',
        specification: 'Sample spectrum should confirm the content of peptide via characteristic bands',
        status: 'PASS',
      },
      {
        label: 'HPLC Purity of Peptide Assay',
        value: '99.6 %',
        unit: '%',
        specification: 'Specifications: ≥ 98 %',
        status: 'PASS',
      },
      {
        label: 'HPLC Potency',
        value: '10.4 mg (104.5 %)',
        unit: 'mg',
        specification: 'Specifications: 90 – 110% of 10 mg',
        status: 'PASS',
      },
      {
        label: 'Peptide-to-Excipients Ratio',
        value: '10.4 : 58 mg (1:5.5)',
        specification: 'Recommended ratios of (1:2) to (1:10) for (peptide: excipients)',
        status: 'PASS',
      },
    ],
    pdfUrl: 'https://drive.google.com/file/d/11BkbgDMzPCKPgfC9rt3b2lKU1dqiyeXM/view?usp=drivesdk',
    verificationBadges: {
      thirdPartyVerified: true,
      batchSpecificTesting: true,
      certificateAvailable: true,
    },
  },

  // TEMPLATE DEMONSTRATION: Tirzepatide (proves component reusability)
  tirzepatide: {
    id: 'tirzepatide-coa-tz15-042026',
    productName: 'Tirzepatide',
    productId: 'tirzepatide',
    dosage: '15 mg',
    lotNumber: 'TZ15-042026',
    testDate: '5/8/2026',
    reportDate: '5/11/2026',
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
    mass: '68.5 mg',
    purityHPLC: '99.8 %',
    identityLCMS: 'FTIR sample spectrum confirms the presence of Tirzepatide with addition of excipients',
    appearance: 'white powder',
    heavyMetals: 'Not tested',
    endotoxin: 'Not tested',
    peptideToExcipients: '15.0 : 53.5 mg (1:3.57)',
    overallStatus: 'PASS',
    testResults: [
      {
        label: 'General Appearance',
        value: 'white powder',
        specification: 'white powder',
        status: 'PASS',
      },
      {
        label: 'Mass',
        value: '68.5 mg',
        unit: 'mg',
        specification: 'As recorded',
        status: 'PASS',
      },
      {
        label: 'FTIR Identification and Composition Analysis',
        value: 'FTIR sample spectrum confirms the presence of Tirzepatide with addition of excipients',
        specification: 'Sample spectrum should confirm the content of peptide via characteristic bands',
        status: 'PASS',
      },
      {
        label: 'HPLC Purity of Peptide Assay',
        value: '99.8 %',
        unit: '%',
        specification: 'Specifications: ≥ 98 %',
        status: 'PASS',
      },
      {
        label: 'HPLC Potency',
        value: '15.1 mg (100.7 %)',
        unit: 'mg',
        specification: 'Specifications: 90 – 110% of 15 mg',
        status: 'PASS',
      },
      {
        label: 'Peptide-to-Excipients Ratio',
        value: '15.0 : 53.5 mg (1:3.57)',
        specification: 'Recommended ratios of (1:2) to (1:10) for (peptide: excipients)',
        status: 'PASS',
      },
    ],
    pdfUrl: '/manus-storage/tirzepatide_coa_mock.pdf',
    verificationBadges: {
      thirdPartyVerified: true,
      batchSpecificTesting: true,
      certificateAvailable: true,
    },
  },
};

export function getCOAByProductId(productId: string): COAData | undefined {
  return coaDatabase[productId];
}

export function getAllCOAs(): COAData[] {
  return Object.values(coaDatabase);
}
