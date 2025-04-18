import React from 'react'

function DisplayText() {
  return (
    <div className='text-center mt-16 p-4'>
        <h1 className="text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
                free. fun. effective. 
            </span>
        </h1>
        <p className="text-gray-500 p-1 text-2xl">
          Choose from over <span className="font-bold">17,000 prompts</span> across 
          <span className="font-bold"> six different categories</span> to inspire your thoughts.
        </p>
    </div>
  )
}

export default DisplayText