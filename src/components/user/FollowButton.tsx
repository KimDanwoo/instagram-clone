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
  const { user: loggedInUser } = useMe()
  const showButton = loggedInUser?.username !== username
  const isFollowing = loggedInUser?.following.find(
    (item) => item.username === username
  )
  if (!showButton) {
    return null
  }

  if (isFollowing) {
    return <Button title="언팔로우" onClick={() => {}} red={true} />
  }

  return <Button title="팔로우" onClick={() => {}} red={false} />
}
