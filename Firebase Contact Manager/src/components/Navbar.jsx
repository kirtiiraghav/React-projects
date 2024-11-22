import React from 'react'
import logo from '../../public/logo_firebase.svg'

export default function Navbar() {
    return (
        <nav className='h-[60px] rounded bg-white my-2 mx-4'>
            <div className='flex gap-2 justify-center items-center h-full'>
                <img src={logo} alt="app logo" />
                <h1 className='font-bold text-xl font-inter'>Firebase Contact Manager</h1>
            </div>
        </nav>
    )
}
