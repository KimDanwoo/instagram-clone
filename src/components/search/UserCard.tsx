import React from 'react'
import Avatar from '../main/Avatar'
import { ProfileUser } from '@/model/user'
import Link from 'next/link'

type Props = {
  user: ProfileUser
}

export default function UserCard({
  user: { name, username, image, following, followers },
}: Props) {
  return (
    <Link href={`/user/${username}`} className="flex items-center">
      <Avatar image={image} size={7} />
      <div className="ml-2 flex flex-col ">
        <span className="font-bold text-sm">{username}</span>
        <span className="font-bold text-sm">{name}</span>
        <span className="text-sm text-gray-500">{`${followers} followers ${following} following`}</span>
      </div>
    </Link>
  )
}
