import './globals.css'
import { Open_Sans } from 'next/font/google'
import AppHeader from '@/components/main/AppHeader'
import AuthContext from '../context/AuthContext'
import SWRConfigContext from '@/context/SWRConfigContext'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="flex flex-col md:flex-row ">
        <AuthContext>
          <AppHeader />
          <main className="w-full">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
      </body>
    </html>
  )
}
