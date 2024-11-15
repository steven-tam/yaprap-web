'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


function TranscriptionTypewriter() {
  return (
    <div className='text-lg text-blue'>
      <span style={{ fontSize: 30, fontWeight:'semibold'}}>
        <Typewriter
            words={['Free', 'Fun', 'Effective', 'Freestyle']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={800}
          />
        </span>
    </div>
  )
}

export default TranscriptionTypewriter
