import React, { useState, useRef } from 'react';
import {
  Upload,
  FileText,
  Trash2,
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  RefreshCw,
  Info
} from 'lucide-react';
import { UploadedPaper } from '../types/analysis';
import { SAMPLE_DBMS_PAPERS, SAMPLE_OS_PAPERS } from '../data/samplePapers';

interface UploadSectionProps {
  papers: UploadedPaper[];
  onAddPaper: (paper: UploadedPaper) => void;
  onRemovePaper: (id: string) => void;
  onClearPapers: () => void;
  onLoadSamplePapers: (sampleType: 'dbms' | 'os') => void;
  onStartAnalysis: () => void;
  isAnalyzing: boolean;
  analysisStepMessage?: string;
}

export const UploadSection: React.FC<UploadSectionProps> = ({
  papers,
  onAddPaper,
  onRemovePaper,
  onClearPapers,
  onLoadSamplePapers,
  onStartAnalysis,
  isAnalyzing,
  analysisStepMessage = 'Extracting questions from papers...',
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [pastedSubject, setPastedSubject] = useState('Database Management Systems');
  const [pastedYear, setPastedYear] = useState('2024');
  const [pastedText, setPastedText] = useState('');
  const [activeTab, setActiveTab] = useState<'upload' | 'samples' | 'paste'>('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setErrorMessage(null);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // File size validation (Max 30MB)
      if (file.size > 30 * 1024 * 1024) {
        setErrorMessage(`File "${file.name}" exceeds the 30MB size limit.`);
        continue;
      }

      if (file.size === 0) {
        setErrorMessage(`File "${file.name}" is empty (0 bytes).`);
        continue;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        const yearMatch = file.name.match(/\b(20\d\d)\b/);

        const newPaper: UploadedPaper = {
          id: `paper-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          name: file.name,
          year: yearMatch ? yearMatch[1] : '2024',
          subject: pastedSubject || 'University Examination Paper',
          fileBase64: base64String,
          fileType: file.type || 'application/pdf',
          size: file.size,
          uploadDate: new Date().toLocaleDateString(),
          status: 'ready',
        };

        onAddPaper(newPaper);
      };

      if (file.type.includes('pdf')) {
        reader.readAsDataURL(file);
      } else {
        // Text format
        const textReader = new FileReader();
        textReader.onload = () => {
          const content = textReader.result as string;
          const yearMatch = file.name.match(/\b(20\d\d)\b/);
          onAddPaper({
            id: `paper-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
            name: file.name,
            year: yearMatch ? yearMatch[1] : '2024',
            subject: pastedSubject || 'University Examination Paper',
            text: content,
            fileType: 'text/plain',
            size: file.size,
            uploadDate: new Date().toLocaleDateString(),
            status: 'ready',
          });
        };
        textReader.readAsText(file);
      }
    }
  };

  const handleAddPasted = () => {
    if (!pastedText.trim()) {
      setErrorMessage('Please paste your question paper text.');
      return;
    }

    onAddPaper({
      id: `paper-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: `${pastedSubject} (${pastedYear})`,
      year: pastedYear || '2024',
      subject: pastedSubject || 'Computer Science Paper',
      text: pastedText.trim(),
      fileType: 'text/plain',
      uploadDate: new Date().toLocaleDateString(),
      status: 'ready',
    });

    setPastedText('');
    setErrorMessage(null);
    setActiveTab('upload');
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
              Section 2
            </span>
            <span className="text-xs text-slate-500">Document Ingestion Pipeline</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Upload Question Papers (PDF)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Upload multiple previous-year question papers for simultaneous cross-year comparison and analysis.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {papers.length > 0 && (
            <button
              onClick={onClearPapers}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-red-50 hover:text-red-700 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Papers</span>
            </button>
          )}

          <button
            onClick={onStartAnalysis}
            disabled={papers.length === 0 || isAnalyzing}
            className={`flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl shadow-xs transition-all ${
              papers.length === 0 || isAnalyzing
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
            }`}
          >
            {isAnalyzing ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Analyzing All Papers...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Analyze All ({papers.length}) Papers</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Loading Progress Banner when analyzing */}
      {isAnalyzing && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 shadow-xs flex items-center gap-3 animate-pulse">
          <div className="w-8 h-8 rounded-full border-2 border-blue-600 border-t-transparent animate-spin shrink-0" />
          <div className="space-y-0.5">
            <p className="font-bold text-blue-900 text-xs">AI Agent Processing in Progress</p>
            <p className="text-xs text-blue-700">{analysisStepMessage}</p>
          </div>
        </div>
      )}

      {/* Error message */}
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3.5 rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-2">
        <button
          onClick={() => setActiveTab('upload')}
          className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'upload'
              ? 'border-blue-600 text-blue-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Upload className="w-3.5 h-3.5" />
          <span>PDF Upload (Drag & Drop)</span>
        </button>

        <button
          onClick={() => setActiveTab('samples')}
          className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'samples'
              ? 'border-blue-600 text-blue-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Load Ready Sample Papers</span>
          <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded-full font-bold">
            Instant Test
          </span>
        </button>

        <button
          onClick={() => setActiveTab('paste')}
          className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'paste'
              ? 'border-blue-600 text-blue-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Paste Paper Content</span>
        </button>
      </div>

      {/* Tab 1: Drag and Drop Upload */}
      {activeTab === 'upload' && (
        <div className="space-y-4">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              handleFileUpload(e.dataTransfer.files);
            }}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-3xl p-10 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-blue-600 bg-blue-50/70 scale-[0.99]'
                : 'border-slate-300 hover:border-blue-400 bg-white hover:bg-slate-50/50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,text/plain"
              className="hidden"
              onChange={(e) => handleFileUpload(e.target.files)}
            />
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3 shadow-2xs">
              <Upload className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Drag & Drop your Question Papers here, or browse files
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Supports multiple PDF files simultaneously (Up to 30MB each). Scanned and digital papers supported.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full font-medium">
              <FileCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Real PDF document bytes are streamed directly to Gemini 3.8 Flash</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Sample Papers Loader */}
      {activeTab === 'samples' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-600">
            Don't have your university PDFs handy on this device? Load pre-formatted multi-year examination paper datasets with 1 click:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-white border border-blue-200 rounded-2xl p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  4 Years Complete Dataset
                </span>
                <span className="text-xs text-slate-500">100 Marks Each</span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">
                Database Management Systems (CS8492)
              </h3>
              <p className="text-xs text-slate-600">
                End-semester university question papers from 2021, 2022, 2023, and 2024 with Part A (2M), Part B (13M), and Part C (15M) questions.
              </p>
              <button
                onClick={() => {
                  onLoadSamplePapers('dbms');
                  setActiveTab('upload');
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 rounded-xl shadow-2xs transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Load 4 DBMS Papers (2021-2024)</span>
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  2 Years Exam Dataset
                </span>
                <span className="text-xs text-slate-500">100 Marks Each</span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">
                Operating Systems (CS8493)
              </h3>
              <p className="text-xs text-slate-600">
                Covers CPU scheduling, process synchronization, semaphores, Banker's deadlock algorithm, and paging.
              </p>
              <button
                onClick={() => {
                  onLoadSamplePapers('os');
                  setActiveTab('upload');
                }}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs py-2.5 rounded-xl shadow-2xs transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Load Operating Systems Papers</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Tab 3: Paste Text */}
      {activeTab === 'paste' && (
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Subject Name</label>
              <input
                type="text"
                value={pastedSubject}
                onChange={(e) => setPastedSubject(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Exam Year</label>
              <input
                type="text"
                value={pastedYear}
                onChange={(e) => setPastedYear(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Question Paper Content</label>
            <textarea
              rows={8}
              value={pastedText}
              onChange={(e) => setPastedText(e.target.value)}
              placeholder="Paste questions here: (e.g. 1. What is ACID property? 2. Explain 2PL...)"
              className="w-full text-xs font-mono p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
            />
          </div>

          <button
            onClick={handleAddPasted}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl"
          >
            Add to Paper Queue
          </button>
        </div>
      )}

      {/* Uploaded Papers Table */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Uploaded Previous-Year Papers Queue ({papers.length})
          </h2>
          <span className="text-[11px] text-slate-500">
            {papers.length} paper{papers.length !== 1 ? 's' : ''} staged for cross-analysis
          </span>
        </div>

        {papers.length === 0 ? (
          <div className="py-8 text-center text-xs text-slate-400">
            No question papers in queue. Upload PDFs or click "Load Ready Sample Papers" above.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {papers.map((p) => (
              <div
                key={p.id}
                className="py-3 flex items-center justify-between hover:bg-slate-50/50 px-2 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{p.name}</p>
                    <p className="text-[11px] text-slate-500">
                      Subject: {p.subject} • Year: <strong>{p.year}</strong> {p.size ? `• ${(p.size / 1024).toFixed(1)} KB` : ''}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                    Ready
                  </span>
                  <button
                    onClick={() => onRemovePaper(p.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove paper"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
