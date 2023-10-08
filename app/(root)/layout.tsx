import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// local imports
import '../globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Help Me Out',
  description: 'Best screen recording application in the industry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
