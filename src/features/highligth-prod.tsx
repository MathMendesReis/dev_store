import { produto } from '@/mock/fecth'
import React from 'react'
import {
  CardProductImg,
  CardProductPrice,
  CardProductRoot,
} from './card-product'

interface HighligthProdProps {
  data: produto
}
export default function HighligthProd({
  data: { id, nome, preco, url_img },
}: HighligthProdProps) {
  return (
    <li key={id}>
      <CardProductRoot>
        <CardProductImg src={url_img} />
        <div className='absolute bottom-[25%] right-[15%] flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-1'>
          <p>{nome}</p>
          <button className='rounded-3xl bg-violet-500 px-4 py-1'>
            <CardProductPrice price={preco} />
          </button>
        </div>
      </CardProductRoot>
    </li>
  )
}
