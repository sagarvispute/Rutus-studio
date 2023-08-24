import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5"


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="container m-auto flex md:justify-between items-center py-3 flex-wrap flex-[2_2_0%] relative bg-white">
      <a href="" className='basis-1/2 md:basis-auto'><img src="images/Logo.webp" alt="" className='h-12 w-auto' /></a>

      <ul className={`md:flex gap-5 order-3 md:order-2 absolute md:relative top-16 md:top-0 pt-3 md:pt-0 basis-auto left-0 right-0 px-3 bg-white md:bg-transparent ${!showMenu&&'hidden'}`}>
        <li><a href="/" className='hover:text-[#bf9a6a]'>Home</a></li>
        <li><a href="/studio" className='hover:text-[#bf9a6a]'>The Studio</a></li>
        <li><a href="/services" className='hover:text-[#bf9a6a]'>Services</a></li>
        <li><a href="/projects" className='hover:text-[#bf9a6a]'>Projects</a></li>
      </ul>

      <div className='flex gap-1 basis-1/2 md:basis-0 justify-end order-2 md:order-3'>
        <button className='block text-2xl px-2 rounded-full md:hidden' onClick={() => setShowMenu(!showMenu)}><IoMenu /></button>
        <a href="/contact" className='rounded-full border-2 border-black inline-block py-1 px-5'>Contact</a>
      </div>
    </div>
  )
}
