import { simplePost } from '@/model/post'
import Image from 'next/image'
import React from 'react'
import Avatar from '../main/Avatar'
import HeartIcon from '../icons/HeartIcon'
import BookmarkIcon from '../icons/BookmarkIcon'
import SmileIcon from '../icons/SmileIcon'
import { parseDate } from '@/utils/date'
import ChatIcon from '../icons/ChatIcon'

type Props = { post: simplePost }

export default function PostListCard({ post }: Props) {
  const { image, id, text, userImage, username, likes, createdAt } = post
  const createdAtStr = createdAt.toString()
  return (
    <article className="w-[468px] rounded-md  mx-auto my-2 border-b">
      <div className="flex py-2 items-center">
        <Avatar image={userImage} size={7} />
        <span className="ml-4 text-sm font-bold">{username}</span>
        <span className="ml-4 text-sm text-gray-400">
          · {parseDate(createdAtStr)}
        </span>
      </div>
      <div className="w-[465px] h-[465px] object-cover">
        <Image
          className="w-full h-full"
          src={image}
          width={465}
          height={465}
          alt={`photo by ${id}`}
        />
      </div>
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
        <p className="font-bold">{`좋아요 ${likes?.length ?? 0}개`}</p>
        <p>
          <span className="font-bold">{username}</span>
          <span className="ml-3">{text}</span>
        </p>
        <form className="flex items-center">
          <SmileIcon  />
          <input type="text" placeholder="Add a comments..." />
        </form>
      </div>
    </article>
  )
}
