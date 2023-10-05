'use client'
import React from 'react'
import { ProfileUser } from '@/model/user'
import Button from '../ui/button/Button'
import useMe from '@/hooks/useMe'

type Props = {
  user: ProfileUser
}
export default function FollowButton({ user }: Props) {
  const { username } = user
  const { user: loggedInUser, toggleFollow } = useMe()
  const showButton = loggedInUser?.username !== username
  const following = loggedInUser?.following.find(
    (item) => item.username === username
  )
  const handleFollow = () => {
    toggleFollow(user.id, !following)
  }

  if (!showButton) {
    return null
  }

  if (following) {
    return <Button title="언팔로우" onClick={handleFollow} red={true} />
  }

  return <Button title="팔로우" onClick={handleFollow} red={false} />
}
