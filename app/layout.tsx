import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'


const analogistFont = localFont({
  src: "../public/fonts/Analogist.ttf",
  variable: "--analogist"
})
const vogueFont = localFont({
  src: "../public/fonts/Classyvogueregular.ttf",
  variable: "--vogue"
})


export const metadata: Metadata = {
  title: 'Abhedya',
  description: 'Online cryptic hunt under Prodyogiki',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${analogistFont.variable} font-serif`}>{children}</body>
    </html>
  )
}
