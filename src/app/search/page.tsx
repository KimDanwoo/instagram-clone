import UserSearch from '@/components/search/UserSearch'
import SideBar from '@/components/layout/SideBar'
import React from 'react'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'User Search',
  description: 'Search users to follow',
}

export default async function page() {
  const session = await getServerSession(authOptions)
  const user = session?.user

  if (!user) {
    redirect('/auth/signin')
  }
  return (
    <section className="w-full mt-4">
      <div className="flex">
        <div className="w-full mt-12 xl:w-3/5 md:mt-0 md:ml-16 lg:ml-80">
          <UserSearch />
        </div>
        <SideBar user={user} />
      </div>
    </section>
  )
}
