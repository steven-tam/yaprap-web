'use client'
import React from 'react'
import Brand from './BrandButton';
import DownloadButton from './DownloadButton';

function DownloadHeader() {
  return (
    <div className='flex justify-between items-center p-1 w-full'>
      <Brand />
      <DownloadButton />
    </div>
  )
}

export default DownloadHeader