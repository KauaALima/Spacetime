import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import './globals.css'
import { Copyright } from './components/Copyright'
import { Hero } from './components/Hero'
import { Singin } from './components/SingIn'
import { cookies } from 'next/headers'
import { Profile } from './components/Profile'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiamjure = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bjamjure',
})

export const metadata: Metadata = {
  title: 'Spacetime',
  description: 'Capsula do tempo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiamjure.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-rows-2 md:grid-cols-2 md:grid-rows-none ">
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {isAuthenticated ? <Profile /> : <Singin />}

            <Hero />

            <Copyright />
          </div>

          <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
