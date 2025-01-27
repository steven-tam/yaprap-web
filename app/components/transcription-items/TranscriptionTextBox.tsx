import React from 'react'

function TranscriptionTextBox() {
  return (
    <div className='text-center'>
        <h1 className="text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
                AI transcription
            </span>
        </h1>
        <p className="text-gray-300 p-1 text-2xl">Analyze your transcript with up to <span className="font-bold">99.5% accuracy</span> with our AI-powered transcriber and <span className="font-bold">capture your thoughts</span>.</p>
    </div>
  )
}

export default TranscriptionTextBox
