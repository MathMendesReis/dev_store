import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

interface CardProductRootProps {
  children: React.ReactNode
  className?: string
}
function CardProductRoot({ children, className = '' }: CardProductRootProps) {
  return (
    <li
      className={`group relative flex h-full items-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-transparent ${className}`}
    >
      {children}
    </li>
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
  height = 650,
  width = 650,
}: CardProductImgProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={height}
      height={width}
      quality={100}
      className='relative bottom-0 object-contain transition duration-300 ease-in-out group-hover:scale-105'
    />
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
  return <p className='text-sm text-black dark:text-gray-100'>{nome}</p>
}

export { CardProductRoot, CardProductImg, CardProductPrice, CardProductName }
