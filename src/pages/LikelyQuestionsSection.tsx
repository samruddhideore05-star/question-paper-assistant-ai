import React, { useState } from 'react';
import {
  HelpCircle,
  Sparkles,
  Filter,
  Search,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Award,
  ChevronDown,
  ChevronUp,
  Printer
} from 'lucide-react';
import { FullAgentAnalysis, LikelyQuestionItem } from '../types/analysis';
import { DisclaimerBanner } from '../components/DisclaimerBanner';

interface LikelyQuestionsSectionProps {
  analysis: FullAgentAnalysis;
  onAskInChat: (prompt: string) => void;
}

export const LikelyQuestionsSection: React.FC<LikelyQuestionsSectionProps> = ({
  analysis,
  onAskInChat,
}) => {
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredQuestions = analysis.likelyImportantQuestions.filter((q) => {
    const matchesPriority =
      selectedPriority === 'all' || q.priority === selectedPriority;
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.relatedTopic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPriority && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
              Section 7
            </span>
            <span className="text-xs text-slate-500">Pattern-Based Study Recommendations</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Likely Important Questions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Questions prioritized strictly by recurring patterns and marks allocations across the uploaded examination papers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print Questions</span>
          </button>
        </div>
      </div>

      <DisclaimerBanner />

      {/* Filter and Priority Tabs */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search predicted questions by topic or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setSelectedPriority('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedPriority === 'all'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600'
            }`}
          >
            All ({analysis.likelyImportantQuestions.length})
          </button>

          <button
            onClick={() => setSelectedPriority('HIGH PRIORITY')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedPriority === 'HIGH PRIORITY'
                ? 'bg-red-600 text-white shadow-2xs'
                : 'text-red-700 hover:bg-red-50'
            }`}
          >
            HIGH PRIORITY
          </button>

          <button
            onClick={() => setSelectedPriority('MEDIUM PRIORITY')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedPriority === 'MEDIUM PRIORITY'
                ? 'bg-amber-600 text-white shadow-2xs'
                : 'text-amber-700 hover:bg-amber-50'
            }`}
          >
            MEDIUM PRIORITY
          </button>

          <button
            onClick={() => setSelectedPriority('LOW PRIORITY')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedPriority === 'LOW PRIORITY'
                ? 'bg-slate-700 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            LOW PRIORITY
          </button>
        </div>
      </div>

      {/* Question Cards List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, idx) => {
          const isExpanded = expandedId === q.id || filteredQuestions.length <= 4;
          const priorityBadge =
            q.priority === 'HIGH PRIORITY'
              ? 'bg-red-100 text-red-800 border-red-200'
              : q.priority === 'MEDIUM PRIORITY'
              ? 'bg-amber-100 text-amber-800 border-amber-200'
              : 'bg-slate-100 text-slate-700 border-slate-200';

          return (
            <div
              key={q.id || idx}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${priorityBadge}`}>
                      {q.priority}
                    </span>
                    <span className="bg-slate-100 text-slate-700 font-bold text-[10px] px-2 py-0.5 rounded">
                      {q.unit}
                    </span>
                    <span className="bg-blue-50 text-blue-700 font-bold text-[10px] px-2 py-0.5 rounded border border-blue-200">
                      {q.expectedMarks} Marks
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Topic: <strong>{q.relatedTopic}</strong>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug pt-1">
                    {idx + 1}. {q.question}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-start">
                  <button
                    onClick={() => onAskInChat(`How to write a full scoring model answer for: "${q.question}"?`)}
                    className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Ask AI</span>
                  </button>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : q.id)}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Verified metadata grounding row as required in spec */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2 text-xs flex flex-wrap items-center justify-between gap-2 text-slate-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>Previous Frequency: <strong>{q.previousFrequency} times</strong></span>
                  <span className="text-slate-300">•</span>
                  <span>Years Appeared: <strong>{q.years.join(', ')}</strong></span>
                </div>
                <div className="text-[11px] text-slate-600">
                  <strong className="text-slate-900">Reason:</strong> {q.reasonForPriority}
                </div>
              </div>

              {/* Expandable Key Points & Simple Explanation */}
              {isExpanded && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  
                  {/* Must-Include Key Points in Exam */}
                  <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2">
                    <p className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Must-Include Key Points in Answer Sheet:</span>
                    </p>
                    <ul className="space-y-1 text-xs text-slate-700 pl-2">
                      {q.keyPointsToCover.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Simple Student Explanation */}
                  <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-3.5 space-y-2">
                    <p className="font-bold text-blue-950 text-xs flex items-center gap-1.5">
                      <span>💡</span>
                      <span>Simple Student-Friendly Analogy:</span>
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {q.simpleExplanation}
                    </p>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
