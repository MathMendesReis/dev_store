import React from 'react'
import { SvgSearch } from '@/components/icons/search'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='mb-5 mt-9 flex min-h-11 w-full  flex-col items-center justify-start gap-5 py-2 min-[400px]:flex-row'>
      <Link
        href={{
          pathname: '/',
        }}
      >
        <h1 className='text-2xl font-extrabold'>maristore</h1>
      </Link>
      <label className='flex max-w-80 items-center justify-center gap-3 rounded-3xl bg-white px-5 py-3 dark:bg-zinc-900'>
        <SvgSearch />
        <input
          type='text'
          name=''
          id=''
          className='w-4/5 bg-white outline-none dark:bg-transparent'
          placeholder='buscar produto...'
        />
      </label>
      <div className='flex w-full items-center justify-end'>
        <Link
          href={{
            pathname: '/all',
          }}
        >
          <span>Todos os produtos</span>
        </Link>
      </div>
    </header>
  )
}
