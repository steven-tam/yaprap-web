'use client';
import React, { useEffect } from 'react'
import AppStoreIcon from '@/assets/app-store-badge-logo.svg'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useObserverStore } from '@/app/hooks/useObserverStore';

function AppStoreButton() {
  const iosURL = "https://apps.apple.com/us/app/your-app-name/id1234567890";
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(()=>{
    useObserverStore.setState({inView: inView})
  }, [inView])

  return (
    <div ref={ref} className='my-1'>
      <a href={iosURL} target="_blank" className='h-2'>
          <Image
          src={AppStoreIcon}
          width={210}
          alt="Download on IOS"
        />
      </a>
    </div>
  )
}

export default AppStoreButton
