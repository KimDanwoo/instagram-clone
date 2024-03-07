'use client'
import React, { useState, useTransition } from 'react'
import { ProfileUser } from '@/model/user'
import Button from '../ui/button/Button'
import useMe from '@/hooks/useMe'
import { useRouter } from 'next/navigation'
import { PulseLoader } from 'react-spinners'

type Props = {
  user: ProfileUser
}
export default function FollowButton({ user }: Props) {
  const { username } = user
  const { user: loggedInUser, toggleFollow } = useMe()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)
  const isUpdating = isPending || isFetching
  const showButton = loggedInUser?.username !== username
  const following = loggedInUser && loggedInUser.following?.find((item) => item.username === username)

  const handleFollow = async () => {
    setIsFetching(true)
    await toggleFollow(user.id, !following)
    setIsFetching(false)
    startTransition(() => {
      router.refresh()
    })
  }

  if (!showButton) {
    return null
  }

  if (following) {
    return (
      <div className="relative">
        {isUpdating && (
          <div className="absolute inset-0 flex justify-center items-center">
            <PulseLoader size={6} />
          </div>
        )}
        <Button title="언팔로우" onClick={handleFollow} red={true} disabled={isUpdating} />
      </div>
    )
  }

  return (
    <div className="relative">
      {isUpdating && (
        <div className="absolute inset-0 flex justify-center items-center">
          <PulseLoader size={6} />
        </div>
      )}
      <Button title="팔로우" onClick={handleFollow} red={false} disabled={isUpdating} />
    </div>
  )
}
