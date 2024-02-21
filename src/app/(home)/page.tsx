import { GridTileImage } from '@/components/ui/tile'
import HighligthProd from '@/features/highligth-prod'
import ListProducts from '@/features/list-products'
import { GetAllProds } from '@/mock/fecth'
import React from 'react'

export default async function Page() {
  const data = await GetAllProds()
  const {
    produtos: [highligth, ...rest],
  } = data

  const DataSlice = data.produtos.slice(1, 3)

  return (
    <>
      <main className=''>
        <ul className='grid w-full grid-cols-4 grid-rows-2 gap-5 max-[1000px]:hidden'>
          <div className='col-span-3 row-span-2 bg-zinc-900'>
            <HighligthProd data={highligth} />
          </div>

          <ListProducts data={DataSlice} />
        </ul>
        <div className=' mt-8 w-full overflow-x-auto pb-6 pt-1 '>
          <ul className='animate-carousel flex gap-4'>
            {data.produtos.map(({ id, nome, preco, url_img }) => (
              <li
                key={id}
                className='relative aspect-square h-[30vh] max-h-[275px] w-full'
              >
                <div className='relative h-full w-full '>
                  <GridTileImage
                    alt={nome}
                    label={{
                      title: nome,
                      currencyCode: preco,
                    }}
                    src={url_img}
                    fill
                    sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <main>
        {/* <ul className='min-[1000px]:hidden flex flex-col gap-4 items-center justify-center list-none'>
          <ListProducts data={data.produtos} />
        </ul> */}
      </main>
    </>
  )
}
