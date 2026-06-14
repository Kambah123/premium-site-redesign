import { useState } from 'react';
import { FileText, CheckCircle2, TestTube, Award } from 'lucide-react';
import COAModal from './COAModal';
import type { COAData } from '../data/coaData';

interface COASectionProps {
  coa: COAData;
}

export default function COASection({ coa }: COASectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewPDF = () => {
    window.open(coa.pdfUrl, '_blank');
  };

  return (
    <>
      <div className="space-y-6">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FileText size={20} className="text-gold-600" />
            <h2 className="text-navy-900 text-2xl font-semibold">Certificate of Analysis (COA)</h2>
          </div>
          <div className="w-12 h-px bg-gold-500/30" />
        </div>

        {/* Verification Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-pearl-shimmer/30 border border-gold-500/20 rounded-xl p-4 hover:border-gold-500/40 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gold-500/10 rounded-lg">
                <CheckCircle2 size={20} className="text-gold-600" />
              </div>
              <div>
                <p className="text-navy-900 text-sm font-semibold">Third-Party Laboratory Verified</p>
                <p className="text-navy-900/40 text-xs mt-1">Independently tested by {coa.laboratory}</p>
              </div>
            </div>
          </div>

          <div className="bg-pearl-shimmer/30 border border-gold-500/20 rounded-xl p-4 hover:border-gold-500/40 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gold-500/10 rounded-lg">
                <TestTube size={20} className="text-gold-600" />
              </div>
              <div>
                <p className="text-navy-900 text-sm font-semibold">Batch Specific Testing</p>
                <p className="text-navy-900/40 text-xs mt-1">Lot {coa.lotNumber} tested individually</p>
              </div>
            </div>
          </div>

          <div className="bg-pearl-shimmer/30 border border-gold-500/20 rounded-xl p-4 hover:border-gold-500/40 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gold-500/10 rounded-lg">
                <Award size={20} className="text-gold-600" />
              </div>
              <div>
                <p className="text-navy-900 text-sm font-semibold">Certificate Available</p>
                <p className="text-navy-900/40 text-xs mt-1">Official PDF available for download</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-navy-900 rounded-2xl p-6 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider mb-1">Purity (HPLC)</p>
              <p className="text-gold-400 text-xl font-bold">{coa.purityHPLC}</p>
            </div>
            <div>
              <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider mb-1">Potency</p>
              <p className="text-gold-400 text-xl font-bold">104.5%</p>
            </div>
            <div>
              <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider mb-1">Lot Number</p>
              <p className="text-gold-400 text-xl font-bold">{coa.lotNumber}</p>
            </div>
            <div>
              <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider mb-1">Test Date</p>
              <p className="text-gold-400 text-xl font-bold">{coa.testDate}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 px-6 py-4 bg-navy-900 text-white rounded-xl hover:bg-navy-800 transition-all font-bold text-sm shadow-lg"
          >
            View Results
          </button>
          <button
            onClick={handleViewPDF}
            className="flex-1 px-6 py-4 bg-white text-navy-900 border border-navy-900/10 rounded-xl hover:bg-pearl-shimmer transition-all font-bold text-sm shadow-sm"
          >
            View Full COA
          </button>
        </div>
      </div>

      {/* Modal */}
      <COAModal
        isOpen={isModalOpen}
        coa={coa}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
