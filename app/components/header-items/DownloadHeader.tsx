'use client'
import React from 'react'
import Brand from './Brand';
import usePlatform from '@/app/hooks/usePlatform';

function DownloadHeader() {
  const platform = usePlatform();
  const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Enables smooth scrolling
    });
  };

  const handleDownload = () =>{
    if (platform == 'android') {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.YapRap.frontend';
    }
    else{
      window.location.href = 'https://apple.com';
    }
  }

  return (
    <div className='flex justify-between p-1 w-full'>
      <button onClick={handleScrollToTop} className='mx-4'>
        <Brand />
      </button>
      
      <button onChange={handleDownload} className="bg-amber-300 hover:bg-amber-200 text-white font-bold py-2 px-4 rounded-2xl mx-4">
        <p className='text-2xl'>Download</p>
      </button>
    </div>
  )
}

export default DownloadHeader