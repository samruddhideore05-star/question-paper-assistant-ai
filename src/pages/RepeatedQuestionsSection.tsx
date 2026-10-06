import React, { useState } from 'react';
import {
  Repeat,
  Layers,
  Filter,
  Search,
  Sparkles,
  Calendar,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { FullAgentAnalysis, RepeatedQuestionItem } from '../types/analysis';
import { DisclaimerBanner } from '../components/DisclaimerBanner';

interface RepeatedQuestionsSectionProps {
  analysis: FullAgentAnalysis;
  onAskInChat: (prompt: string) => void;
}

export const RepeatedQuestionsSection: React.FC<RepeatedQuestionsSectionProps> = ({
  analysis,
  onAskInChat,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'exact' | 'similar'>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredQuestions = analysis.repeatedQuestions.filter((q) => {
    const matchesType =
      filterType === 'all' ||
      (filterType === 'exact' && q.matchType === 'Exact Repeated') ||
      (filterType === 'similar' && q.matchType === 'Similar / Rephrased');
    const matchesPriority =
      filterPriority === 'all' || q.priority === filterPriority;
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesPriority && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
              Section 4
            </span>
            <span className="text-xs text-slate-500">Cross-Year Comparative Detection</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Repeated Questions Analysis
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Identify questions that appeared repeatedly across past exams, distinguishing exact verbatim repeats from rephrased variants.
          </p>
        </div>

        <button
          onClick={() => onAskInChat('List all questions that appeared in 3 or more exam papers and explain why they are repeated.')}
          className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-blue-600 text-white rounded-xl shadow-xs hover:bg-blue-700 transition-colors self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ask AI About Repeated Questions</span>
        </button>
      </div>

      <DisclaimerBanner compact />

      {/* Filter and Search Bar */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search repeated questions by keyword (e.g. ACID, 2PL, BCNF)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {/* Match type pills */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setFilterType('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                filterType === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
              }`}
            >
              All ({analysis.repeatedQuestions.length})
            </button>
            <button
              onClick={() => setFilterType('exact')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                filterType === 'exact' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600'
              }`}
            >
              Exact Repeats
            </button>
            <button
              onClick={() => setFilterType('similar')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                filterType === 'similar' ? 'bg-white text-indigo-700 shadow-2xs' : 'text-slate-600'
              }`}
            >
              Similar / Rephrased
            </button>
          </div>

          {/* Priority dropdown */}
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 outline-none focus:border-blue-500"
          >
            <option value="all">All Priorities</option>
            <option value="HIGH">HIGH Priority</option>
            <option value="MEDIUM">MEDIUM Priority</option>
            <option value="LOW">LOW Priority</option>
          </select>
        </div>
      </div>

      {/* Repeated Questions Table Required by User */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Repeated Questions Frequency Table ({filteredQuestions.length})
          </h2>
          <span className="text-[11px] text-slate-500">
            Grounding: Historical Examination Papers
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-bold uppercase text-[10px] tracking-wider">
                <th className="py-3 px-4">Question</th>
                <th className="py-3 px-4 text-center">Frequency</th>
                <th className="py-3 px-4">Years / Papers</th>
                <th className="py-3 px-4">Topic / Unit</th>
                <th className="py-3 px-4 text-center">Type</th>
                <th className="py-3 px-4 text-center">Priority</th>
                <th className="py-3 px-4 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredQuestions.map((q) => {
                const isExpanded = expandedId === q.id;

                return (
                  <React.Fragment key={q.id}>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-900 max-w-sm">
                        {q.question}
                      </td>
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <span className="bg-blue-100 text-blue-800 font-extrabold px-2.5 py-1 rounded-full text-xs">
                          {q.frequency} times
                        </span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap font-medium text-slate-700">
                        {q.years.join(', ')}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="font-bold text-slate-800">{q.topic}</span>
                        <span className="block text-[10px] text-slate-400">{q.unit}</span>
                      </td>
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            q.matchType === 'Exact Repeated'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          }`}
                        >
                          {q.matchType}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <span
                          className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                            q.priority === 'HIGH'
                              ? 'bg-red-100 text-red-800'
                              : q.priority === 'MEDIUM'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {q.priority}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : q.id)}
                          className="text-xs text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1"
                        >
                          <span>{isExpanded ? 'Hide' : 'Variations'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </td>
                    </tr>

                    {/* Expandable Variations Row */}
                    {isExpanded && (
                      <tr className="bg-blue-50/30">
                        <td colSpan={7} className="p-4 space-y-2 text-xs border-b border-blue-100">
                          <p className="font-bold text-slate-800">
                            Detection Analysis & Rephrased Variations in Papers:
                          </p>
                          <p className="text-slate-600 text-[11px] leading-relaxed">
                            {q.explanation}
                          </p>
                          {q.variations && q.variations.length > 0 && (
                            <div className="space-y-1 pt-1">
                              <span className="text-[10px] font-bold text-slate-400 uppercase">
                                Recorded phrasings across exam sessions:
                              </span>
                              <ul className="space-y-1 text-[11px] text-slate-700 pl-2">
                                {q.variations.map((v, vIdx) => (
                                  <li key={vIdx} className="flex items-start gap-1.5">
                                    <span className="text-blue-600 font-bold">•</span>
                                    <span>{v}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
