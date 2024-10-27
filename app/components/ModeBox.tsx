import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface ModeBoxProps {
    src: StaticImageData;
    name: string;
    description: string;
}
function ModeBox({src, name, description}: ModeBoxProps) {
  return (
    <div className="flex flex-col group relative  h-40 aspect-square items-center justify-center text-center border-2 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src={src}
          alt={name}
          height={100}
        />
        <p className='font-semibold'>{name}</p>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ModeBox