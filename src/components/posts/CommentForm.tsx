import React, { FormEvent, useState } from 'react'
import SmileIcon from '../ui/icons/SmileIcon'

type Props = {
  onPostComment: (comment: string) => void
}

export default function CommentForm({ onPostComment }: Props) {
  const [comment, setComment] = useState('')
  const buttonDisabled = comment.length === 0
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onPostComment(comment)
    setComment('')
  }
  return (
    <form
      className="flex items-center justify-between py-1 my-2"
      onSubmit={handleSubmit}
    >
      <div className="text-sm w-5/6 flex justify-between">
        <input
          type="text"
          placeholder="댓글 달기..."
          className="w-4/5 p-1 px-2"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {!buttonDisabled && (
          <button disabled={buttonDisabled} className="text-blue-600 font-bold">
            게시
          </button>
        )}
      </div>
      <SmileIcon />
    </form>
  )
}
