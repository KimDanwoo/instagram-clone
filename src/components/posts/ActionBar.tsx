import React, { useState } from 'react'
import HeartIcon from '../ui/icons/HeartIcon'
import BookmarkIcon from '../ui/icons/BookmarkIcon'
import { RiChat1Line } from 'react-icons/ri'
import { useSession } from 'next-auth/react'
import HeartFillIcon from '../ui/icons/HeartFillIcon'
import BookmarkFillIcon from '../ui/icons/BookmarkFillIcon'
import ToggleButton from '../ui/button/ToggleButton'
import { SimplePost } from '@/model/post'
import { useSWRConfig } from 'swr'

type Props = {
  post: SimplePost
  openModal: () => void
}

export default function ActionBar({ post, openModal }: Props) {
  const { id, likes, username, text } = post
  const { data: session } = useSession()
  const user = session?.user
  const liked = user ? likes.includes(user.username) : false
  const [bookmarked, setBookmarked] = useState(false)
  const { mutate } = useSWRConfig()
  const handleLike = (like: boolean) => {
    fetch('api/likes', {
      method: 'PUT',
      body: JSON.stringify({ id, like }),
    }).then(() => mutate('api/posts'))
  }

  return (
    <>
      <div className="flex justify-between my-3">
        <div className="flex w-40">
          <ToggleButton
            toggled={liked}
            onToggle={handleLike}
            onIcon={<HeartFillIcon />}
            offIcon={<HeartIcon />}
          />
          <RiChat1Line
            className="text-3xl ml-3 cursor-pointer"
            onClick={openModal}
          />
        </div>
        <div>
          <ToggleButton
            toggled={bookmarked}
            onToggle={setBookmarked}
            onIcon={<BookmarkFillIcon />}
            offIcon={<BookmarkIcon />}
          />
        </div>
      </div>
      <div>
        <p className="font-bold text-sm">{`좋아요 ${likes?.length ?? 0}개`}</p>
        {text && (
          <p className="my-2">
            <span className="font-bold text-sm">{username}</span>
            <span className="ml-3 text-sm">{text}</span>
          </p>
        )}
        <p></p>
      </div>
    </>
  )
}
