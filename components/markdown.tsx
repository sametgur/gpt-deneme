"use client"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import Link from "next/link"
import SafeImage from "./safe-image"

interface MarkdownProps {
  content: string
  className?: string
}

export function Markdown({ content, className = "" }: MarkdownProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Fallback for SSR
    return <div className={`prose max-w-none ${className}`} dangerouslySetInnerHTML={{ __html: content }} />
  }

  if (!content) {
    return <div className="text-red-500">İçerik bulunamadı.</div>
  }

  return (
    <ReactMarkdown
      className={`prose prose-lg max-w-none ${className}`}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSlug]}
      components={{
        h1: ({ node, ...props }) => (
          <h1
            className="text-4xl font-bold mt-12 mb-6 font-serif text-gray-900 pb-2 border-b border-amber-200"
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <h2
            className="text-3xl font-bold mt-10 mb-5 font-serif text-gray-900 pb-2 border-b border-amber-100"
            {...props}
          />
        ),
        h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mt-8 mb-4 font-serif text-gray-900" {...props} />,
        h4: ({ node, ...props }) => <h4 className="text-xl font-bold mt-6 mb-3 font-serif text-gray-900" {...props} />,
        p: ({ node, ...props }) => <p className="my-4 leading-relaxed text-gray-700" {...props} />,
        a: ({ node, ...props }) => (
          <Link
            href={props.href || "#"}
            className="text-amber-600 hover:text-amber-800 font-medium underline decoration-amber-200 hover:decoration-amber-400 decoration-2 underline-offset-2 transition-colors"
          >
            {props.children}
          </Link>
        ),
        img: ({ node, ...props }) => (
          <div className="my-10">
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <SafeImage
                src={props.src || "/placeholder.svg"}
                alt={props.alt || ""}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                fallbackSrc="/abstract-colorful-swirls.png"
              />
            </div>
            {props.alt && <p className="text-center text-sm text-gray-500 mt-3 italic">{props.alt}</p>}
          </div>
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-amber-400 bg-amber-50 pl-6 py-4 pr-4 my-6 text-gray-700 italic rounded-r-lg"
            {...props}
          />
        ),
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "")
          return !inline && match ? (
            <div className="my-6">
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                className="rounded-lg shadow-md"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-amber-700 font-mono text-sm" {...props}>
              {children}
            </code>
          )
        },
        ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4 space-y-2 marker:text-amber-500" {...props} />,
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-6 my-4 space-y-2 marker:text-amber-500" {...props} />
        ),
        li: ({ node, ...props }) => <li className="pl-1 py-1" {...props} />,
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-8 rounded-lg shadow-sm border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200" {...props} />
          </div>
        ),
        thead: ({ node, ...props }) => <thead className="bg-amber-50" {...props} />,
        th: ({ node, ...props }) => (
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border-t border-gray-100" {...props} />
        ),
        hr: ({ node, ...props }) => <hr className="my-8 border-t-2 border-amber-100" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default Markdown
