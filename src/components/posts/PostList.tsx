'use client'
import { simplePost } from '@/model/post'
import React from 'react'
import useSWR from 'swr'
import PostListCard from './PostListCard'
import GridSpinner from '../icons/GridSpinner'

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<simplePost[]>('api/posts')
  console.log(posts)
  return (
    <section>
      {loading && (
        <div className=" h-screen flex justify-center items-center">
          <GridSpinner color="blue" />
        </div>
      )}
      {posts && (
        <ul>
          {posts &&
            posts.map((post, index) => (
              <PostListCard key={post.id} post={post} priority={index < 2} />
            ))}
        </ul>
      )}
    </section>
  )
}
