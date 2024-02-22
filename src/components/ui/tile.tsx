import { CardProductPrice } from '@/features/card-product'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean
  active?: boolean
  label?: {
    title: string
    currencyCode: number
    position?: 'bottom' | 'center'
  }
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-transparent hover:border-blue-600',
        {
          relative: label,
          'border-2 border-blue-600': active,
          'border-neutral-200 dark:border-neutral-800': !active,
        },
      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out group-hover:scale-105':
              isInteractive,
          })}
          {...props}
        />
      ) : null}
      {label ? (
        <>
          <div className='absolute bottom-10 right-10 flex h-12 max-w-[200px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
            <span className='truncate text-sm font-extrabold text-white dark:text-gray-100'>
              {label.title}
            </span>
            <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>
              <CardProductPrice price={label.currencyCode} />
            </span>
          </div>
        </>
      ) : null}
    </div>
  )
}
