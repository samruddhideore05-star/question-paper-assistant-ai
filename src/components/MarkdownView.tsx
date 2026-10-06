import React from 'react';

interface MarkdownViewProps {
  content: string;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({ content }) => {
  // Simple, clean parser for student-friendly formatting
  const lines = content.split('\n');

  return (
    <div className="space-y-2 text-slate-800 leading-relaxed text-sm md:text-base">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return <div key={idx} className="h-2" />;
        }

        // H1 / Title
        if (trimmed.startsWith('# ')) {
          return (
            <h1 key={idx} className="text-xl font-bold text-slate-900 border-b border-blue-100 pb-1 pt-2">
              {renderFormattedText(trimmed.replace(/^#\s+/, ''))}
            </h1>
          );
        }

        // H2
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={idx} className="text-lg font-bold text-slate-900 pt-2 text-blue-900">
              {renderFormattedText(trimmed.replace(/^##\s+/, ''))}
            </h2>
          );
        }

        // H3
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={idx} className="text-base font-semibold text-slate-900 pt-1 text-blue-800">
              {renderFormattedText(trimmed.replace(/^###\s+/, ''))}
            </h3>
          );
        }

        // Bullet point
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-2">
              <span className="text-blue-600 font-bold mt-1 text-xs">•</span>
              <div className="flex-1 text-slate-700">
                {renderFormattedText(trimmed.replace(/^[-*]\s+/, ''))}
              </div>
            </div>
          );
        }

        // Numbered list
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-2">
              <span className="text-blue-700 font-semibold min-w-5">{numMatch[1]}.</span>
              <div className="flex-1 text-slate-700">
                {renderFormattedText(numMatch[2])}
              </div>
            </div>
          );
        }

        // Blockquote / Tip
        if (trimmed.startsWith('> ') || trimmed.startsWith('💡') || trimmed.startsWith('⚠️')) {
          return (
            <div key={idx} className="bg-blue-50 border-l-4 border-blue-500 p-2.5 rounded-r-md text-blue-950 text-sm my-1">
              {renderFormattedText(trimmed.replace(/^>\s*/, ''))}
            </div>
          );
        }

        return (
          <p key={idx} className="text-slate-700">
            {renderFormattedText(line)}
          </p>
        );
      })}
    </div>
  );
};

function renderFormattedText(text: string): React.ReactNode {
  // Parse bold **text** and code `text`
  const parts = text.split(/(\*\*.*?\*\*|`.*?`|\*.*?\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className="italic text-slate-600">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="bg-slate-100 text-blue-700 font-mono text-xs px-1.5 py-0.5 rounded border border-slate-200">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}
