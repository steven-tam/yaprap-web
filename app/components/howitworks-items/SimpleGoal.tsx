import React from 'react'

function SimpleGoal() {
  return (
    <div className='border-8 p-4 md:p-10 rounded-3xl text-lg md:text-2xl font-bold text-center bg-white shadow-md'>
        <p className='pb-2'>Flex Routine:</p>
        <div className='pb-2'>
            <div className='flex justify-between'>
                <p>+ 1 Yapping</p>
                <p>5 mins</p>
            </div>
            <div className='flex justify-between'>
                <p>+ 1 Rapping</p>
                <p>3:30 mins</p>
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

export default SimpleGoal