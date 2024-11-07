import React from 'react'
import SciTextBox from '@/app/components/science-items/SciTextBox'
import Citations from '@/components/science-items/Citations'

function Science() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen" >
        <SciTextBox />
        <Citations />
    </div>
  )
}

export default Science