'use client'
import { redirect } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    return (
        <div className='w-full flex justify-center items-center gap-10 h-screen flex-col'>
            <h1 className='text-6xl text-white mx-auto text-center '>404 - Page Not Found</h1>
            <button onClick={() => { redirect("/") }} className='text-xl px-4 py-2 rounded-md bg-white text-black'>Home page</button>
        </div>
    )
}

export default NotFound