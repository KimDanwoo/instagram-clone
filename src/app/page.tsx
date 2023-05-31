import SideBar from '@/components/layout/SideBar'
import FollowingBar from '@/components/main/FollowingBar'
import PostList from '@/components/posts/PostList'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const session = await getServerSession(authOptions)
  const user = session?.user

  if (!user) {
    redirect('/auth/signin')
  }

  return (
    <section className="w-full mt-4">
      <div className="flex">
        <div className="w-full mt-12 xl:w-3/5 md:mt-0 md:ml-16 lg:ml-80">
          <FollowingBar />
          <PostList />
        </div>
        <SideBar user={user} />
      </div>
    </section>
  )
}
