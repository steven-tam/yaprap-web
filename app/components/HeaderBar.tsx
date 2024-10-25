import React from 'react'
import Brand from '@/components/header-items/Brand';

function HeaderBar() {
  return (
    <div className='flex flex-row items-center sticky top-0 bg-slate-100 dark:bg-gray-900 w-full justify-evenly border-b-2'>
      <Brand />
    </div>
  )
}

export default HeaderBar
