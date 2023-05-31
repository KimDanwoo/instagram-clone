import React from 'react'
import SmileIcon from '../icons/SmileIcon'

export default function CommentForm() {
  return (
    <form className="flex items-center justify-between py-1 my-2">
      <div className="text-sm w-5/6 flex justify-between">
        <input type="text" placeholder="댓글 달기..." />
        <button className="text-blue-600 font-bold">게시</button>
      </div>
      <SmileIcon />
    </form>
  )
}
