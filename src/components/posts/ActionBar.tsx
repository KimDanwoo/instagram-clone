import React from 'react'
import HeartIcon from '../ui/icons/HeartIcon'
import BookmarkIcon from '../ui/icons/BookmarkIcon'
import { RiChat1Line } from 'react-icons/ri'

type Props = {
  likes: string
  username: string
  text: string
  openModal: () => void
}
export default function ActionBar({ likes, username, text, openModal }: Props) {
  return (
    <>
      <div className="flex justify-between my-3">
        <div className="flex w-40">
          <HeartIcon />
          <RiChat1Line
            className="text-3xl ml-3 cursor-pointer"
            onClick={openModal}
          />
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
