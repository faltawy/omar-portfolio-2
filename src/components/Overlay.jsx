import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'


function Overlay({ image_url, toggle, expanded }) {
    if (expanded){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }
    return (
        <div className={`fixed z-[5000] h-screen w-full inset-0 bg-opacity-50 overflow-auto items-center bg-gray-700 justify-center flex ${!expanded ? 'overlay_softhide' : 'overlay_softshow'}`}>
            <button onClick={toggle} className='absolute left-3 top-3 z-20 hover:opacity-100 opacity-60 bg-black text-white rounded-full w-[50px] h-[50px] flex items-center justify-center'><AiOutlineClose size={30} /></button>
            <div className="max-w-full absolute top-0">
                <img src={image_url} alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}


export default Overlay