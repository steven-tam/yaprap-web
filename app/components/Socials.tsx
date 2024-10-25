import React from 'react'
import TikTokIcon from '@/assets/TikTok-Icon.svg'
import InstagramIcon from '@/assets/Instagram-Icon.svg'
import YoutubeIcon from '@/assets/YouTube-Icon.svg'
import Image from 'next/image'

function Socials() {
  return (
    <div className='flex flex-row'>
      <a href='' className='flex flex-row items-center justify-center'>
        <Image src={YoutubeIcon} 
            height={30}
            alt="Youtube"
        />
        <p className='hover:underline'>/yaprapapp</p>
      </a>
      <a href='' className='flex flex-row items-center justify-center'>
        <Image src={InstagramIcon} 
            height={30}
            alt="Instagram"
        />
        <p className='hover:underline'>/yaprapapp</p>
      </a>
      <a href='' className='flex flex-row items-center justify-center'>
        <Image src={TikTokIcon} 
            height={30}
            alt="TikTok"
        />
        <p className='hover:underline'>/lil_yappa</p>
      </a>
    </div>
  )
}

export default Socials
