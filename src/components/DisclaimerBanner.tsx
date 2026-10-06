import React from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';

interface DisclaimerBannerProps {
  compact?: boolean;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="bg-sky-50 border border-sky-200 text-sky-950 text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">
        <AlertCircle className="w-3.5 h-3.5 text-sky-700 shrink-0" />
        <span>
          <strong>Academic Disclaimer:</strong> Predictions and question priorities are strictly derived from historical previous-year patterns and do not guarantee actual examination questions.
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50/40 border border-sky-200/80 rounded-xl p-3.5 shadow-xs flex items-start gap-3 my-4">
      <div className="bg-white p-2 rounded-lg border border-sky-200 shadow-2xs text-sky-700 shrink-0 mt-0.5">
        <ShieldAlert className="w-5 h-5 text-sky-600" />
      </div>
      <div className="text-sm leading-relaxed">
        <p className="font-semibold text-slate-900 flex items-center gap-2">
          <span>Important Academic Notice & Disclaimer</span>
          <span className="text-[11px] font-medium bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full border border-sky-200">
            Exam Prep Guidelines
          </span>
        </p>
        <p className="text-slate-600 mt-0.5">
          Predictions, repeated frequencies, and topic weightages provided by <strong>Question Paper Assistant AI</strong> are strictly calculated using statistical patterns from previous-year university examination papers. They are intended as an intelligent preparation guide and <strong>do not guarantee</strong> the questions that will appear in your upcoming exam. Always cover your university's complete syllabus.
        </p>
      </div>
    </div>
  );
};
