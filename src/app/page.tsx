import MainPosts from '@/components/layout/MainPosts'
import SideBar from '@/components/layout/SideBar'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const session = await getServerSession()
  const user = session?.user

  if (!user) {
    redirect('/auth/signin')
  }

  return (
    <section className="w-full mt-8">
      <div className="flex">
        <MainPosts />
        <SideBar user={user} />
      </div>
    </section>
  )
}
