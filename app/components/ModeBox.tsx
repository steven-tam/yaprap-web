import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface ModeBoxProps {
    src: StaticImageData;
    name: string;
    description: string;
}
function ModeBox({src, name, description}: ModeBoxProps) {
  return (
    <div className="flex flex-col group relative h-48 aspect-square items-center justify-center text-center border-2 rounded-2xl overflow-hidden shadow-lg bg-white">
        <Image 
          src={src}
          alt={name}
          className='h-24 md:h-20 aspect-square'
        />
        <p className='font-semibold text-2xl'>{name}</p>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ModeBox