import React from 'react'

function SciTextBox() {

    return (
      <div className="flex flex-col items-center p-10 text-center" >
        <h1 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
            backed by science
          </span>
        </h1>
        <p className="text-gray-500 p-1 text-2xl">We use a combination of research-backed techniques to help you improve your <span className="font-bold">communication</span> and <span className="font-bold">creativity</span>.</p>
      </div>
    )
}

export default SciTextBox
