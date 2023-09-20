import { FullPost, simplePost } from '@/model/post'
import React from 'react'
import Image from 'next/image'
import ActionBar from './ActionBar'
import CommentForm from './CommentForm'
import useSWR from 'swr'
import UserProfileAvatar from './UserProfileAvatar'
import CommentUserList from './CommentUserList'

type Props = {
  post: simplePost
  priority: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PostDetail({ post, priority, setOpenModal }: Props) {
  const { id, userImage, username, createdAt, image, likes, text } = post
  const { data } = useSWR<FullPost>(`/api/posts/${id}`)
  const comments = data?.comments
  console.log('data', data)
  const createdAtStr = createdAt.toString()
  return (
    <section className="w-[70%] md:w-[90%]  h-[90%] max-w-[1100px] max-h-[631px] bg-white rounded-md md:flex">
      <UserProfileAvatar
        userImage={userImage}
        username={username}
        createdAtStr={createdAtStr}
        isMobile={true}
      />
      <div className="w-full h-[265px] md:h-[100%] max-w-[631px] max-h-[631px] object-cover">
        <Image
          className="w-full h-full object-cover md:rounded-l-md"
          src={image}
          width={465}
          height={465}
          alt={`photo by ${username}`}
          priority={priority}
        />
      </div>
      <div className="w-[100%] h-[50%] md:h-[100%] flex flex-col justify-between ">
        <UserProfileAvatar
          userImage={userImage}
          username={username}
          createdAtStr={createdAtStr}
          isMobile={false}
        />
        <div></div>
        <div className="p-4 flex flex-col h-full justify-between">
          <ul className="max-h-[600px]">
            {comments &&
              comments.map(
                ({ image, username: commentUsername, comment }, index) => (
                  <CommentUserList
                    key={index}
                    image={image}
                    commentUsername={commentUsername}
                    comment={comment}
                    username={username}
                  />
                )
              )}
          </ul>
          <div>
            <ActionBar
              likes={likes}
              username={username}
              text={text}
              openModal={() => setOpenModal(true)}
            />
            <CommentForm />
          </div>
        </div>
      </div>
    </section>
  )
}
