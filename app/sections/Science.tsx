import React from 'react'
import SciTextBox from '@/app/components/science-items/SciTextBox'
import Citations from '@/components/science-items/Citations'

function Science() {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-b-0 w-full h-screen md:h-96" >
        <SciTextBox />
        <Citations />
    </div>
  )
}

export default Science