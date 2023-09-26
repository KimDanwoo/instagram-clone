import React from 'react'
import { RiBookMarkFill } from 'react-icons/ri'
type Props = {
  className?: string
}
export default function BookmarkFillIcon({ className }: Props) {
  return <RiBookMarkFill className={className || 'text-3xl'} />
}
