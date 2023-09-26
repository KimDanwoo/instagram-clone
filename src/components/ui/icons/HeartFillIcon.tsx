'use client'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

type Props = {
  className?: string
}

export default function HeartFillIcon({ className }: Props) {
  return <AiFillHeart className={`${className || 'text-3xl'} text-red-600`} />
}
