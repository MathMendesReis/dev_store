import * as React from 'react'

interface SvgSearchProps extends React.SVGProps<SVGSVGElement> {}
export function SvgSearch({ ...props }: SvgSearchProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.167 15.833a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM17.5 17.5l-3.583-3.583'
        stroke='#71717A'
        strokeWidth={1.66667}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
