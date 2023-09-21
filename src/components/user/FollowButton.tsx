'use client'
import { HomeUser, ProfileUser } from '@/model/user'
import React from 'react'
import useSWR from 'swr'
import Button from '../ui/button/Button'

type Props = {
  user: ProfileUser
}
export default function FollowButton({ user }: Props) {
  const { username } = user
  const { data: loggedInUser } = useSWR<HomeUser>('/api/me')
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
