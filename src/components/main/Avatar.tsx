'use client'
import React from 'react'
type Props = { image?: string | null; size: number; highlight?: boolean }

export default function Avatar({ image, size, highlight }: Props) {
  const itemSize = size === 9 ? 'small' : size === 7 ? 'middle' : size === 13 ? 'large' : 'big'
  return (
    <div className={getContainerStyle(itemSize, highlight ? highlight : false)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={getImgSizeStyle(itemSize)} src={image || ''} alt="profile" referrerPolicy="no-referrer" />
    </div>
  )
}

function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle = 'rounded-full'
  const highlightStyle = highlight
    ? 'bg-gradient-to-bl from-fuchsia-600 via-ros to-amber-300 flex justify-center items-center'
    : ''
  const sizeStyle =
    size === 'small'
      ? 'w-[26px] h-[26px]'
      : size === 'middle'
      ? 'w-[40px] h-[40px] '
      : size === 'large'
      ? 'w-[68px] h-[68px]'
      : 'w-[150px] h-[150px]'
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`
}

function getImgSizeStyle(size: string): string {
  const baseStyle = 'rounded-full p-[0.1rem] bg-white  object-cover'
  const sizeStyle =
    size === 'small'
      ? 'w-[26px] h-[26px] p-[0.1rem]'
      : size === 'middle'
      ? 'w-[38px] h-[38px] p-[0.1rem]'
      : size === 'large'
      ? 'w-16 h-16 p-[0.2rem]'
      : 'w-36 h-36 p-[0.2rem]'
  return `${baseStyle} ${sizeStyle}`
}
