import { getPost } from '@/service/posts'
import { withSessionUser } from '@/utils/session'
import { NextRequest, NextResponse } from 'next/server'

type Context = {
  params: { id: string }
}
export async function GET(_: NextRequest, context: Context) {
  return withSessionUser(async (user) => {
    return getPost(context.params.id).then((data) => NextResponse.json(data))
  })
}
