'use client'
import ListProducts from '@/features/list-products'
import { produto } from '@/mock/fecth'
import { searchProducts } from '@/mock/search-product'
import React, { useEffect, useState } from 'react'

interface SearchProps {
  searchParams: {
    q: string
  }
}
export default function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams
  const [data, setData] = useState<produto[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const searchData = await searchProducts(query)
      setData(searchData)
    }
    fetchData()
  }, [query, data])

  return (
    <div className='flex w-full flex-col gap-4'>
      <p className='text-sm'>
        Resultados para: <span className='font-semibold'>{query}</span>
      </p>

      <div className='grid grid-cols-1 gap-4 min-[964px]:grid-cols-2 min-[1068px]:grid-cols-3'>
        {data.length > 0 && <ListProducts data={data} />}
        {data.length < 1 && (
          <div>
            <p>nenhum produto encontrado</p>
          </div>
        )}
      </div>
    </div>
  )
}
