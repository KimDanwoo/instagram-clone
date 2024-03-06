'use client'
import { ClientSafeProvider, signIn } from 'next-auth/react'
import React from 'react'

type Props = {
  providers: Record<string, ClientSafeProvider>
  callbackUrl: string
}

export default function Signin({ providers, callbackUrl }: Props) {
  console.log(providers, callbackUrl)
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div
          key={provider.name}
          className=" border p-[0.3rem] rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
        >
          <button
            onClick={() => signIn(provider.id, { callbackUrl })}
            className="bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}
