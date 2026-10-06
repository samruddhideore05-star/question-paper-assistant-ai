import React from 'react';
import {
  LayoutDashboard,
  Upload,
  BarChart3,
  Repeat,
  Sparkles,
  PieChart,
  HelpCircle,
  CalendarDays,
  MessageSquare,
  Info,
  GraduationCap,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export type AppSection =
  | 'dashboard'
  | 'upload'
  | 'paper-analysis'
  | 'repeated-questions'
  | 'important-topics'
  | 'pattern-analysis'
  | 'likely-questions'
  | 'study-plan'
  | 'ai-chat'
  | 'about-project';

interface AppNavigationProps {
  currentSection: AppSection;
  onSelectSection: (section: AppSection) => void;
  papersCount: number;
  isAnalyzing: boolean;
  onTriggerAnalysis: () => void;
}

export const NAV_ITEMS: { id: AppSection; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string }[] = [
  { id: 'dashboard', label: '1. Home / Dashboard', icon: LayoutDashboard },
  { id: 'upload', label: '2. Upload Question Papers', icon: Upload },
  { id: 'paper-analysis', label: '3. Paper Analysis', icon: BarChart3 },
  { id: 'repeated-questions', label: '4. Repeated Questions', icon: Repeat },
  { id: 'important-topics', label: '5. Important Topics', icon: Sparkles },
  { id: 'pattern-analysis', label: '6. Pattern Analysis', icon: PieChart },
  { id: 'likely-questions', label: '7. Likely Questions', icon: HelpCircle },
  { id: 'study-plan', label: '8. 7-Day Study Plan', icon: CalendarDays },
  { id: 'ai-chat', label: '9. AI Chat Assistant', icon: MessageSquare },
  { id: 'about-project', label: '10. About Project', icon: Info },
];

export const AppNavigation: React.FC<AppNavigationProps> = ({
  currentSection,
  onSelectSection,
  papersCount,
  isAnalyzing,
  onTriggerAnalysis,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Top Mobile Navbar */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm font-extrabold text-slate-900 leading-tight">
              Question Paper AI Agent
            </h1>
            <p className="text-[10px] text-slate-500 font-medium">Exam Prep Assistant</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onTriggerAnalysis}
            disabled={isAnalyzing}
            className="text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-blue-600 text-white shadow-2xs flex items-center gap-1"
          >
            {isAnalyzing ? (
              <span className="animate-spin text-xs">⏳</span>
            ) : (
              <span>Analyze</span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-xs bg-white h-full shadow-2xl p-4 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-sm text-slate-900">AI Agent Navigation</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-1 mt-3 flex-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="flex-1">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              {papersCount} Papers Analyzed • Question Paper AI Agent
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 xl:w-72 bg-white border-r border-slate-200 flex-col shrink-0 h-screen sticky top-0 overflow-y-auto shadow-2xs">
        {/* App Branding */}
        <div className="p-5 border-b border-slate-100 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-base font-extrabold text-slate-900 tracking-tight leading-tight">
                Question Paper AI Agent
              </h1>
              <p className="text-[11px] text-blue-700 font-semibold">
                Autonomous Exam Prep
              </p>
            </div>
          </div>

          {/* Staged papers indicator */}
          <div className="mt-3.5 bg-blue-50/70 border border-blue-200/80 rounded-xl p-2.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-700">{papersCount} Papers Loaded</span>
            </div>
            <button
              onClick={onTriggerAnalysis}
              disabled={isAnalyzing}
              className="text-[11px] font-bold text-blue-700 hover:text-blue-900 bg-white border border-blue-200 px-2 py-0.5 rounded-lg shadow-2xs transition-colors"
            >
              {isAnalyzing ? 'Analyzing...' : 'Re-Analyze'}
            </button>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="p-3 space-y-1 flex-1">
          <p className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
            Application Sections
          </p>

          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left group ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:bg-blue-50/50 hover:text-blue-800'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'}`} />
                <span className="flex-1 truncate">{item.label}</span>
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-blue-200" />}
              </button>
            );
          })}
        </nav>

        {/* Project Footer Badge */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-[11px] text-slate-500">
          <p className="font-bold text-slate-700">College Final-Year Project</p>
          <p className="text-[10px] text-slate-400">Powered by Google Gemini 3.8 Flash</p>
        </div>
      </aside>
    </>
  );
};
