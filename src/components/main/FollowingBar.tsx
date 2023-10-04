'use client'
import Link from 'next/link'
import React from 'react'
import { SyncLoader } from 'react-spinners'
import Avatar from './Avatar'
import ScrollableBar from '../custom/ScrollableBar'
import useMe from '@/hooks/useMe'

export default function FollowingBar() {
  const { user, isLoading: loading } = useMe()
  const users = user?.following
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
              <Avatar image={user?.image} size={13} highlight={true}></Avatar>
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
            <Avatar image={user?.image} size={13} highlight={true}></Avatar>
            <p className=" text-xs mt-2">{user?.username}</p>
          </Link>
          {users.map(({ username, image }) => (
            <Link
              href={`/user/${username}`}
              className="flex flex-col items-center mx-2"
              key={username}
            >
              <Avatar image={image} size={13}></Avatar>
              <p className=" text-xs mt-2">{username}</p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  )
}
