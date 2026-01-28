"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#FFFAF0] prose-p:text-[#FFFAF0] prose-li:text-[#FFFAF0] prose-a:text-primary prose-img:rounded-xl prose-strong:font-bold prose-strong:text-[#FFFAF0] prose-code:text-[#FFFAF0]">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
