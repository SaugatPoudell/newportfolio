import React from 'react'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-blue-800 flex justify-center h-6 items-center pt-0'>
        <div className='text-white flex h-8 bg-black gap-1 pt-3'><FaCopyright/>
<div className='text-white text-3xl font-bold'/>Saugat Poudel 2024</div>
    </div>
  )
}

export default Footer