import React from 'react';
import AppStoreIcon from '@/assets/app-store-badge-logo.svg'
import Image from 'next/image';

function AppStoreButton() {
  const iosURL = "https://apps.apple.com/us/app/your-app-name/id1234567890";

  return (
    <div className='my-1'>
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
