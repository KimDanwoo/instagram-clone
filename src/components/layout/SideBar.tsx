import React from 'react'
import Address from '../main/Address'
import Link from 'next/link'
import Avatar from '../main/Avatar'
import { AuthUser } from '@/model/user'

type Props = {
  user: AuthUser
}
export default function MainPosts({ user: { username, image, name } }: Props) {
  return (
    <div className="w-2/5 hidden xl:block p-2">
      <div>
        <li className="flex items-center">
          <Link href={`/user/${username}`}>
            <Avatar image={image} size={13} />
          </Link>
          <div className="flex flex-col">
            <span className="ml-4 font-bold ">{username}</span>
            <span className="ml-4">{name}</span>
          </div>
        </li>
      </div>
      <Address />
    </div>
  )
}
