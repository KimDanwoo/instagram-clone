import React from 'react'
import HeartIcon from '../icons/HeartIcon'
import ChatIcon from '../icons/ChatIcon'
import BookmarkIcon from '../icons/BookmarkIcon'

type Props = {
  likes: string
  username: string
  text: string
}
export default function ActionBar({ likes, username, text }: Props) {
  return (
    <>
      <div className="flex justify-between my-3">
        <div className="flex w-40">
          <HeartIcon />
          <ChatIcon />
        </div>
        <div>
          <BookmarkIcon />
        </div>
      </div>
      <div>
        <p className="font-bold text-sm">{`좋아요 ${likes?.length ?? 0}개`}</p>
        <p className="my-2">
          <span className="font-bold text-sm">{username}</span>
          <span className="ml-3 text-sm">{text}</span>
        </p>
        <p></p>
      </div>
    </>
  )
}
