'use client'
import { ProfileUser } from '@/model/user'
import React, { useState } from 'react'
import BookmarkIcon from '../ui/icons/BookmarkIcon'
import PostIcon from '../ui/icons/PostIcon'
import HeartIcon from '../ui/icons/HeartIcon'
import PostGrid from './PostGrid'
import { CacheKeysContext } from '@/context/CacheKeysContext'

type Props = {
  user: ProfileUser
}

const tabs = [
  { name: '게시물', type: 'posts', icon: <PostIcon className="w-3 h-3" /> },
  { name: '좋아요', type: 'liked', icon: <HeartIcon className="w-3 h-3" /> },
  { name: '북마크', type: 'saved', icon: <BookmarkIcon className="w-3 h-3" /> },
]

export default function UserPosts({ user }: Props) {
  const { username } = user
  const [query, setQuery] = useState(tabs[0].type)
  return (
    <section className="mt-12">
      <ul className="w-full flex justify-center my-4">
        {tabs.map(({ name, type, icon }, index) => (
          <li
            className={`py-1 px-4 flex items-center text-sm font-bold cursor-pointer ${
              query === type ? '' : 'text-gray-500'
            }`}
            key={index}
            onClick={() => setQuery(type)}
          >
            <span className="scale-150 md:scale-100 mr-2">{icon}</span>
            <span className="hidden md:inline">{name}</span>
          </li>
        ))}
      </ul>
      <CacheKeysContext.Provider value={{ postsKey: `/api/users/${username}/${query}` }}>
        <PostGrid />
      </CacheKeysContext.Provider>
    </section>
  )
}
