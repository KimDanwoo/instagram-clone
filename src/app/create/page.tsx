import React from 'react'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import NewPost from '@/components/create/NewPost'
import SideBar from '@/components/layout/SideBar'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export const metadata: Metadata = {
  title: 'Create Post',
  description: 'Create a new Post',
}

export default async function NewPostPage() {
  const session = await getServerSession(authOptions)
  const user = session?.user
  if (!user) {
    redirect('/auth/signin')
  }

  return (
    <section className="w-full mt-4">
      <div className="flex">
        <div className="w-full mt-12 xl:w-3/5 md:mt-0 md:ml-16 lg:ml-80">
          <div className="w-full h-full m-w-[600px] max-w-xl mx-auto flex flex-col px-14 py-10">
            <NewPost user={user} />
          </div>
        </div>
        <SideBar user={user} />
      </div>
    </section>
  )
}
