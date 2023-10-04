import { SimplePost } from '@/model/post'
import React from 'react'
import Image from 'next/image'
import ActionBar from './ActionBar'
import UserProfileAvatar from './UserProfileAvatar'
import CommentUserList from './CommentUserList'
import usePost from '@/hooks/usePost'
import GridSpinner from '../ui/icons/GridSpinner'

type Props = {
  post: SimplePost
  priority: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PostDetail({ post, priority, setOpenModal }: Props) {
  const { id, userImage, username, createdAt, image } = post
  const { post: data, isLoading, postComment } = usePost(id)
  const comments = data?.comments
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
        <div className="px-4 flex flex-col h-full justify-between">
          {isLoading && (
            <div className="w-full h-full flex items-center justify-center">
              <GridSpinner />
            </div>
          )}
          {!isLoading && (
            <ul className="max-h-[600px]">
              {comments &&
                comments.map(
                  ({ image, username: commentUsername, comment }, index) => (
                    <CommentUserList
                      key={index}
                      image={image || ''}
                      commentUsername={commentUsername}
                      comment={comment}
                      username={username}
                    />
                  )
                )}
            </ul>
          )}
          <div>
            <ActionBar
              post={post}
              openModal={() => setOpenModal(true)}
              onComment={postComment}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
