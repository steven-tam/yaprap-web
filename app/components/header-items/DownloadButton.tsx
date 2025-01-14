'use client'
import usePlatform from '@/app/hooks/usePlatform';
import React from 'react'

function DownloadButton() {
    const platform = usePlatform();
    const handleDownload = () =>{
        if (platform == 'android') {
          window.location.href = 'https://play.google.com/store/apps/details?id=com.YapRap.frontend';
        }
        else if (platform == 'ios'){
          window.location.href = 'https://apps.apple.com/us/app/yaprap-learn-freestyle/id6737922268?platform=iphone';
        }
      }
  return (
    <button onClick={handleDownload} className='h-[3rem] px-4 bg-amber-300 rounded-xl cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#fbbf24,0_0px_0_0_#fbbf24]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_4px_0_0_#fbbf24]
    border-b-[1px] border-amber-400
  '>
        <p className='text-2xl text-white font-bold'>Get Started</p>
    </button>
  )
}

export default DownloadButton