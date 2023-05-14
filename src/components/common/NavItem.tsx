'use client'
import React from 'react'
import { NavProps } from '../main/AppHeader'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavItem({ menu }: { menu: NavProps }) {
  const path = usePathname()
  const { id, href, activeIcon, icon, subtitle } = menu
  return (
    <li className="group p-2 rounded-xl hover:bg-gray-100 lg:w-full lg:flex my-2">
      <Link href={href} className="flex w-full">
        {path === href ? activeIcon : icon}
        <span className="hidden lg:inline-block ml-5">{subtitle}</span>
      </Link>
    </li>
  )
}
