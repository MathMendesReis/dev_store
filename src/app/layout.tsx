import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/features/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MariStore',
  description: 'Loja de utensilios gerais da Mariana',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body
        className={`${inter.className} mx-auto min-h-screen max-w-[1068px] px-4`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
