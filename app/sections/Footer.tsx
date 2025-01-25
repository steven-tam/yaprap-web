import React from 'react'
import Socials from "@/components/Socials";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center p-6 w-full border-t-2 border-gray-100" >
      <Socials />
      <div className='flex flex-row gap-5 text-md text-gray-600'>
        <p>© 2024 YapRap LLC</p>
        <a target='_blank' href="https://docs.google.com/document/d/e/2PACX-1vTUcEORPQPWaxQ-P0bgnoxVdnO7inyQDeyEs7UiqUyXoYGiTtPXEGSipAvSkIJ58zfVqbtPf4x_e8Gj/pub" className='hover:underline'>Private Policy</a>
        <a target='_blank' href="mailto:infoyaprap.net" className='hover:underline'>Contact</a>
      </div>
    </div>
  )
}

export default Footer