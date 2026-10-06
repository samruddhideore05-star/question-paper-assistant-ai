import React, { useState } from 'react';
import {
  Sparkles,
  TrendingUp,
  Filter,
  Search,
  BookOpen,
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';
import { FullAgentAnalysis, TopicItem } from '../types/analysis';
import { DisclaimerBanner } from '../components/DisclaimerBanner';

interface ImportantTopicsSectionProps {
  analysis: FullAgentAnalysis;
  onAskInChat: (prompt: string) => void;
}

export const ImportantTopicsSection: React.FC<ImportantTopicsSectionProps> = ({
  analysis,
  onAskInChat,
}) => {
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = analysis.importantTopics.filter((t) => {
    const matchesPriority =
      selectedPriority === 'all' || t.priority === selectedPriority;
    const matchesSearch =
      t.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.unit.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPriority && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
              Section 5
            </span>
            <span className="text-xs text-slate-500">Occurrence Frequency Ranking</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Important Topics
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Topics systematically ranked by real occurrence frequency in the uploaded question papers.
          </p>
        </div>

        <button
          onClick={() => onAskInChat('Which topics in the uploaded papers have the highest priority and what should I study first?')}
          className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-blue-600 text-white rounded-xl shadow-xs hover:bg-blue-700 transition-colors self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ask AI About Topics</span>
        </button>
      </div>

      <DisclaimerBanner compact />

      {/* Filter and Search Bar */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search topic or unit (e.g. Transactions, Normalization, B+ Tree)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400 font-semibold">Priority:</span>
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 outline-none focus:border-blue-500"
          >
            <option value="all">All Priorities ({analysis.importantTopics.length})</option>
            <option value="HIGH PRIORITY">HIGH PRIORITY</option>
            <option value="MEDIUM PRIORITY">MEDIUM PRIORITY</option>
            <option value="LOW PRIORITY">LOW PRIORITY</option>
          </select>
        </div>
      </div>

      {/* Topics Ranking Table as required by User */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Ranked Topics Table ({filteredTopics.length})
          </h2>
          <span className="text-[11px] text-slate-500">
            Source: Grounded in Uploaded Question Papers
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-bold uppercase text-[10px] tracking-wider">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Topic</th>
                <th className="py-3 px-4 text-center">Frequency</th>
                <th className="py-3 px-4">Years / Papers</th>
                <th className="py-3 px-4 text-center">Related Questions</th>
                <th className="py-3 px-4 text-center">Priority</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTopics.map((topic, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-400 whitespace-nowrap">
                    #{idx + 1}
                  </td>
                  <td className="py-3.5 px-4 max-w-sm">
                    <p className="font-extrabold text-slate-900 text-xs">{topic.topic}</p>
                    <span className="inline-block text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded mt-0.5">
                      {topic.unit}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1 text-[10px] text-slate-400">
                      {topic.subtopics.slice(0, 3).map((sub, sIdx) => (
                        <span key={sIdx} className="bg-slate-50 border border-slate-200 px-1 rounded text-slate-600">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <span className="font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full text-xs">
                      {topic.frequency} appearances
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap font-medium text-slate-700">
                    {topic.years.join(', ')}
                  </td>
                  <td className="py-3.5 px-4 text-center whitespace-nowrap font-bold text-slate-800">
                    {topic.relatedQuestionsCount} Questions
                  </td>
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <span
                      className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                        topic.priority === 'HIGH PRIORITY'
                          ? 'bg-red-100 text-red-800'
                          : topic.priority === 'MEDIUM PRIORITY'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {topic.priority}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <button
                      onClick={() => onAskInChat(`Give me all exam questions that appeared for the topic: "${topic.topic}"`)}
                      className="text-xs text-blue-600 hover:text-blue-800 font-bold hover:underline"
                    >
                      Ask AI →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
