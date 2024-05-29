import React from 'react'
import { FaBeer } from "react-icons/fa";
import { FaGithub,FaLinkedin,FaYoutube,FaFacebook} from "react-icons/fa";

const Navbar = () => {
  return (
<>
<div className='bg-blue-900 h-30 flex justify-between h-20 items-center p-16 py-10'>
  <p className='text-4xl font-bold text-white'>Saugat Poudel</p>
  <div className="flex justify-end gap-3">
  <p className='text-white text-3xl'><FaGithub/></p>
  <p className='text-white text-3xl'><FaLinkedin/> </p>
  <p className='text-white text-3xl'><FaYoutube/></p>
  <p className='text-white text-3xl'><FaFacebook/> </p>

  </div>
</div>
</>

        
  )
}

export default Navbar