import React from 'react'
import useSWR from 'swr'
import GridSpinner from '../ui/icons/GridSpinner'
import { SimplePost } from '@/model/post'
import PostGridCard from './PostGridCard'

type Props = {
  username: string
  query: string
}

export default function PostGrid({ username, query }: Props) {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<SimplePost[]>(`/api/users/${username}/${query}`)

  if (error) {
    return <p>실패했습니다😭</p>
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <GridSpinner />
      </div>
    )
  }

  if (!error && !isLoading && !posts?.length) {
    return <p className="text-center mt-24">게시물이 없습니다😭</p>
  }

  return (
    <ul className="grid grid-cols-3 gap-2 p-2">
      {posts &&
        posts.map((post, index) => (
          <li key={post.id}>
            <PostGridCard post={post} priority={index < 6} />
          </li>
        ))}
    </ul>
  )
}
