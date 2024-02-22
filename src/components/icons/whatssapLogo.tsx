import * as React from 'react'

interface WhatsappLogoProps extends React.SVGProps<SVGSVGElement> {}

function WhatsappLogo({ ...props }: WhatsappLogoProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={32}
      height={32}
      viewBox='0 0 256 256'
      {...props}
    >
      <path d='M187.58 144.84l-32-16a8 8 0 00-8 .5l-14.69 9.8a40.55 40.55 0 01-16-16l9.8-14.69a8 8 0 00.5-8l-16-32A8 8 0 00104 64a40 40 0 00-40 40 88.1 88.1 0 0088 88 40 40 0 0040-40 8 8 0 00-4.42-7.16zM152 176a72.08 72.08 0 01-72-72 24 24 0 0119.29-23.54l11.48 23L101 118a8 8 0 00-.73 7.51 56.47 56.47 0 0030.15 30.15A8 8 0 00138 155l14.61-9.74 23 11.48A24 24 0 01152 176zM128 24a104 104 0 00-91.82 152.88l-11.35 34.05a16 16 0 0020.24 20.24l34.05-11.35A104 104 0 10128 24zm0 192a87.87 87.87 0 01-44.06-11.81 8 8 0 00-6.54-.67L40 216l12.47-37.4a8 8 0 00-.66-6.54A88 88 0 11128 216z' />
    </svg>
  )
}

export default WhatsappLogo
