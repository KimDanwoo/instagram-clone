'use client'
import { Comment, SimplePost } from '@/model/post'
import Image from 'next/image'
import React, { useState } from 'react'
import Avatar from '../main/Avatar'
import ActionBar from './ActionBar'
import ModalPortal from '../ui/modal/ModalPortal'
import PostModal from '../ui/modal/PostModal'
import PostDetail from './PostDetail'
import { parseDate } from '@/utils/date'
import usePosts from '@/hooks/usePosts'

type Props = {
  post: SimplePost
  priority?: boolean
}

export default function PostListCard({ post, priority = false }: Props) {
  const { image, id, userImage, username, comments, text, createdAt } = post
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { postComment } = usePosts()
  const handlePostComment = (comment: Comment) => {
    postComment(post, comment)
  }

  return (
    <article className="w-[468px] rounded-md  mx-auto my-2 border-b">
      <div className="flex py-2 items-center">
        <Avatar image={userImage} size={7} />
        <span className="ml-4 text-sm font-bold">{username}</span>
        <span className="ml-4 text-sm text-gray-400">
          {parseDate(createdAt.toString())}
        </span>
      </div>
      <div className="w-[465px] h-[465px] object-cover">
        <Image
          className="w-full h-full cursor-pointer"
          src={image}
          width={465}
          height={465}
          alt={`photo by ${id}`}
          priority={priority}
          onClick={() => setOpenModal(true)}
        />
      </div>
      <ActionBar
        post={post}
        openModal={() => setOpenModal(true)}
        onComment={handlePostComment}
      >
        <p className="my-2">
          <span className="font-bold text-sm">{username}</span>
          <span className="ml-3 text-sm">{text}</span>
        </p>
        {comments > 1 && (
          <button
            className="text-gray-500 text-sm"
            onClick={() => setOpenModal(true)}
          >{`댓글 ${comments} 개 모두 보기`}</button>
        )}
      </ActionBar>

      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail
              post={post}
              priority={priority}
              setOpenModal={setOpenModal}
            />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  )
}
