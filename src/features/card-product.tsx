import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

interface CardProductRootProps {
  children: React.ReactNode
}
function CardProductRoot({ children }: CardProductRootProps) {
  return (
    <div className='group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900'>
      {children}
    </div>
  )
}

interface CardProductImgProps {
  src: string | StaticImport
  alt?: string
  width?: number
  height?: number
}
function CardProductImg({
  src,
  alt = '',
  height = 700,
  width = 700,
}: CardProductImgProps) {
  return (
    <div className=' flex h-full items-end justify-center'>
      <Image
        src={src}
        alt={alt}
        width={height}
        height={width}
        quality={100}
      />
    </div>
  )
}

interface CardProductPriceProps {
  price: number
}
function CardProductPrice({ price }: CardProductPriceProps) {
  return (
    <p className='font-extrabold text-white'>
      {price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })}
    </p>
  )
}
interface CardProductaNameProps {
  nome: string
}
function CardProductName({ nome }: CardProductaNameProps) {
  return <p className='text-sm'>{nome}</p>
}

export { CardProductRoot, CardProductImg, CardProductPrice, CardProductName }
