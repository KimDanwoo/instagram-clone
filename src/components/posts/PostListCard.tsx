'use client'
import { SimplePost } from '@/model/post'
import Image from 'next/image'
import React, { useState } from 'react'
import Avatar from '../main/Avatar'
import { parseDate } from '@/utils/date'
import CommentForm from './CommentForm'
import ActionBar from './ActionBar'
import ModalPortal from '../ui/modal/ModalPortal'
import PostModal from '../ui/modal/PostModal'
import PostDetail from './PostDetail'

type Props = {
  post: SimplePost
  priority?: boolean
}

export default function PostListCard({ post, priority = false }: Props) {
  const { image, id, text, userImage, username, likes, createdAt } = post
  const [openModal, setOpenModal] = useState<boolean>(false)
  const createdAtStr = createdAt.toString()
  return (
    <article className="w-[468px] rounded-md  mx-auto my-2 border-b">
      <div className="flex py-2 items-center">
        <Avatar image={userImage} size={7} />
        <span className="ml-4 text-sm font-bold">{username}</span>
        <span className="ml-4 text-sm text-gray-400">
          · {parseDate(createdAtStr)}
        </span>
      </div>
      <div className="w-[465px] h-[465px] object-cover">
        <Image
          className="w-full h-full"
          src={image}
          width={465}
          height={465}
          alt={`photo by ${id}`}
          priority={priority}
        />
      </div>
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        openModal={() => setOpenModal(true)}
      />
      <CommentForm />
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
