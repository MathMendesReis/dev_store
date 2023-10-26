import Link from 'next/link'
import React from 'react'
import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-5'>
      <div className='flex items-center gap-5'>
        <Link href={'/'}>
          <span className='text-2xl font-extrabold text-white'>devstore</span>
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <form className='flex w-[320px] items-center rounded-full bg-zinc-900 p-3 ring-zinc-700 gap-4'>
          <Search className='w-5 h-5 text-zinc-500'  />
          <input placeholder='buscar produtos' className='flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500' />
        </form>
      </div>
      <div className='flex items-center gap-4 ml-auto'>
        <div className='flex items-center gap-2'>
          <ShoppingBag className='h-4 w-4'/>
          <span>(0)</span>
        </div>
      </div>
      <div className='w-px h-4 bg-zinc-700'></div>
      <Link href={'/'} className='flex gap-4'>
        <p>Account</p>
        <Image src="https://avatars.githubusercontent.com/u/89950944?v=4" alt="" width={24} height={24} className='rounded-full'/>
      </Link>
    </header>
  )
}
