import React from 'react';
import {
  CalendarDays,
  Clock,
  CheckCircle2,
  Sparkles,
  Printer,
  BookOpen,
  ArrowRight,
  ListTodo,
  Layers
} from 'lucide-react';
import { FullAgentAnalysis, StudyPlanDay } from '../types/analysis';
import { DisclaimerBanner } from '../components/DisclaimerBanner';

interface StudyPlanSectionProps {
  analysis: FullAgentAnalysis;
  onAskInChat: (prompt: string) => void;
}

export const StudyPlanSection: React.FC<StudyPlanSectionProps> = ({
  analysis,
  onAskInChat,
}) => {
  const plan = analysis.studyPlan;

  return (
    <div className="space-y-6 pb-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
              Section 8
            </span>
            <span className="text-xs text-slate-500">Personalized Preparation Roadmap</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            7-Day Exam Study Plan
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            A balanced 7-day preparation strategy giving highest time allocation to historically frequent units and questions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print Study Plan</span>
          </button>
        </div>
      </div>

      <DisclaimerBanner />

      {/* Plan Strategy Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-white border border-blue-200 rounded-2xl p-5 shadow-2xs space-y-2">
        <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Preparation Strategy & Weightage Allocation</span>
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Days 1 through 3 are dedicated to <strong>Unit III (Transaction Management & Concurrency Control)</strong> and <strong>Unit V (Recovery)</strong> which together yield over 47 marks. Days 4 and 5 cover Relational Normalization and Indexing, while Days 6 and 7 consolidate Architecture diagrams, Part A definitions, and full mock simulations.
        </p>
      </div>

      {/* 7 Days Cards */}
      <div className="space-y-4">
        {plan.map((day) => {
          const priorityBadge =
            day.suggestedPriority === 'HIGH PRIORITY'
              ? 'bg-red-100 text-red-800 border-red-200'
              : day.suggestedPriority === 'MEDIUM PRIORITY'
              ? 'bg-amber-100 text-amber-800 border-amber-200'
              : 'bg-blue-100 text-blue-800 border-blue-200';

          return (
            <div
              key={day.day}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-blue-300 transition-all space-y-4"
            >
              {/* Day Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-sm shadow-xs">
                    D{day.day}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase text-slate-400">
                        {day.unitFocus}
                      </span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${priorityBadge}`}>
                        {day.suggestedPriority}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base mt-0.5">
                      Day {day.day}: {day.dayTitle}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Est. Time: {day.estimatedHours} Hours</span>
                  </span>
                  <button
                    onClick={() => onAskInChat(`Give me a detailed hour-by-hour schedule for Day ${day.day} studying ${day.unitFocus}`)}
                    className="text-blue-600 hover:text-blue-800 font-bold hover:underline"
                  >
                    Ask AI Drill →
                  </button>
                </div>
              </div>

              {/* Topics to Study */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-600 uppercase flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>Topics to Study:</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {day.topicsToStudy.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-800"
                    >
                      • {topic}
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Questions for this Day */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-600 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Important Questions to Practice:</span>
                </span>
                <div className="space-y-1.5">
                  {day.importantQuestions.map((q, qIdx) => (
                    <div
                      key={qIdx}
                      className="bg-blue-50/40 border border-blue-100 rounded-xl p-2.5 text-xs text-slate-800 font-semibold flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revision Task */}
              <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-3 text-xs flex items-start gap-2 text-slate-800">
                <span className="text-amber-700 font-black text-sm shrink-0">📝</span>
                <div>
                  <strong className="text-amber-950">Daily Revision Task: </strong>
                  <span>{day.revisionTask}</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
