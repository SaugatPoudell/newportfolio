import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVarients =(duration)=>
    ({
            initial:{y:-10},
            animate:{
                y:[0,-10],
                transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
                }
            }
        }
    );

const Tech = () => {
  return (
    <div>
          <h2 className='text-white text-center font-mono font-bold text-2xl p-5'>Techonologies
            </h2>
            <motion.p variants={iconVarients(2)}
            initial="initial"
            animate="animate"
             className='flex text-white justify-center gap-1'>
              <motion.p variants={iconVarients(2)}
            initial="initial"
            animate="animate"
            className='text-orange-400 text-5xl'> <FaHtml5/></motion.p> 
              <motion.p variants={iconVarients(2)}
            initial="initial"
            animate="animate" className='text-blue-400 text-5xl'><FaCss3Alt/></motion.p> 
             <motion.p className='text-green-400 text-5xl'> < TbBrandJavascript/></motion.p> 
             <p className='text-blue-800 text-5xl'>< SiFlutter/></p>
             <p className='text-blue-400 text-5xl'>< FaReact/> </p>
              <motion.p variants={iconVarients(2)}
            initial="initial"
            animate="animate"  className='text-blue-400 text-5xl' >< SiAdobephotoshop /></motion.p> 
              <p className='text-purple-400 text-5xl'>< SiAdobepremierepro/> </p>

              </motion.p>
    </div>
  )
}

export default Tech