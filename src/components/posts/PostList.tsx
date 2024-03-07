'use client'
import React from 'react'
import PostListCard from './PostListCard'
import GridSpinner from '../ui/icons/GridSpinner'
import usePosts from '@/hooks/usePosts'

export default function PostList() {
  const { posts, isLoading } = usePosts()
  return (
    <section>
      {isLoading && (
        <div className=" h-screen flex justify-center items-center">
          <GridSpinner color="blue" />
        </div>
      )}
      {posts && (
        <ul>{posts && posts.map((post, index) => <PostListCard key={post.id} post={post} priority={index < 2} />)}</ul>
      )}
    </section>
  )
}
