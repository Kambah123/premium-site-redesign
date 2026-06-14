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
            <FileText size={20} className="text-emerald-400" />
            <h2 className="text-white text-2xl font-semibold">Certificate of Analysis (COA)</h2>
          </div>
          <div className="w-12 h-px bg-emerald-500/30" />
        </div>

        {/* Verification Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800/40 border border-emerald-500/30 rounded-xl p-4 hover:border-emerald-500/60 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <CheckCircle2 size={20} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Third-Party Laboratory Verified</p>
                <p className="text-slate-400 text-xs mt-1">Independently tested by {coa.laboratory}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-emerald-500/30 rounded-xl p-4 hover:border-emerald-500/60 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <TestTube size={20} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Batch Specific Testing</p>
                <p className="text-slate-400 text-xs mt-1">Lot {coa.lotNumber} tested individually</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-emerald-500/30 rounded-xl p-4 hover:border-emerald-500/60 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Award size={20} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Certificate Available</p>
                <p className="text-slate-400 text-xs mt-1">Official PDF available for download</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Purity (HPLC)</p>
              <p className="text-emerald-400 text-lg font-bold">{coa.purityHPLC}</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Potency</p>
              <p className="text-emerald-400 text-lg font-bold">104.5%</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Lot Number</p>
              <p className="text-emerald-400 text-lg font-bold">{coa.lotNumber}</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Test Date</p>
              <p className="text-emerald-400 text-lg font-bold">{coa.testDate}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 px-6 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/50 rounded-lg transition-all font-medium text-sm"
          >
            View Results
          </button>
          <button
            onClick={handleViewPDF}
            className="flex-1 px-6 py-3 bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 border border-slate-600/50 rounded-lg transition-all font-medium text-sm"
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
