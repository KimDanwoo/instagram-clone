import { ProfileUser } from '@/model/user'
import React from 'react'
import Avatar from '../main/Avatar'
import FollowButton from './FollowButton'

type Props = {
  user: ProfileUser
}

export default function UserProfile({ user }: Props) {
  const { image, username, name, followers, following, posts } = user
  const info = [
    {
      title: '게시물',
      data: posts,
    },
    {
      title: '팔로워',
      data: followers,
    },
    {
      title: '팔로잉',
      data: following,
    },
  ]
  return (
    <section className="flex justify-center lg:justify-start">
      <div className="mr-12">
        <Avatar size={16} image={image} />
      </div>
      <div className="w-full flex flex-col justify-between py-6">
        <div className="flex mb-2 items-center">
          <h1 className="text-xl mr-7">{username}</h1>
          <FollowButton user={user} />
        </div>
        <ul className="flex">
          {info.map(({ title, data }, index) => (
            <li className="w-28" key={index}>
              {title} <span className="font-bold">{data} </span>
            </li>
          ))}
        </ul>
        <p className="font-bold">{name}</p>
      </div>
    </section>
  )
}
