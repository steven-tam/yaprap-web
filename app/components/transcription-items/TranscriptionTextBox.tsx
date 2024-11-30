import React from 'react'

function TranscriptionTextBox() {
  return (
    <div className='text-center'>
        <h1 className="text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
                free transcription
            </span>
        </h1>
        <p className="text-gray-500 p-1 text-2xl">Get your recordings transcribed with up to <span className="font-bold">99.5% accuracy</span> using our AI-powered transcriber, built on <span className="font-bold">OpenAI Whisper</span> for unparalleled performance</p>
    </div>
  )
}

export default TranscriptionTextBox
