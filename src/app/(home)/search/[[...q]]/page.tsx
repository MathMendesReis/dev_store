import ListProducts from '@/features/list-products'
import { searchProducts } from '@/mock/search-product'
import React, { Suspense } from 'react'

interface SearchProps {
  searchParams: {
    q: string
  }
}
export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams
  const data = await searchProducts(query)
  return (
    <div className='flex w-full flex-col gap-4'>
      <p className='text-sm'>
        Resultados para: <span className='font-semibold'>{query}</span>
      </p>

      <div className='grid grid-cols-1 gap-4 min-[964px]:grid-cols-2 min-[1068px]:grid-cols-3'>
        <Suspense fallback={<p>Loading feed...</p>}>
          <ListProducts data={data} />
        </Suspense>
      </div>
    </div>
  )
}
