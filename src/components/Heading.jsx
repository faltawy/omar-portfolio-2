import React from 'react'

function Heading({label}) {
  return (
    <div className='flex flex-col gap-1 w-fit'>
                <span className='w-full h-0.5 bg-black'></span>
                <h2 className='font-bold text-3xl text-neutral-300'>{label}</h2>
                <span className='w-full h-0.5 bg-black'></span>
            </div>
  )
}

export default Heading