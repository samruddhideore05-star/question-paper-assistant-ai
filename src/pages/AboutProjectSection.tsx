import React from 'react';
import {
  GraduationCap,
  Sparkles,
  FileCheck2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Layers,
  Repeat,
  TrendingUp,
  PieChart,
  CalendarDays,
  MessageSquare,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { DisclaimerBanner } from '../components/DisclaimerBanner';

export const AboutProjectSection: React.FC = () => {
  return (
    <div className="space-y-6 pb-16 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
            Section 10
          </span>
          <span className="text-xs text-slate-500">Project Specifications</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          About Question Paper Assistant AI Agent
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Academic project specification, architecture, and technology stack.
        </p>
      </div>

      <DisclaimerBanner />

      {/* Main Project Details Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-6">
        
        {/* Core Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-100">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Name</span>
            <p className="text-base font-extrabold text-slate-900 mt-1">
              Question Paper Assistant AI Agent
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Type</span>
            <p className="text-base font-extrabold text-blue-700 mt-1">
              AI Agent / Generative AI Application
            </p>
          </div>
        </div>

        {/* Project Purpose */}
        <div className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Project Purpose</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-blue-50/50 p-4 rounded-xl border border-blue-100">
            To help college students analyze previous-year examination papers and prepare more effectively for exams by discovering repeated questions, extracting hidden question patterns, estimating topic likelihoods, and generating actionable daily study plans.
          </p>
        </div>

        {/* Main Features List */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Main Capabilities & Features</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { title: 'PDF Document Analysis', desc: 'Reads multi-page PDF papers, extracts questions with zero data invention.', icon: FileCheck2 },
              { title: 'Question Extraction', desc: 'Isolates question numbers, marks, units, and categories (Theory vs Numerical).', icon: BookOpen },
              { title: 'Repeated Question Detection', desc: 'Finds exact verbatim repeats across exam cycles with historical frequency.', icon: Repeat },
              { title: 'Similar Question Detection', desc: 'Identifies semantic variants when wording differs but the concept is identical.', icon: Layers },
              { title: 'Topic Frequency Analysis', desc: 'Ranks syllabus topics by historical marks allocation and appearance counts.', icon: TrendingUp },
              { title: 'Question Pattern Analysis', desc: 'Computes short vs long answer ratios, theory vs problem weights, and trends.', icon: PieChart },
              { title: 'Important Question Recommendations', desc: 'Prioritizes likely questions into High, Medium, and Low Priority tiers.', icon: HelpCircle },
              { title: 'AI Chat Assistant', desc: 'Real-time conversational mentor answering questions grounded in uploaded papers.', icon: MessageSquare },
              { title: 'Study Plan Generation', desc: 'Creates a personalized 7-day preparation roadmap with daily revision drills.', icon: CalendarDays },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs">
                    <Icon className="w-4 h-4" />
                    <span>{feature.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Architecture */}
        <div className="space-y-3 pt-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span>Technical Architecture & Grounding Protocol</span>
          </h2>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700 leading-relaxed">
            <p>
              • <strong>AI Processing:</strong> Google Gemini 3.8 Flash multimodal reasoning model running via secure server-side SDK.
            </p>
            <p>
              • <strong>Frontend:</strong> React 19 SPA, Tailwind CSS v4, Lucide Icons, and accessible responsive layouts.
            </p>
            <p>
              • <strong>Backend:</strong> Express full-stack engine with Vite middleware integration and resilient fallback synthesis.
            </p>
            <p>
              • <strong>Data Grounding Guarantee:</strong> Strictly separates verified paper facts from AI recommendations. If information is unavailable in the uploaded documents, the AI explicitly states: <em>"Not enough information was found in the uploaded papers."</em>
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
