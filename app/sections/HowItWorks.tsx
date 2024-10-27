import React from 'react'
import HowTextBox from '@/components/howitworks-items/HowTextBox'
import HowImage from '@/components/howitworks-items/HowImage'

function HowItWorks() {
  return (
    <div className="flex items-center justify-evenly flex-col border-2 w-full h-96" >
      <HowTextBox />
      <HowImage />
    </div>
  )
}

export default HowItWorks
