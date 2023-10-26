import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6'>
      <Link href={'/'} className='relative group col-span-6  row-span-6 rounded-lg bg-zinc-900 overflow-hidden'>
        <Image src={'/moletom-ai-side.png'} alt='' width={800} height={800} quality={100} className='group-hover:scale-105 transition-transform duration-500' />
        <div className=' absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
          <span className='text-sm truncate'>Moleton ia side</span>
          <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>R$129,00</span>
        </div>
      </Link>
        <Link href={'/'} className='group relative col-span-3  row-span-3 rounded-lg bg-zinc-900 overflow-hidden'>
          <Image src={'/moletom-ai-side.png'} alt='' width={450} height={450} quality={100} className='group-hover:scale-105 transition-transform duration-500' />
        <div className=' absolute bottom-28 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
          <span className='text-sm truncate'>Moleton ia side</span>
          <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>R$129,00</span>
        </div>
        </Link>
        <Link href={'/'} className='group relative col-span-3  row-span-3 rounded-lg bg-zinc-900 overflow-hidden'>
          <Image src={'/moletom-ai-side.png'} alt='' width={450} height={450} quality={100} className='group-hover:scale-105 transition-transform duration-500' />
        <div className=' absolute bottom-20 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
          <span className='text-sm truncate'>Moleton ia side</span>
          <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>R$129,00</span>
        </div>
        </Link>
    </div>
  )
}
