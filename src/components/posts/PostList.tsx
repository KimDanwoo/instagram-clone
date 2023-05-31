'use client'
import { simplePost } from '@/model/post'
import React from 'react'
import { GridLoader } from 'react-spinners'
import useSWR from 'swr'
import PostListCard from './PostListCard'

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<simplePost[]>('api/posts')
  console.log(posts)
  return (
    <section>
      {loading && (
        <div className=" h-screen flex justify-center items-center">
          <GridLoader color="blue" />
        </div>
      )}
      {posts && (
        <ul>
          {posts &&
            posts.map((post) => <PostListCard key={post.id} post={post} />)}
        </ul>
      )}
    </section>
  )
}
