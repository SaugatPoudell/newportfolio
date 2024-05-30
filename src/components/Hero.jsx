import React from 'react'
import { mine_desc } from '../constants'
import logo from '../images/forweb.jpg';

const Hero = () => {
  return (
    <>
      <div className='flex justify-around bg-[#FF5733]'>
        <div>
    <div className='text-white ml-20 mt-20 text-3xl lg:text-6xl lg:font-bold'>Saugat Poudel</div>
    <div className='text-2xl text-white ml-20 pt-5 gradiet lg:text-4xl'>Frontend Developer</div>
    <p className='text-white mr-20 ml-20 w-500'>{mine_desc}</p>
    </div>
    <div className='w-screen mt-20 mr-20'>
      <img src={logo} alt='IDK'/>
    </div>

    </div>
   
    </>
  )
}

export default Hero