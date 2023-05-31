'use client'
import React from 'react'
import LookIcon from '@/components/ui/icons/LookIcon'
import AddPostIcon from '@/components/ui/icons/AddPostIcon'
import ActiveLookIcon from '../ui/icons/ActiveLookIcon'
import ActiveCreateIcon from '../ui/icons/ActiveCreateIcon'
import NavItem from '../common/NavItem'
import MainLogo from '../common/MainLogo'
import { useSession, signIn, signOut } from 'next-auth/react'
import Avatar from './Avatar'
import Link from 'next/link'

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
  const user = session?.user

  return (
    <header className={headerStyle}>
      <MainLogo />
      <ul className={ulStyle}>
        {menus.map((menu, idx) => (
          <NavItem menu={menu} key={idx} />
        ))}

        {user ? (
          <li className={liStyle}>
            <Link href={`/user/${user?.username}`} className="flex">
              <Avatar image={user?.image} size={9} />
              <span className="ml-5 hidden lg:inline-block">프로필</span>
            </Link>
          </li>
        ) : (
          <li className='group p-8 rounded-xl hover:bg-gray-100 lg:w-full lg:flex"' />
        )}

        <li className={liStyle}>
          {session ? (
            <button className={buttonStyle} onClick={() => signOut()}>
              로그아웃
            </button>
          ) : (
            <button className={buttonStyle} onClick={() => signIn()}>
              로그인
            </button>
          )}
        </li>
      </ul>
    </header>
  )
}

const ulStyle =
  'flex md:flex-col items-center w-48 justify-around md:w-full lg:items-start lg:p-2 lg:pt-11'

const liStyle = 'group p-2 rounded-xl hover:bg-gray-100 lg:w-full lg:flex my-2'
const headerStyle =
  'flex justify-between w-full md:flex-col h-16 md:h-screen md:w-16 md:border-r lg:w-80 border-b md:p-3 md:justify-start lg:pt-10 fixed bg-white z-10'
const buttonStyle = 'text-xs font-bold'
