import { simplePost } from '@/model/post'
import React from 'react'

type Props = {
  post: simplePost
}

export default function PostDetail({ post }: Props) {
  const { id, userImage } = post
  return <></>
}

{
  /* <div className="w-[70%] md:w-[90%]  h-[90%] max-w-[1100px] max-h-[631px] bg-white rounded-md md:flex">
<div className="flex py-2 items-center p-4 md:hidden">
  <Avatar image={userImage} size={7} />
  <span className="ml-4 text-sm font-bold">{username}</span>
  <span className="ml-4 text-sm text-gray-400">
    · {parseDate(createdAtStr)}
  </span>
</div>
<div className="w-full h-[265px] md:h-[100%] max-w-[631px] max-h-[631px] object-cover">
  <Image
    className="w-full h-full object-cover md:rounded-l-md"
    src={image}
    width={465}
    height={465}
    alt={`photo by ${id}`}
    priority={priority}
  />
</div>

<div className="w-[100%] h-[50%] md:h-[100%] flex flex-col justify-between ">
  <div className="hidden py-2 items-center p-4  md:flex ">
    <Avatar image={userImage} size={7} />
    <span className="ml-4 text-sm font-bold">{username}</span>
    <span className="ml-4 text-sm text-gray-400">
      · {parseDate(createdAtStr)}
    </span>
  </div>
  <div></div>
  <div className="p-4">
    <ActionBar
      likes={likes}
      username={username}
      text={text}
      openModal={() => setOpenModal(true)}
    />
    <CommentForm />
  </div>
</div>
</div> */
}
