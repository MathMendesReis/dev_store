import { CardProductPrice } from '@/features/card-product'
import { searchProducts } from '@/mock/search-product'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface SearchProps {
  searchParams: {
    q: string
  }
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams
  console.log(query)
  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className='flex flex-col gap-4'>
      <p className='text-sm'>
        Resultados para: <span className='font-semibold'>{query}</span>
      </p>

      <div className='grid grid-cols-1 gap-4 min-[964px]:grid-cols-2 min-[1068px]:grid-cols-3'>
        {products.map(product => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className='group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900'
            >
              <Image
                src={product.url_img}
                className='transition-transform duration-500 group-hover:scale-105'
                width={480}
                height={480}
                quality={100}
                alt=''
              />

              <div className='absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
                <span className='truncate text-sm font-extrabold text-white dark:text-gray-100'>
                  {product.nome}
                </span>
                <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>
                  <CardProductPrice price={product.preco} />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
