import { produto } from '@/mock/fecth'
import React from 'react'
import {
  CardProductImg,
  CardProductPrice,
  CardProductRoot,
} from './card-product'
import Link from 'next/link'

interface HighligthProdProps {
  data: produto
}

export default function HighligthProd({
  data: { id, nome, preco, url_img },
}: HighligthProdProps) {
  return (
    <>
      <Link
        href={{
          pathname: `/product/${id}`,
        }}
      >
        <CardProductRoot key={id}>
          <CardProductImg src={url_img} />

          <div className='absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-zinc-950 p-1 pl-5 dark:bg-black/60'>
            <span className='truncate text-sm font-extrabold text-white dark:text-gray-100'>
              {nome}
            </span>
            <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>
              <CardProductPrice price={preco} />
            </span>
          </div>
        </CardProductRoot>
      </Link>
    </>
  )
}
