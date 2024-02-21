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
          <li
            key={id}
            className='list-none grid-cols-4 grid-rows-2 bg-zinc-900 min-[1000px]:col-span-1 min-[1000px]:row-span-1'
          >
            <CardProductRoot>
              <CardProductImg
                src={url_img}
                height={445}
                width={445}
              />
              <div className='absolute bottom-[15%] right-[10%] flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
                <p>{nome}</p>
                <button className='rounded-3xl bg-violet-500 px-4 py-1'>
                  <CardProductPrice price={preco} />
                </button>
              </div>
            </CardProductRoot>
          </li>
        )
      })}
    </>
  )
}
