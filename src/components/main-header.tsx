import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { Button } from './ui/button'

const Header = () => {
    return (
        <header className="justify-between w-full fixed top-0 z-10 flex h-14 items-center border-b bg-background px-4">
            <div className='flex items-center'>
                <SidebarTrigger />
                <h1 className="ml-4 text-lg font-semibold">PostPlatform App</h1>
            </div>
            <Button variant={'outline'} >NAME</Button>
        </header>
    )
}

export default Header