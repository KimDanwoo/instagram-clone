import SideBar from '@/components/layout/SideBar'
import FollowingBar from '@/components/main/FollowingBar'
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
        <div className="w-full xl:w-3/5">
          <FollowingBar />
          <div>하이루</div>
        </div>
        <SideBar user={user} />
      </div>
    </section>
  )
}
