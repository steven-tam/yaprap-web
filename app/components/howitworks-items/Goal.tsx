import React from 'react'

function Goal() {
  return (
    <div className='border-8 p-4 md:p-10 rounded-3xl text-xl md:text-2xl font-bold text-center shadow-md bg-white'>
        <p className='pb-2'>Recommended Routine:</p>
        <div className='pb-2'>
            <div className='flex justify-between'>
                <p>+ 1 Tongue Twister</p>
                <p>1:30 mins</p>
            </div>
            <div className='flex justify-between'>
                <p>+ 1 Amazing Analogy</p>
                <p>1:30 mins</p>
            </div>
            <div className='flex justify-between'>
                <p>+ 1 Super Storytelling</p>
                <p>1:30 mins</p>
            </div>
            <div className='flex justify-between'>
                <p>+ 1 Yapping</p>
                <p>2 mins</p>
            </div>
            <div className='flex justify-between'>
                <p>+ 1 Rapping</p>
                <p>2 mins</p>
            </div>
        </div>
        <div className='border-b-2' />
        <div className='flex justify-between pt-2'>
            <p>Total</p>
            <p>8:30 mins</p>
        </div>
    </div>
  )
}

export default Goal