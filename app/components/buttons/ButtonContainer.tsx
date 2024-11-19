'use client'
import { useObserverStore } from '@/app/hooks/useObserverStore';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import AppStoreButton from './AppStoreButton';
import GooglePlayButton from './GooglePlayButton';

function ButtonContainer() {
    const { ref, inView } = useInView({
        threshold: 0.55,
      });
    
      useEffect(()=>{
        useObserverStore.setState({inView: inView})
      }, [inView])
    
  return (
    <div ref={ref}>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-y-0 md:space-x-4">
            <AppStoreButton />
            <GooglePlayButton />
        </div>
    </div>
  )
}

export default ButtonContainer