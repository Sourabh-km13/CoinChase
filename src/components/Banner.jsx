import React from 'react'
import bannerimg from "../assets/banner1.jpeg"
export default function Banner() {
  return (
    <>
      <div className='relative h-[25rem] w-full'>
        <img
          className='h-[25rem] w-full object-cover'
          src={bannerimg} />
      </div>
      <div className='absolute top-40 w-full flex flex-col text-center '>
        <div className='text-5xl font-bold my-4'>Crypto Chase</div>
        <div className='text-md font-light'>track prices of cryptocurrencies</div>
      </div>
    </>
  )
}
