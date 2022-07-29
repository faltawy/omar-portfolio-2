import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

function Footer() {

    return (
        <footer className='w-full mt-8 relative h-fit bg-neutral-800 py-3'>
            <div className="container flex items-center justify-center h-full text-white mx-auto">
                <div className='text-center mt-2 text-sm'>
                    <p>All Rights Reserved</p>
                    <p>Made By Ahmed Hassan</p>
                </div>
            </div>
            <div className="absolute -top-1 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
                <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} className='group p-2 bg-neutral-800 rounded-full'>
                    <span className='text-white transition-all group-hover:text-opacity-50'><FaArrowUp size={30} /></span>
                </button>
            </div>
        </footer>
    )
}

export default Footer