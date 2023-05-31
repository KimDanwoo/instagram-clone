import Link from 'next/link'
import React from 'react'
import AppLogo from '../ui/icons/AppLogo'
import AppLogoIcon from '../ui/icons/AppLogoIcon'

export default function MainLogo() {
  return (
    <div className="flex">
      <h1 className="flex items-center px-5 md:hidden lg:block">
        <Link href="/">
          <AppLogo />
        </Link>
      </h1>
      <h1 className="group hidden md:flex justify-center items-center lg:hidden mb-11 p-2 rounded-xl hover:bg-gray-100">
        <Link href="/">
          <AppLogoIcon className="group-hover:scale-110" />
        </Link>
      </h1>
    </div>
  )
}
