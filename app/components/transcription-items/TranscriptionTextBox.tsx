import React from 'react'

function TranscriptionTextBox() {
  return (
    <div className='text-center'>
        <h1 className="text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
                Free Transcription
            </span>
        </h1>
        <p className="text-gray-500 p-1">Get your recordings transcribed with up to <span className="font-bold">98.5% accuracy</span> with our AI-powered transcriber derived from <span className="font-bold">OpenAI Whisper</span> for top tier performance</p>
    </div>
  )
}

export default TranscriptionTextBox
