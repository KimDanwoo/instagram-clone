import UserPosts from '@/components/user/UserPosts'
import UserProfile from '@/components/user/UserProfile'
import { getUserForProfile } from '@/service/user'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React, { cache } from 'react'

type Props = { params: { username: string } }

const getUser = cache(async (username: string) => getUserForProfile(username))

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUser(username)

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

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUser(username)
  return {
    title: `${user?.name} (@${user?.username}) instagram photos`,
    description: `${user?.name}'s instagram posts`,
  }
}
