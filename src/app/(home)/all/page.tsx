import ListProducts from '@/features/list-products'
import { GetAllProds } from '@/mock/fecth'
import React from 'react'

export default async function Page() {
  const data = await GetAllProds()

  return (
    <div className='grid grid-cols-1 gap-4 min-[964px]:grid-cols-2 min-[1068px]:grid-cols-3'>
      <ListProducts data={data.produtos} />
    </div>
  )
}
