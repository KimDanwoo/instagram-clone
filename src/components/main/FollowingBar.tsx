'use client'
import { DetailUser } from '@/model/user'
import Link from 'next/link'
import React from 'react'
import { SyncLoader } from 'react-spinners'
import useSWR from 'swr'
import Avatar from './Avatar'
import { useSession } from 'next-auth/react'
import ScrollableBar from '../custom/ScrollableBar'

export default function FollowingBar() {
  const { data: session } = useSession()
  const user = session?.user
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me')
  const users = data?.following
  return (
    <section>
      {loading ? (
        <SyncLoader size={8} color="blue" className=" w-9 m-auto my-12" />
      ) : (
        (!users || users?.length === 0) && (
          <li>
            <Link
              href={`/user/${user?.username}`}
              className="flex flex-col items-center mx-2"
            >
              <Avatar image={user?.image} size={16} highlight={true}></Avatar>
              <p className=" text-xs mt-2">{user?.username}</p>
            </Link>
          </li>
        )
      )}
      {users && users?.length > 0 && (
        <ScrollableBar>
          <Link
            href={`/user/${user?.username}`}
            className="flex flex-col items-center mx-2"
          >
            <Avatar image={user?.image} size={16} highlight={true}></Avatar>
            <p className=" text-xs mt-2">{user?.username}</p>
          </Link>
          {users.map(({ username, image }) => (
            <Link
              href={`/user/${username}`}
              className="flex flex-col items-center mx-2"
              key={username}
            >
              <Avatar image={image} size={16}></Avatar>
              <p className=" text-xs mt-2">{username}</p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  )
}
