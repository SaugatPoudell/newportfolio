import React from 'react'
import { mine_desc } from '../constants'
import logo from '../images/forweb.jpg';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.div
      initial={{x:-100,opacity:0}}
       animate={{ x: 0,opacity:1 }}
    transition={{ duration:0.5}}
     className='flex justify-around'>
        <div>
    <div className='text-white ml-20 mt-20 text-3xl lg:text-6xl lg:font-bold'> <h2 > Saugat Poudel</h2></div>
    <div className='text-2xl text-white ml-20 pt-5 gradiet lg:text-4xl'>Frontend Developer</div>
    <p 
     className='text-white mr-20 ml-20 max-w-7xl tracking-tighter mt-10 mb-20 text-justify'>{mine_desc}
     </p>
    </div>
    <div className='container max-h-l mt-20 mr-20'>
      <img src={logo} className='items-center lg:h-auto rounded-3xl' alt='IDK'/>
    </div>

    </motion.div>
   
    </>
  )
}

export default Hero