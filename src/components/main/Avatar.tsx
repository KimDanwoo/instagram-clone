import React from 'react'
type Props = { image?: string | null; size: number }
export default function Avatar({ image, size }: Props) {
  return (
    <div
      className={`w-${size} h-${size}  rounded-full bg-gradient-to-bl from-fuchsia-600 via-ros to-amber-300`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-full p-[0.1rem]"
        src={image ?? ''}
        alt="profile"
        referrerPolicy="no-referrer"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
    </div>
  )
}
