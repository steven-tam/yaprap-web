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
          window.location.href = 'https://apple.com';
        }
      }
  return (
    <button onClick={handleDownload} className="bg-amber-300 hover:bg-amber-200 text-white font-bold h-[4rem] px-4 rounded-2xl">
        <p className='text-2xl'>Get Started</p>
    </button>
  )
}

export default DownloadButton