'use client'
import ListProducts from '@/features/list-products'
import { produto } from '@/mock/fecth'
import { searchProducts } from '@/mock/search-product'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Search() {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') as string

  const [data, setData] = useState<produto[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const searchData = await searchProducts(q)
      setData(searchData)
    }
    fetchData()
  }, [q])

  console.log('Query recebida:', q)
  return (
    <div className='flex w-full flex-col gap-4'>
      <p className='text-sm'>
        Resultados para: <span className='font-semibold'>{q}</span>
      </p>

      <div className='grid grid-cols-1 gap-4 min-[964px]:grid-cols-2 min-[1068px]:grid-cols-3'>
        {data.length > 0 && <ListProducts data={data} />}
      </div>
    </div>
  )
}
