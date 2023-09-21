import UserPosts from '@/components/user/UserPosts'
import UserProfile from '@/components/user/UserProfile'
import { getUserForProfile } from '@/service/user'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = { params: { username: string } }

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUserForProfile(username)

  if (!user) {
    notFound()
  }

  return (
    <main className="mt-16 xl:w-3/5 md:ml-16 lg:ml-80">
      <UserProfile user={user} />
      <UserPosts user={user} />
    </main>
  )
}
