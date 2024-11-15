import React from 'react'
import ModeTextBox from '@/components/mode-items/ModeTextBox'
import Carousel from '@/components/mode-items/Carousel'

function Modes() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-20 gap-10 min-h-[48rem] bg-mildblack" >
      <ModeTextBox />
      <Carousel />
    </div>
  )
}

export default Modes
