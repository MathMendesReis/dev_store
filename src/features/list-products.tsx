import { produto } from '@/mock/fecth'
import React from 'react'
import {
  CardProductImg,
  CardProductPrice,
  CardProductRoot,
} from './card-product'

interface ListProductsProps {
  data: produto[]
}
export default function ListProducts({ data }: ListProductsProps) {
  return (
    <>
      {data.map(({ id, nome, preco, url_img }) => {
        return (
          <CardProductRoot key={id}>
            <CardProductImg
              src={url_img}
              height={445}
              width={445}
            />
            <div className='absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
              <span className='truncate text-sm font-extrabold text-white dark:text-gray-100'>
                {nome}
              </span>
              <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>
                <CardProductPrice price={preco} />
              </span>
            </div>
          </CardProductRoot>
        )
      })}
    </>
  )
}
