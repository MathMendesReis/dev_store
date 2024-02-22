import React from 'react'
import { SvgSearch } from '@/components/icons/search'
import Link from 'next/link'
import { SearchForm } from './search-form'

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
      <SearchForm />
      <div className='flex w-full items-center justify-end max-[1000px]:hidden'>
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
