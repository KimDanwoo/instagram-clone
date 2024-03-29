import './globals.css'
import { Open_Sans } from 'next/font/google'
import AppHeader from '@/components/main/AppHeader'
import AuthContext from '../context/AuthContext'
import SWRConfigContext from '@/context/SWRConfigContext'
import { Metadata } from 'next'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Instagram',
    template: 'Instagram | %s',
  },
  description: 'Instagram photos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.className}>
      <AuthContext>
        <body className="flex flex-col md:flex-row ">
          <AppHeader />
          <main className="w-full">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
          <div id="portal" />
        </body>
      </AuthContext>
    </html>
  )
}
