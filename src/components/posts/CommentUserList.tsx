import React from 'react'
import Avatar from '../main/Avatar'

type Props = {
  image: string
  commentUsername: string
  comment: string
  username: string
}

export default function CommentUserList({ image, commentUsername, comment, username }: Props) {
  return (
    <li className="flex items-center my-1">
      <Avatar image={image} size={7} highlight={commentUsername === username} />
      <div>
        <div>
          <span className="font-bold mx-2">{commentUsername}</span>
          <span>{comment}</span>
        </div>
      </div>
    </li>
  )
}
