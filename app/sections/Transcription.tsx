import React from 'react'
import TranscriptionTextBox from '@/components/transcription-items/TranscriptionTextBox'
import TranscriptionTypewriter from '@/components/transcription-items/TranscripionTypewriter'

function Transcription() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[50rem] gap-10" >
      <TranscriptionTextBox />
      <TranscriptionTypewriter />
    </div>
  )
}

export default Transcription
