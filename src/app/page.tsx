import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-fulll h-full flex m-auto flex-col mt-56 gap-12 justify-center items-center'>
      <h1 className='text-5xl text-amber-400 text-center text-balance w-full'>Create posts in this app by just login into the app</h1>
      <Link href={'/login'} className='px-8 py-2 hover: text-black text-xl font-medium  bg-white rounded-md '>Login</Link>
    </div>
  )
}

export default page