'use client'
import React from 'react'
import LookIcon from '@/components/icons/LookIcon'
import AddPostIcon from '@/components/icons/AddPostIcon'
import ActiveLookIcon from '../icons/ActiveLookIcon'
import ActiveCreateIcon from '../icons/ActiveCreateIcon'
import NavItem from '../common/NavItem'
import MainLogo from '../common/MainLogo'
import { useSession, signIn, signOut } from 'next-auth/react'

const menus = [
  {
    id: 1,
    href: '/search',
    icon: <LookIcon className="group-hover:scale-110" />,
    activeIcon: <ActiveLookIcon className="group-hover:scale-110" />,
    subtitle: '검색',
  },
  {
    id: 2,
    href: '/create',
    icon: <AddPostIcon className="group-hover:scale-110" />,
    activeIcon: <ActiveCreateIcon className="group-hover:scale-110" />,
    subtitle: '만들기',
  },
]

export interface NavProps {
  id: number
  href: string
  icon: React.ReactElement
  activeIcon: React.ReactElement
  subtitle: string
}

export default function AppHeader() {
  const { data: session } = useSession()
  return (
    <header className="flex justify-between md:flex-col h-16 md:h-screen md:w-16 md:border-r lg:w-80 border-b md:p-3 md:justify-start lg:pt-10">
      <MainLogo />
      <ul className="flex md:flex-col items-center w-40 justify-around md:w-full lg:items-start lg:p-2 lg:pt-11">
        {menus.map((menu, idx) => (
          <NavItem menu={menu} key={idx} />
        ))}
        <li className="group p-2 rounded-xl hover:bg-gray-100 lg:w-full lg:flex my-2">
          {session ? (
            <button className=" text-xs font-bold" onClick={() => signOut()}>
              sign out
            </button>
          ) : (
            <button className=" text-xs font-bold" onClick={() => signIn()}>
              sign in
            </button>
          )}
        </li>
      </ul>
    </header>
  )
}
