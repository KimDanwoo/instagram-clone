'use client'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

type Props = {
  className?: string
}

export default function HeartIcon({ className }: Props) {
  return <AiOutlineHeart className={className || 'text-3xl'} />
}
