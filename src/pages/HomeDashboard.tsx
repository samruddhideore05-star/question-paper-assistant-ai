import React from 'react';
import {
  FileText,
  HelpCircle,
  Repeat,
  Layers,
  Sparkles,
  Award,
  CalendarDays,
  MessageSquare,
  Upload,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Trash2,
  BookOpen
} from 'lucide-react';
import { FullAgentAnalysis, UploadedPaper } from '../types/analysis';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { AppSection } from '../components/AppNavigation';

interface HomeDashboardProps {
  analysis: FullAgentAnalysis;
  papers: UploadedPaper[];
  onNavigate: (section: AppSection) => void;
  onClearPapers: () => void;
  onStartAnalysis: () => void;
  isAnalyzing: boolean;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  analysis,
  papers,
  onNavigate,
  onClearPapers,
  onStartAnalysis,
  isAnalyzing,
}) => {
  const exactRepeatedCount = analysis.repeatedQuestions.filter(
    (q) => q.matchType === 'Exact Repeated'
  ).length;
  const similarCount = analysis.repeatedQuestions.filter(
    (q) => q.matchType === 'Similar / Rephrased'
  ).length;
  const highPriorityCount = analysis.likelyImportantQuestions.filter(
    (q) => q.priority === 'HIGH PRIORITY'
  ).length;
  const mostFrequentTopic = analysis.importantTopics[0];

  return (
    <div className="space-y-8 pb-16">
      
      {/* Hero Welcome & Title */}
      <div className="bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-white border border-blue-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 text-blue-800 text-xs font-bold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Question Paper Assistant AI Agent • Final Year Project</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Exam Preparation Intelligence Agent
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Analyzes previous-year examination question papers to uncover repeated questions, extract question patterns, generate pattern-grounded predictions, and build your personalized 7-day study plan.
            </p>
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => onNavigate('upload')}
              className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl shadow-2xs transition-all"
            >
              <Upload className="w-3.5 h-3.5 text-blue-600" />
              <span>Upload Papers</span>
            </button>

            <button
              onClick={onStartAnalysis}
              disabled={isAnalyzing || papers.length === 0}
              className={`flex items-center gap-2 font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-all ${
                isAnalyzing || papers.length === 0
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
              }`}
            >
              {isAnalyzing ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Analyzing Papers...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Analyze Papers</span>
                </>
              )}
            </button>

            {papers.length > 0 && (
              <button
                onClick={onClearPapers}
                className="p-2.5 rounded-xl border border-slate-200 hover:bg-red-50 hover:text-red-600 text-slate-400 transition-colors"
                title="Clear all uploaded papers"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <DisclaimerBanner />

      {/* 7 Metric Cards Required by User */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
        
        {/* 1. Papers Uploaded */}
        <div
          onClick={() => onNavigate('upload')}
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs hover:border-blue-400 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Papers</span>
            <FileText className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{analysis.totalPapers}</div>
          <p className="text-[10px] text-slate-500 mt-1">Uploaded</p>
        </div>

        {/* 2. Total Questions */}
        <div
          onClick={() => onNavigate('paper-analysis')}
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs hover:border-blue-400 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Qs</span>
            <HelpCircle className="w-4 h-4 text-sky-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{analysis.totalQuestionsExtracted}</div>
          <p className="text-[10px] text-slate-500 mt-1">Extracted</p>
        </div>

        {/* 3. Repeated Questions */}
        <div
          onClick={() => onNavigate('repeated-questions')}
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs hover:border-blue-400 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Exact Repeats</span>
            <Repeat className="w-4 h-4 text-blue-700" />
          </div>
          <div className="text-2xl font-black text-blue-700">{exactRepeatedCount}</div>
          <p className="text-[10px] text-blue-600 font-semibold mt-1">Verbatim</p>
        </div>

        {/* 4. Similar Questions */}
        <div
          onClick={() => onNavigate('repeated-questions')}
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs hover:border-blue-400 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Similar Qs</span>
            <Layers className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{similarCount}</div>
          <p className="text-[10px] text-slate-500 mt-1">Rephrased</p>
        </div>

        {/* 5. Important Topics */}
        <div
          onClick={() => onNavigate('important-topics')}
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs hover:border-blue-400 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Topics</span>
            <TrendingUp className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{analysis.importantTopics.length}</div>
          <p className="text-[10px] text-slate-500 mt-1">Ranked</p>
        </div>

        {/* 6. Most Frequent Topic */}
        <div
          onClick={() => onNavigate('important-topics')}
          className="bg-white rounded-2xl p-4 border border-blue-200 bg-blue-50/30 shadow-2xs hover:border-blue-400 transition-all cursor-pointer group col-span-2 sm:col-span-1"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Top Topic</span>
            <Award className="w-4 h-4 text-blue-700" />
          </div>
          <div className="text-sm font-extrabold text-blue-900 truncate">
            {mostFrequentTopic ? mostFrequentTopic.topic.split(' ')[0] : 'Transactions'}
          </div>
          <p className="text-[10px] text-blue-600 mt-1 font-semibold">
            {mostFrequentTopic?.frequency || 14} Occurrences
          </p>
        </div>

        {/* 7. High Priority Questions */}
        <div
          onClick={() => onNavigate('likely-questions')}
          className="bg-white rounded-2xl p-4 border border-red-200 bg-red-50/20 shadow-2xs hover:border-red-400 transition-all cursor-pointer group col-span-2 sm:col-span-1"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider">High Priority</span>
            <Sparkles className="w-4 h-4 text-red-600" />
          </div>
          <div className="text-2xl font-black text-red-700">{highPriorityCount}</div>
          <p className="text-[10px] text-red-600 font-semibold mt-1">Must Prepare</p>
        </div>

      </div>

      {/* Main Workflow Visualization as specified in user requirement */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <span>AI Agent Workflow Pipeline</span>
          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
            Automated Student Path
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          
          <button
            onClick={() => onNavigate('upload')}
            className="flex flex-col items-center text-center p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all"
          >
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-1.5">
              1
            </span>
            <span className="text-xs font-bold text-slate-800">UPLOAD PAPERS</span>
            <span className="text-[10px] text-slate-400 mt-0.5">PDF Documents</span>
          </button>

          <button
            onClick={onStartAnalysis}
            className="flex flex-col items-center text-center p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all"
          >
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-1.5">
              2
            </span>
            <span className="text-xs font-bold text-slate-800">ANALYZE PAPERS</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Gemini Extraction</span>
          </button>

          <button
            onClick={() => onNavigate('paper-analysis')}
            className="flex flex-col items-center text-center p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all"
          >
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-1.5">
              3
            </span>
            <span className="text-xs font-bold text-slate-800">VIEW ANALYSIS</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Frequency & Units</span>
          </button>

          <button
            onClick={() => onNavigate('likely-questions')}
            className="flex flex-col items-center text-center p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all"
          >
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-1.5">
              4
            </span>
            <span className="text-xs font-bold text-slate-800">IMPORTANT Qs</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Ranked by Priority</span>
          </button>

          <button
            onClick={() => onNavigate('study-plan')}
            className="flex flex-col items-center text-center p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all"
          >
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-1.5">
              5
            </span>
            <span className="text-xs font-bold text-slate-800">STUDY PLAN</span>
            <span className="text-[10px] text-slate-400 mt-0.5">7-Day Prep Guide</span>
          </button>

          <button
            onClick={() => onNavigate('ai-chat')}
            className="flex flex-col items-center text-center p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all"
          >
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mb-1.5">
              6
            </span>
            <span className="text-xs font-bold text-slate-800">CHAT WITH AI</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Ask Anything</span>
          </button>

        </div>
      </div>

      {/* Two Column Section: Top Repeated Questions & Frequent Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Top Repeated Questions */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Repeat className="w-4 h-4 text-blue-600" />
                <span>Most Repeated Examination Questions</span>
              </h3>
              <p className="text-[11px] text-slate-500">
                Verbatim & rephrased questions sorted by appearance frequency
              </p>
            </div>
            <button
              onClick={() => onNavigate('repeated-questions')}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              View All ({analysis.repeatedQuestions.length}) →
            </button>
          </div>

          <div className="space-y-3">
            {analysis.repeatedQuestions.slice(0, 4).map((q) => (
              <div
                key={q.id}
                className="bg-slate-50 hover:bg-blue-50/40 p-3 rounded-xl border border-slate-200 text-xs space-y-2 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-slate-900 line-clamp-2">
                    {q.question}
                  </p>
                  <span className="shrink-0 bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full text-[10px]">
                    {q.frequency}x Repeated
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded font-medium text-slate-700">
                    {q.unit}
                  </span>
                  <span className="text-blue-700 font-semibold">
                    Years: {q.years.join(', ')}
                  </span>
                  <span className="text-slate-500">
                    {q.matchType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Frequently Asked Topics */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span>Frequently Asked Topics Ranking</span>
              </h3>
              <p className="text-[11px] text-slate-500">
                Ranked by examination marks and occurrence rate
              </p>
            </div>
            <button
              onClick={() => onNavigate('important-topics')}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              All Topics ({analysis.importantTopics.length}) →
            </button>
          </div>

          <div className="space-y-4">
            {analysis.importantTopics.slice(0, 5).map((topic, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 truncate max-w-xs">
                    {idx + 1}. {topic.topic}
                  </span>
                  <span className="font-bold text-blue-700 shrink-0">
                    {topic.weightagePercentage}% (~{topic.frequency}x)
                  </span>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(topic.weightagePercentage * 3.5, 100)}%` }}
                  />
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <span>{topic.unit}</span>
                  <span>•</span>
                  <span>{topic.relatedQuestionsCount} related questions</span>
                  <span>•</span>
                  <span className="font-semibold text-blue-700">{topic.priority}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quick Navigation Cards to Remaining Sections */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div
          onClick={() => onNavigate('pattern-analysis')}
          className="bg-white hover:bg-blue-50/30 border border-slate-200 hover:border-blue-400 p-4 rounded-2xl cursor-pointer transition-all shadow-2xs group"
        >
          <h4 className="font-bold text-slate-900 text-xs flex items-center justify-between">
            <span>6. Pattern Analysis</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
          </h4>
          <p className="text-[11px] text-slate-500 mt-1">
            Short vs long answer ratios, theory vs numerical problems, and marks blueprints.
          </p>
        </div>

        <div
          onClick={() => onNavigate('likely-questions')}
          className="bg-white hover:bg-blue-50/30 border border-slate-200 hover:border-blue-400 p-4 rounded-2xl cursor-pointer transition-all shadow-2xs group"
        >
          <h4 className="font-bold text-slate-900 text-xs flex items-center justify-between">
            <span>7. Likely Questions</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
          </h4>
          <p className="text-[11px] text-slate-500 mt-1">
            High, Medium, and Low Priority questions with model answer key points.
          </p>
        </div>

        <div
          onClick={() => onNavigate('study-plan')}
          className="bg-white hover:bg-blue-50/30 border border-slate-200 hover:border-blue-400 p-4 rounded-2xl cursor-pointer transition-all shadow-2xs group"
        >
          <h4 className="font-bold text-slate-900 text-xs flex items-center justify-between">
            <span>8. 7-Day Study Plan</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
          </h4>
          <p className="text-[11px] text-slate-500 mt-1">
            Personalized daily preparation schedule with time estimates and revision drills.
          </p>
        </div>

        <div
          onClick={() => onNavigate('ai-chat')}
          className="bg-white hover:bg-blue-50/30 border border-slate-200 hover:border-blue-400 p-4 rounded-2xl cursor-pointer transition-all shadow-2xs group"
        >
          <h4 className="font-bold text-slate-900 text-xs flex items-center justify-between">
            <span>9. AI Chat Assistant</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
          </h4>
          <p className="text-[11px] text-slate-500 mt-1">
            Ask any question about your papers in simple student-friendly English.
          </p>
        </div>

      </div>

    </div>
  );
};
