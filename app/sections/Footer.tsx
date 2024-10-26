import React from 'react'
import Socials from "@/components/Socials";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center border-2 w-full" >
      <Socials />
      <a target='_blank' href="https://docs.google.com/document/d/e/2PACX-1vTUcEORPQPWaxQ-P0bgnoxVdnO7inyQDeyEs7UiqUyXoYGiTtPXEGSipAvSkIJ58zfVqbtPf4x_e8Gj/pub" className='hover:underline text-gray-400'>Private Policy</a>
    </div>
  )
}

export default Footer