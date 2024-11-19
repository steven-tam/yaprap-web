'use client'
import React from 'react'
import { useObserverStore } from '../hooks/useObserverStore';
import DownloadHeader from './header-items/DownloadHeader';
import DefaultHeader from './header-items/DefaultHeader';
import usePlatform from '../hooks/usePlatform';

function HeaderBar() {
  const inView = useObserverStore((state)=> state.inView)
  const platform = usePlatform()
  
  return (
    <div className='flex flex-row items-center sticky top-0 bg-white border-slate-100 border-b-2 w-full z-10'>
      { inView || platform == 'web' ? <DefaultHeader /> : <DownloadHeader /> }
    </div>
  
  )
}

export default HeaderBar
