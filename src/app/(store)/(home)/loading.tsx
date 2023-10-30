import React from 'react'
import Skeletn from '../components/skeleton'

export default function LoadingHome() {
  return (
    <div className='grid h-full grid-cols-9 grid-rows-6 gap-6 '>
      <Skeletn className='col-span-6 h-[760px]' />
      <Skeletn className='col-span-3 ' />
      <Skeletn className='col-span-3 ' />
    </div>
  )
}
