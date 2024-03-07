import Signin from '@/components/auth/Signin'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { getProviders } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
  title: 'Signin',
  description: 'SignUp or Login to Instagram',
}

type Props = {
  searchParams: {
    callbackUrl: string
  }
}

export default async function SignInPage({ searchParams: { callbackUrl } }: Props) {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  const providers = (await getProviders()) ?? {}
  return (
    <section className="flex justify-center mt-[30%]">
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>
  )
}
