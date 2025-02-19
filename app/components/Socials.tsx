import React from 'react'
import TikTokIcon from '@/assets/TikTok-Icon.svg'
import InstagramIcon from '@/assets/Instagram-Icon.svg'
import YoutubeIcon from '@/assets/YouTube-Icon.svg'
import XIcon from '@/assets/x-icon.svg';
import Image from 'next/image'

function Socials() {
  return (
    <div className='flex flex-row text-gray-600'>
      <a href='https://www.instagram.com/yaprapapp/' target="_blank" className='flex flex-row items-center justify-center'>
        <Image src={InstagramIcon} 
            height={30}
            alt="Instagram"
        />
        <p className='hover:underline hidden md:block'>/yaprapapp</p>
      </a>
      <a href='https://www.youtube.com/@YapRapApp' target="_blank" className='flex flex-row items-center justify-center'>
        <Image src={YoutubeIcon} 
            height={30}
            alt="Youtube"
        />
        <p className='hover:underline hidden md:block'>/yaprapapp</p>
      </a>
      <a href='https://www.tiktok.com/@yaprapapp?lang=en' target="_blank" className='flex flex-row items-center justify-center'>
        <Image src={TikTokIcon} 
            height={30}
            alt="TikTok"
        />
        <p className='hover:underline hidden md:block'>/yaprapapp</p>
      </a>
      
      <a href='https://x.com/yaprapapp' target="_blank" className='flex flex-row items-center justify-center ml-1'>
        <Image src={XIcon} 
            height={16}
            alt="X"
        />
        <p className='hover:underline hidden md:block'>/yaprapapp</p>
      </a>
    </div>
  )
}

export default Socials
