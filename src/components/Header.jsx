import React from 'react'
import { FaPhone } from 'react-icons/fa'
export function ContactMe() {
    return (<button onClick={()=>{window.scrollTo(0,document.body.scrollHeight)}} className='flex items-center gap-1 text-white bg-neutral-500 px-2 py-1 font-bold'>
        <span>Contact Me</span>
        <i><FaPhone /></i>
    </button>)
}
function Header() {
    return (
        <header className='h-[40px] z-50 bg-neutral-800 sticky top-0 left-0 w-full shadow-sm flex flex-col items-start justify-center px-3' >
            <div className='container mx-auto flex flex-row items-start justify-between'>
                <div className="flex items-center leading-tight">
                    <h1 className='font-bold whitespace-nowrap text-white text-lg text-start first-letter:font-extrabold'>Omar Tag</h1>
                </div>
                <ContactMe />
            </div>
        </header>
    )
}
export default Header