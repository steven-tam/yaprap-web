import React from 'react'
import Socials from "@/components/Socials";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-100 p-6 w-full" >
      <Socials />
      <div className='flex flex-row gap-5 text-md'>
        <p className='text-gray-400'>© 2024 YapRap, LLC</p>
        <a target='_blank' href="https://docs.google.com/document/d/e/2PACX-1vTUcEORPQPWaxQ-P0bgnoxVdnO7inyQDeyEs7UiqUyXoYGiTtPXEGSipAvSkIJ58zfVqbtPf4x_e8Gj/pub" className='hover:underline text-gray-400'>Private Policy</a>
        <a target='_blank' href="mailto:steven@yaprap.net" className='hover:underline text-gray-400'>Contact</a>
      </div>
    </div>
  )
}

export default Footer