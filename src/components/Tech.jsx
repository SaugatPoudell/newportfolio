import React from 'react'
import { motion } from "framer-motion"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";

const Tech = () => {
  return (
    <div>
          <h2 className='text-white text-center font-mono font-bold text-2xl p-5'>Techonologies
            </h2>
            <p className='flex text-white justify-center gap-1'>
              <p className='text-orange-400 text-5xl'> <FaHtml5/></p> 
              <p className='text-blue-400 text-5xl'><FaCss3Alt/></p> 
             <p className='text-green-400 text-5xl'> < TbBrandJavascript/></p> 
             <p className='text-blue-800 text-5xl'>< SiFlutter/></p>
             <p className='text-blue-400 text-5xl'>< FaReact/> </p>
              <p className='text-blue-400 text-5xl' >< SiAdobephotoshop /></p> 
              <p className='text-purple-400 text-5xl'>< SiAdobepremierepro/> </p>

              </p>
    </div>
  )
}

export default Tech