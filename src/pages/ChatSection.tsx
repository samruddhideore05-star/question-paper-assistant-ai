import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Bot,
  User,
  Copy,
  Check,
  RotateCcw,
  Lightbulb,
  Sparkles,
  BookOpen,
  HelpCircle
} from 'lucide-react';
import { ChatMessage, FullAgentAnalysis } from '../types/analysis';
import { MarkdownView } from '../components/MarkdownView';
import { DisclaimerBanner } from '../components/DisclaimerBanner';

interface ChatSectionProps {
  analysis: FullAgentAnalysis;
  messages: ChatMessage[];
  onSendMessage: (content: string) => Promise<void>;
  isSending: boolean;
  onClearChat: () => void;
  presetPrompt?: string;
  onClearPresetPrompt?: () => void;
}

const SPEC_PROMPTS = [
  'Which questions are repeated?',
  'Which question appeared most frequently?',
  'What is the most important topic?',
  'Give me the top 10 important questions.',
  'Which topics should I study first?',
  'Explain the question paper pattern.',
  'Compare the 2024 and 2025 papers.',
  'Show questions from Unit 3.',
  'Give me repeated questions worth 10 marks.',
  'Make a revision plan.',
  'Explain this question in simple language.',
  'What should I study today?'
];

export const ChatSection: React.FC<ChatSectionProps> = ({
  analysis,
  messages,
  onSendMessage,
  isSending,
  onClearChat,
  presetPrompt,
  onClearPresetPrompt,
}) => {
  const [inputText, setInputText] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (presetPrompt) {
      setInputText(presetPrompt);
      if (onClearPresetPrompt) {
        onClearPresetPrompt();
      }
    }
  }, [presetPrompt, onClearPresetPrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSending]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isSending) return;
    const text = inputText.trim();
    setInputText('');
    onSendMessage(text);
  };

  const handlePromptClick = (prompt: string) => {
    if (isSending) return;
    onSendMessage(prompt);
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-4 pb-12 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
              Section 9
            </span>
            <span className="text-xs text-slate-500">
              Context: {analysis.totalPapers} Uploaded Papers ({analysis.subject})
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">
            Question Paper AI Assistant
          </h1>
          <p className="text-xs text-slate-500">
            Ask any question about your previous-year papers in simple, student-friendly English.
          </p>
        </div>

        <button
          onClick={onClearChat}
          className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center gap-1.5 self-start sm:self-auto transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear Chat</span>
        </button>
      </div>

      <DisclaimerBanner compact />

      {/* Suggested Quick Question Pills (All 12 user example prompts) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
          <Lightbulb className="w-4 h-4 text-blue-600" />
          <span>Suggested Questions (Click any prompt to ask immediately):</span>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {SPEC_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handlePromptClick(prompt)}
              disabled={isSending}
              className="text-xs font-medium bg-slate-50 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 border border-slate-200 px-3 py-1.5 rounded-xl text-slate-700 transition-all text-left"
            >
              💬 {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs min-h-[460px] max-h-[620px] flex flex-col overflow-hidden">
        
        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Question Paper AI Assistant is Ready!
              </h3>
              <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                I have analyzed {analysis.totalPapers} previous-year examination papers for <strong>{analysis.subject}</strong>. Ask any question about repeated questions, important topics, paper patterns, or click any prompt pill above!
              </p>
            </div>
          ) : (
            messages.map((msg) => {
              const isAssistant = msg.role === 'assistant';

              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      isAssistant
                        ? 'bg-slate-50 border border-slate-200 text-slate-800 shadow-2xs'
                        : 'bg-blue-600 text-white shadow-xs'
                    }`}
                  >
                    {isAssistant ? (
                      <div className="space-y-2">
                        <MarkdownView content={msg.content} />
                        
                        <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 text-[10px] text-slate-400">
                          <span>Question Paper AI Assistant</span>
                          <button
                            onClick={() => copyToClipboard(msg.id, msg.content)}
                            className="text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span className="text-emerald-600">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy Answer</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    )}
                  </div>

                  {!isAssistant && (
                    <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })
          )}

          {isSending && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-600 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] font-medium text-slate-500 ml-1">
                  Analyzing uploaded papers & formulating student-friendly explanation...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="p-3 sm:p-4 border-t border-slate-200 bg-slate-50/80 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask anything about your uploaded question papers..."
            disabled={isSending}
            className="flex-1 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
          />

          <button
            type="submit"
            disabled={!inputText.trim() || isSending}
            className={`p-3 rounded-xl transition-all flex items-center justify-center ${
              !inputText.trim() || isSending
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>

    </div>
  );
};
