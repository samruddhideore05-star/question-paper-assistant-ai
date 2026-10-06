import React from 'react';
import {
  PieChart,
  BarChart2,
  TrendingUp,
  Clock,
  Award,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';
import { FullAgentAnalysis } from '../types/analysis';
import { DisclaimerBanner } from '../components/DisclaimerBanner';

interface PatternAnalysisSectionProps {
  analysis: FullAgentAnalysis;
  onAskInChat: (prompt: string) => void;
}

export const PatternAnalysisSection: React.FC<PatternAnalysisSectionProps> = ({
  analysis,
  onAskInChat,
}) => {
  const pattern = analysis.patternAnalysis;

  return (
    <div className="space-y-6 pb-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
              Section 6
            </span>
            <span className="text-xs text-slate-500">Structural Blueprint Mining</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Question Pattern Analysis
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Statistical breakdown of marks distribution, short vs long ratio, theory vs numerical weightage, and yearly trends.
          </p>
        </div>

        <button
          onClick={() => onAskInChat('Explain the examination question paper pattern and how marks are distributed across sections.')}
          className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-blue-600 text-white rounded-xl shadow-xs hover:bg-blue-700 transition-colors self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ask AI About Exam Pattern</span>
        </button>
      </div>

      <DisclaimerBanner compact />

      {/* Blueprint Overview Bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Exam Structure</span>
          <h2 className="text-lg font-extrabold text-slate-900 mt-0.5">
            {analysis.subject} Blueprint
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
          <div className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>Duration: {pattern.durationHours}</span>
          </div>
          <div className="bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Total Marks: {pattern.totalMarks} Marks</span>
          </div>
        </div>
      </div>

      {/* 2 Ratios Grid: Short vs Long & Theory vs Numerical */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Short Answer vs Long Answer Ratio */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">
              Short-Answer vs Long-Answer Ratio
            </h3>
            <span className="text-xs font-bold text-blue-700">
              {pattern.shortVsLongRatio.shortAnswerPercent}% : {pattern.shortVsLongRatio.longAnswerPercent}%
            </span>
          </div>

          {/* Visual Bar */}
          <div className="w-full bg-slate-100 rounded-full h-3 flex overflow-hidden">
            <div
              className="bg-sky-500 h-full"
              style={{ width: `${pattern.shortVsLongRatio.shortAnswerPercent}%` }}
              title={`Short Answer: ${pattern.shortVsLongRatio.shortAnswerPercent}%`}
            />
            <div
              className="bg-blue-600 h-full"
              style={{ width: `${pattern.shortVsLongRatio.longAnswerPercent}%` }}
              title={`Long Answer: ${pattern.shortVsLongRatio.longAnswerPercent}%`}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>Short Answers (Part A 2M): {pattern.shortVsLongRatio.shortAnswerPercent}%</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Descriptive / Long (Part B & C): {pattern.shortVsLongRatio.longAnswerPercent}%</span>
            </span>
          </div>

          <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            {pattern.shortVsLongRatio.explanation}
          </p>
        </div>

        {/* Theory vs Numerical / Problem-based Ratio */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">
              Theory vs Numerical / Problem-Based Ratio
            </h3>
            <span className="text-xs font-bold text-emerald-700">
              {pattern.theoryVsNumericalRatio.theoryPercent}% : {pattern.theoryVsNumericalRatio.numericalProblemPercent}%
            </span>
          </div>

          {/* Visual Bar */}
          <div className="w-full bg-slate-100 rounded-full h-3 flex overflow-hidden">
            <div
              className="bg-emerald-600 h-full"
              style={{ width: `${pattern.theoryVsNumericalRatio.theoryPercent}%` }}
              title={`Theory: ${pattern.theoryVsNumericalRatio.theoryPercent}%`}
            />
            <div
              className="bg-indigo-600 h-full"
              style={{ width: `${pattern.theoryVsNumericalRatio.numericalProblemPercent}%` }}
              title={`Numerical / SQL: ${pattern.theoryVsNumericalRatio.numericalProblemPercent}%`}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Theory & Architecture: {pattern.theoryVsNumericalRatio.theoryPercent}%</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>Numerical Problems & SQL: {pattern.theoryVsNumericalRatio.numericalProblemPercent}%</span>
            </span>
          </div>

          <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            {pattern.theoryVsNumericalRatio.explanation}
          </p>
        </div>

      </div>

      {/* Frequently Asked Units & Marks Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Frequently Asked Units */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Frequently Asked Units / Modules</span>
          </h3>

          <div className="space-y-3 pt-1">
            {pattern.frequentlyAskedUnits.map((u, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-800">{u.unit}</span>
                  <span className="text-blue-700 font-bold">{u.percentage}% ({u.questionCount} Questions)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${u.percentage * 2.5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marks Distribution Breakdown */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Marks Distribution in Question Papers</span>
          </h3>

          <div className="space-y-3 pt-1">
            {pattern.marksDistribution.map((m, idx) => (
              <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900">{m.marksLabel}</p>
                  <p className="text-[11px] text-slate-500">{m.count} Total Questions recorded across papers</p>
                </div>
                <span className="font-black text-blue-700 bg-white border border-slate-200 px-3 py-1 rounded-lg">
                  {m.percentage}% Total Marks
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Yearly Trend Changes, Consistent vs Rare Topics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Trend Changes */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span>Changes Across Exam Years</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600">
            {pattern.yearlyTrendChanges.map((t, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="text-blue-600 font-bold">•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Topics that appear consistently */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3">
          <h3 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Topics That Appear Consistently</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {pattern.consistentTopics.map((c, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-emerald-50/60 p-2 rounded-xl border border-emerald-100">
                <span className="text-emerald-600 font-bold">✓</span>
                <span className="font-medium">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Topics that appear rarely */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3">
          <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>Topics That Appear Rarely</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {pattern.rarelyAppearingTopics.map((r, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-amber-50/50 p-2 rounded-xl border border-amber-100">
                <span className="text-amber-600 font-bold">!</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Limitations Notice as requested in spec */}
      {pattern.limitationsNotice && (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p>
            <strong>Note on Pattern Analysis:</strong> {pattern.limitationsNotice}
          </p>
        </div>
      )}

    </div>
  );
};
