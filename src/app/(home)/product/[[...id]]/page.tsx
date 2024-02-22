'use client'
import WhatsappLogo from '@/components/icons/whatssapLogo'
import {
  CardProductImg,
  CardProductPrice,
  CardProductRoot,
} from '@/features/card-product'
import { GetAllProds, produto } from '@/mock/fecth'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface ProductProps {
  params: {
    id: string
  }
}
export default function Product({ params }: ProductProps) {
  const [product, setProduct] = useState<produto>()
  const [mainImage, setMainImage] = useState<string>('')
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllProds()
      const idFormat = parseInt(params.id)
      const prod = data.produtos.find(item => item.id === idFormat)
      if (prod) {
        setProduct(prod)
        setMainImage(prod.url_img)
      }
    }

    fetchData()
  }, [params.id])
  const handleImageClick = (newImage: string) => {
    setMainImage(newImage)
  }
  return (
    <main className='mt-10 min-h-screen w-full'>
      {product && (
        <CardProductRoot className='flex flex-wrap'>
          <CardProductImg src={mainImage} />
          <div className='mt-5 flex h-[526px] w-full flex-col items-center gap-8 min-[1068px]:mt-28 min-[1068px]:w-[350px]'>
            <div>
              <p className='text-2xl font-extrabold text-black dark:text-white'>
                {product?.nome}
              </p>
              <p className='text-base font-extralight text-black dark:text-zinc-400'>
                Moletom fabricado com 88% de algodão e 12% de poliéster.
              </p>
            </div>
            <div className='flex h-10 w-[266px] items-center justify-center gap-2'>
              <span className='flex h-full w-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>
                <CardProductPrice price={product?.preco as number} />
              </span>
            </div>
            <div className='flex items-center justify-center gap-5'>
              {product.imagens.map((image: string, index: number) => (
                <div
                  key={index}
                  className='h-20 w-20 cursor-pointer border p-3 hover:border-blue-600'
                  onMouseEnter={() => handleImageClick(image)}
                >
                  <Image
                    alt=''
                    src={image}
                    height={70}
                    width={70}
                  />
                </div>
              ))}
            </div>
            <div className='mb-[30%] mt-auto w-11/12'>
              <button className='flex w-full items-center justify-center gap-2 rounded-2xl bg-green-700/90 px-3 py-3 transition-all hover:bg-green-700'>
                <WhatsappLogo fill='white' />
                <span className='text-sm font-extrabold text-gray-100'>
                  chame no whatsapp
                </span>
              </button>
            </div>
          </div>
        </CardProductRoot>
      )}
    </main>
  )
}
