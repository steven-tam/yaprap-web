'use client';
import React from 'react'
import GooglePlayIcon from '@/assets/google-play-badge-logo.svg'
import Image from 'next/image';

function GooglePlayButton() {
    const APKUrl = "https://play.google.com/store/apps/details?id=host";

  return (
    <div className="m">
      <a href={APKUrl} target="_blank">
          <Image
          src={GooglePlayIcon}
          width={200}
          alt="Picture of the author"
        />
      </a>

    </div>
  )
}

export default GooglePlayButton
