import React from 'react'
import Brand from '@/components/header-items/Brand';

function HeaderBar() {
  return (
    <div className='flex flex-row items-center sticky top-0 bg-white border-slate-100 border-b-2 w-full justify-evenly z-10'>
      <Brand />
    </div>
  )
}

export default HeaderBar
