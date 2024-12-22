import React from 'react'

export default function Banner() {
  return (
    <>
      <div className='relative h-[25rem] w-full'>
        <img
          className='h-[25rem] w-full object-cover'
          src="https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className='absolute top-40 w-full flex flex-col text-center '>
        <div className='text-5xl font-bold my-4'>Crypto Chase</div>
        <div className='text-md font-light'>track prices of cryptocurrencies</div>
      </div>
    </>
  )
}
