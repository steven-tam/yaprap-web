import React from 'react'
import Brand from '@/components/header-items/Brand';

function HeaderBar() {
  return (
    <div className='flex flex-row items-center sticky top-0 bg-peach w-full justify-evenly z-10'>
      <Brand />
    </div>
  )
}

export default HeaderBar
