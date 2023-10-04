import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'

const Header = () => {
  return (
    <div className='w-full flex flex-row justify-between p-6 bg-blue-500 text-white'>
      <Link href={'/'} className='text-xl font-bold'>React example</Link>
      <div className='flex flex-row gap-4'>
        <Link href={'/'}>Inicio</Link>
        <Link href={'/examples'}>Ejemplos</Link>
      </div>
    </div>
  )
}

export default Header


