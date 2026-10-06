import React, { useState } from 'react';
import {
  FileText,
  Search,
  Filter,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Award,
  HelpCircle
} from 'lucide-react';
import { FullAgentAnalysis, ExtractedQuestion } from '../types/analysis';
import { DisclaimerBanner } from '../components/DisclaimerBanner';

interface PaperAnalysisSectionProps {
  analysis: FullAgentAnalysis;
  onAskInChat: (prompt: string) => void;
}

export const PaperAnalysisSection: React.FC<PaperAnalysisSectionProps> = ({
  analysis,
  onAskInChat,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredQuestions = analysis.extractedQuestions.filter((q) => {
    const matchesSearch =
      q.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (q.topic && q.topic.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesUnit = selectedUnit === 'all' || (q.unit && q.unit.includes(selectedUnit));
    const matchesType = selectedType === 'all' || q.questionType === selectedType;
    return matchesSearch && matchesUnit && matchesType;
  });

  return (
    <div className="space-y-6 pb-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
              Section 3
            </span>
            <span className="text-xs text-slate-500">
              Question Extraction & Grounding
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Paper Analysis & Question Extraction
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Every question individually extracted from {analysis.totalPapers} uploaded examination papers with verified source metadata.
          </p>
        </div>

        <button
          onClick={() => onAskInChat('Explain all questions extracted from the uploaded papers and which ones belong to Unit 2 and 3.')}
          className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Ask AI About Extracted Questions</span>
        </button>
      </div>

      <DisclaimerBanner compact />

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Exam Subject</span>
          <h3 className="font-bold text-slate-900 text-sm mt-1">{analysis.subject}</h3>
          <p className="text-[11px] text-slate-500 mt-0.5">{analysis.paperNames.join(' • ')}</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Questions Extracted</span>
          <h3 className="text-2xl font-black text-slate-900 mt-1">{analysis.totalQuestionsExtracted}</h3>
          <p className="text-[11px] text-slate-500 mt-0.5">Parsed with verified question numbers</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Extraction Grounding Rule</span>
          <h3 className="font-bold text-emerald-800 text-sm mt-1 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Strict Paper Grounding</span>
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">No questions or frequencies were invented</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search extracted questions by keyword, topic, or question text..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            className="text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 outline-none focus:border-blue-500"
          >
            <option value="all">All Units</option>
            <option value="Unit I">Unit I</option>
            <option value="Unit II">Unit II</option>
            <option value="Unit III">Unit III</option>
            <option value="Unit IV">Unit IV</option>
            <option value="Unit V">Unit V</option>
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 outline-none focus:border-blue-500"
          >
            <option value="all">All Question Types</option>
            <option value="Theory">Theory</option>
            <option value="Numerical">Numerical / SQL</option>
            <option value="Definition">Definition (2M)</option>
            <option value="Design/Diagram">Design / Diagram</option>
          </select>
        </div>
      </div>

      {/* Extracted Questions Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Verified Extracted Questions ({filteredQuestions.length})
          </h2>
          <span className="text-[11px] text-slate-500">
            Source: Uploaded PDF Examination Papers
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-bold uppercase text-[10px] tracking-wider">
                <th className="py-3 px-4">Q.No</th>
                <th className="py-3 px-4">Question Text</th>
                <th className="py-3 px-4">Topic / Unit</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Marks</th>
                <th className="py-3 px-4">Exam Year(s)</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredQuestions.map((q) => (
                <tr key={q.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                    {q.questionNumber}
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 font-medium max-w-md">
                    {q.questionText}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="font-semibold text-slate-700">{q.topic || 'General'}</span>
                    <span className="block text-[10px] text-slate-400">{q.unit || 'Syllabus'}</span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-semibold">
                      {q.questionType || 'Theory'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap font-bold text-blue-700">
                    {q.marks ? `${q.marks} Marks` : 'N/A'}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap text-slate-600 font-medium">
                    {q.year}
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <button
                      onClick={() => onAskInChat(`Explain how to write a full scoring answer for: "${q.questionText}"`)}
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
