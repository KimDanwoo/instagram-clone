import { SimplePost } from '@/model/post'
import Image from 'next/image'
import React, { useState } from 'react'
import ModalPortal from '../ui/modal/ModalPortal'
import PostModal from '../ui/modal/PostModal'
import PostDetail from '../posts/PostDetail'
import { signIn, useSession } from 'next-auth/react'

type Props = {
  post: SimplePost
  priority: boolean
}
export default function PostGridCard({ post, priority = false }: Props) {
  const { image, username } = post
  const { data: session } = useSession()
  const [openModal, setOpenModal] = useState(false)
  const handleOpenPost = () => {
    if (!session?.user) {
      return signIn()
    }

    setOpenModal(true)
  }
  return (
    <div className="relative w-full aspect-square">
      <Image
        className="object-cover cursor-pointer"
        src={image}
        sizes="650px"
        fill
        priority={priority}
        alt={`photo by ${username}`}
        onClick={handleOpenPost}
      />
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
    </div>
  )
}
