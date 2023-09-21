'use client'
import { ProfileUser } from '@/model/user'
import React, { useState } from 'react'
import useSWR from 'swr'

type Props = {
  user: ProfileUser
}

export default function UserPosts({ user }: Props) {
  const { username } = user
  const [tab, setTab] = useState('posts')
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/users/${username}/posts`)
  return (
    <section className="mt-12">
      <ul className="w-full flex justify-center">
        <li className="py-1 px-4">posts</li>
        <li className="py-1 px-4">liked</li>
        <li className="py-1 px-4">saved</li>
      </ul>
      <ul>
        {posts && posts.map((post, index) => <li key={index}>{post.text}</li>)}
      </ul>
    </section>
  )
}
