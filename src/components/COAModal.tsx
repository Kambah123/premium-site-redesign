import { X, Download } from 'lucide-react';
import COAResultsCard from './COAResultsCard';
import type { COAData } from '../data/coaData';

interface COAModalProps {
  isOpen: boolean;
  coa: COAData;
  onClose: () => void;
}

export default function COAModal({ isOpen, coa, onClose }: COAModalProps) {
  if (!isOpen) return null;

  const handleViewPDF = () => {
    window.open(coa.pdfUrl, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 border-b border-slate-700/50 flex items-center justify-between z-10">
            <h2 className="text-white text-xl font-semibold">Certificate of Analysis</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 hover:text-white"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Results Card */}
            <div>
              <COAResultsCard coa={coa} onViewPDF={handleViewPDF} />
            </div>

            {/* Verification Section */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                Verification Status
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <p className="text-emerald-400 text-sm font-semibold">Third-Party Verified</p>
                  </div>
                  <p className="text-slate-400 text-xs">
                    Independently tested by {coa.laboratory}
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <p className="text-emerald-400 text-sm font-semibold">Batch Specific</p>
                  </div>
                  <p className="text-slate-400 text-xs">
                    Lot {coa.lotNumber} tested individually
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <p className="text-emerald-400 text-sm font-semibold">Certificate Available</p>
                  </div>
                  <p className="text-slate-400 text-xs">
                    Official PDF available for download
                  </p>
                </div>
              </div>
            </div>

            {/* Laboratory Summary */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                Laboratory Summary
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300">
                  <span className="text-slate-400 font-mono">Testing Purpose:</span> {coa.testingPurpose}
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-400 font-mono">Sample ID:</span> {coa.sampleId}
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-400 font-mono">Customer:</span> {coa.customerName}
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-400 font-mono">Storage:</span> {coa.storage}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-700/50">
              <button
                onClick={handleViewPDF}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/50 rounded-lg transition-all font-medium"
              >
                <Download size={18} />
                Download Full COA PDF
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 border border-slate-600/50 rounded-lg transition-all font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
