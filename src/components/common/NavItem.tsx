'use client'
import React from 'react'
import { NavProps } from '../main/AppHeader'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavItem({ menu }: { menu: NavProps }) {
  const path = usePathname()
  const { href, activeIcon, icon, subtitle } = menu
  return (
    <li className={liStyle}>
      <Link href={href} className={linkStyle}>
        {path === href ? activeIcon : icon}
        <span className={spanStyle}>{subtitle}</span>
      </Link>
    </li>
  )
}

const linkStyle = 'flex w-full'
const spanStyle = 'hidden lg:inline-block ml-5'
const liStyle = 'group p-2 rounded-xl hover:bg-gray-100 lg:w-full lg:flex my-2'
