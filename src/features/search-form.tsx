'use client'

import { SvgSearch } from '@/components/icons/search'

export function SearchForm() {
  return (
    <form
      // onChange={handleSearch}
      className='flex w-[320px] items-center gap-3 rounded-full bg-white px-5 py-3 ring-zinc-700 dark:bg-zinc-900'
    >
      <SvgSearch className='h-5 w-5 text-zinc-500' />

      <input
        name='q'
        defaultValue={''}
        placeholder='Buscar produtos...'
        className='flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500'
        required
      />
    </form>
  )
}
