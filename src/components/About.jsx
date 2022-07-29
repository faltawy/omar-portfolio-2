import React from 'react'
import COVER from '../images/main/cover.jpg';
import OMAR from '../images/main/omar.jpeg';
import { ContactMe } from './Header';
function About() {
    return (
        <section className='hero w-full'>
            <div className='w-full h-[175px] rounded-b-xl overflow-hidden group cursor-pointer'>
                <div className='w-full h-full bg-slate-700 relative'>
                    <div className='w-full flex items-center justify-center z-[21] absolute top-0 left-0'>
                        <span className='w-[80%] h-[50px] shadow-[0_5px_5px_rgba(0,0,0,0.5),0_6px_8px_rgba(0,0,0,0.3)] hover:shadow-none transition-all rounded-b-full bg-neutral-700'></span>
                    </div>
                    <span className='absolute inset-0 z-20 bg-neutral-800 bg-opacity-30 group-hover:bg-opacity-0 transition-all w-full h-full'></span>
                    <img src={COVER} className='w-full z-10 h-full absolute top-0 left-0 object-center object-cover' alt="" />
                </div>
            </div>
            <div className="container mx-auto -mt-[120px]">
                <div className='flex items-center flex-col gap-3'>
                    <div className='w-[120px] z-40 h-[120px] rounded-full overflow-hidden'>
                        <img src={OMAR} className='w-full h-full hover:brightness-50 brightness-100 transition-all cursor-pointer object-cover object-center' alt="" />
                    </div>
                    <div className="flex items-center flex-col gap-3 z-40">
                        <h1 className='text-center leading-snug text-4xl text-white'>Omar Tag</h1>
                        <div className="container max-w-xl">
                            <p className='text-center text-stone-200 overflow-ellipsis'>Graphic Designer</p>
                        </div>
                        <ContactMe bg />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About