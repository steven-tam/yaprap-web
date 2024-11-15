'use client';
import React from 'react'
import GooglePlayIcon from '@/assets/google-play-badge-logo.svg'
import Image from 'next/image';

function GooglePlayButton() {
    const APKUrl = "https://play.google.com/store/apps/details?id=com.YapRap.frontend";

  return (
    <div className="">
      <a href={APKUrl} target="_blank">
          <Image
          src={GooglePlayIcon}
          width={210}
          alt="Download on Android"
        />
      </a>

    </div>
  )
}

export default GooglePlayButton
