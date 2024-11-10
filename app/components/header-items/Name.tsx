import React from 'react'
import { Chicle } from 'next/font/google'

const chicle = Chicle({
    weight: '400',
    subsets: ['latin'],
  })

function Name() {
  return (
    <h1 className={`text-5xl font-bold ${chicle.className}`}>YapRap</h1>
  )
}

export default Name