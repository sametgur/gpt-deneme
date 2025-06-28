"use client"

import type React from "react"

import { useTranslations } from "@/hooks/use-translations"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

interface CommentSectionProps {
  postSlug: string
}

interface Comment {
  id: string
  name: string
  content: string
  date: string
}

export function CommentSection({ postSlug }: CommentSectionProps) {
  const t = useTranslations()
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const newComment: Comment = {
        id: Date.now().toString(),
        name,
        content,
        date: new Date().toLocaleDateString(),
      }

      setComments([...comments, newComment])
      setName("")
      setContent("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="space-y-8">
      {comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{comment.name}</h4>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">{t.blog?.noComments || "No comments yet. Be the first to comment!"}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold">{t.blog?.leaveComment || "Leave a comment"}</h3>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t.blog?.name || "Name"}
          </label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full" />
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            {t.blog?.comment || "Comment"}
          </label>
          <Textarea
            id="comment"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full min-h-[100px]"
          />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t.blog?.submitting || "Submitting..." : t.blog?.submit || "Submit"}
        </Button>
      </form>
    </div>
  )
}
