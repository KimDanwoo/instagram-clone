import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getFollowingPostsOf, getPost } from '@/service/posts'
import { getUserByUsername } from '@/service/user'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
type Context = {
  params: { id: string }
}
export async function GET(request: NextResponse, context: Context) {
  const session = await getServerSession(authOptions)
  const user = session?.user

  if (!user) {
    return new Response('Authentication Error', { status: 401 })
  }

  return getPost(context.params.id).then((data) => NextResponse.json(data))
}
