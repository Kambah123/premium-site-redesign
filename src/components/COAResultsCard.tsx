import { CheckCircle2, AlertCircle, Download } from 'lucide-react';
import type { COAData } from '../data/coaData';

interface COAResultsCardProps {
  coa: COAData;
  onViewPDF?: () => void;
}

export default function COAResultsCard({ coa, onViewPDF }: COAResultsCardProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-5 border-b border-slate-700/50">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-white text-lg font-semibold">{coa.productName}</h3>
            <p className="text-slate-400 text-sm font-mono mt-1">Lot: {coa.lotNumber}</p>
          </div>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
            coa.overallStatus === 'PASS' 
              ? 'bg-emerald-500/20 border border-emerald-500/50' 
              : 'bg-red-500/20 border border-red-500/50'
          }`}>
            {coa.overallStatus === 'PASS' ? (
              <>
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span className="text-emerald-400 text-xs font-semibold">PASS</span>
              </>
            ) : (
              <>
                <AlertCircle size={16} className="text-red-400" />
                <span className="text-red-400 text-xs font-semibold">FAIL</span>
              </>
            )}
          </div>
        </div>
        <p className="text-slate-500 text-xs font-mono">
          Tested: {coa.testDate} | Report: {coa.reportDate}
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 py-5 border-b border-slate-700/50">
        {/* Purity */}
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 hover:border-emerald-500/30 transition-colors">
          <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Purity (HPLC)</p>
          <p className="text-emerald-400 text-xl font-bold">{coa.purityHPLC}</p>
          <p className="text-slate-500 text-xs mt-1">Specification: ≥ 98%</p>
        </div>

        {/* Potency */}
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 hover:border-emerald-500/30 transition-colors">
          <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Potency</p>
          <p className="text-emerald-400 text-xl font-bold">104.5%</p>
          <p className="text-slate-500 text-xs mt-1">90–110% range</p>
        </div>

        {/* Identity */}
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 hover:border-emerald-500/30 transition-colors">
          <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Identity (LC-MS)</p>
          <p className="text-emerald-400 text-sm font-semibold">Confirmed</p>
          <p className="text-slate-500 text-xs mt-1">FTIR verified</p>
        </div>

        {/* Appearance */}
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 hover:border-emerald-500/30 transition-colors">
          <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Appearance</p>
          <p className="text-emerald-400 text-sm font-semibold">{coa.appearance}</p>
          <p className="text-slate-500 text-xs mt-1">Visual inspection</p>
        </div>

        {/* Heavy Metals */}
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 hover:border-emerald-500/30 transition-colors">
          <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Heavy Metals</p>
          <p className="text-emerald-400 text-sm font-semibold">{coa.heavyMetals}</p>
          <p className="text-slate-500 text-xs mt-1">USP standards</p>
        </div>

        {/* Endotoxin */}
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 hover:border-emerald-500/30 transition-colors">
          <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Endotoxin</p>
          <p className="text-emerald-400 text-sm font-semibold">{coa.endotoxin}</p>
          <p className="text-slate-500 text-xs mt-1">Sterility check</p>
        </div>
      </div>

      {/* Test Date */}
      <div className="px-6 py-3 bg-slate-800/20 border-b border-slate-700/50">
        <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Test Date</p>
        <p className="text-white text-sm font-semibold">{coa.testDate}</p>
      </div>

      {/* Test Results Table */}
      <div className="px-6 py-5 border-b border-slate-700/50">
        <h4 className="text-white text-sm font-semibold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
          Complete Test Results
        </h4>
        <div className="space-y-3">
          {coa.testResults.map((result, idx) => (
            <div key={idx} className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/20">
              <div className="flex items-start justify-between gap-3 mb-1">
                <p className="text-slate-300 text-sm font-medium">{result.label}</p>
                <div className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono ${
                  result.status === 'PASS'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {result.status}
                </div>
              </div>
              <p className="text-emerald-400 text-sm font-semibold">{result.value}</p>
              {result.specification && (
                <p className="text-slate-500 text-xs mt-1">Spec: {result.specification}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Laboratory Info */}
      <div className="px-6 py-5 border-b border-slate-700/50">
        <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
          Laboratory Information
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-slate-400 font-mono min-w-fit">Lab:</span>
            <span className="text-slate-300">{coa.laboratory}</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-slate-400 font-mono min-w-fit">Address:</span>
            <span className="text-slate-300">{coa.laboratoryAddress}</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-slate-400 font-mono min-w-fit">Phone:</span>
            <a href={`tel:${coa.laboratoryPhone}`} className="text-emerald-400 hover:text-emerald-300">
              {coa.laboratoryPhone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-slate-400 font-mono min-w-fit">Email:</span>
            <a href={`mailto:${coa.laboratoryEmail}`} className="text-emerald-400 hover:text-emerald-300">
              {coa.laboratoryEmail}
            </a>
          </div>
        </div>
      </div>

      {/* Footer with CTA */}
      <div className="px-6 py-4 bg-slate-800/30 border-t border-slate-700/50 flex items-center justify-between">
        <p className="text-slate-400 text-xs font-mono">
          Report ID: {coa.id}
        </p>
        {onViewPDF && (
          <button
            onClick={onViewPDF}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/50 rounded-lg transition-all text-sm font-medium"
          >
            <Download size={14} />
            View Full COA
          </button>
        )}
      </div>
    </div>
  );
}
