import React from 'react'
import Avatar from '../main/Avatar'
import { parseDate } from '@/utils/date'

type Props = {
  userImage: string
  username: string
  createdAtStr: string
  isMobile: boolean
}

export default function UserProfileAvatar({
  userImage,
  username,
  createdAtStr,
  isMobile,
}: Props) {
  return (
    <div
      className={`${
        isMobile ? 'flex md:hidden' : 'hidden md:flex'
      } py-2 items-center p-4 `}
    >
      <Avatar image={userImage} size={7} />
      <span className="ml-4 text-sm font-bold">{username}</span>
      <span className="ml-4 text-sm text-gray-400">
        · {parseDate(createdAtStr)}
      </span>
    </div>
  )
}
