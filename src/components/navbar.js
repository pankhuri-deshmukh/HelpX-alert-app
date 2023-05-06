import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from './assets/logo.jpeg'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  

  return (    
    <div className=' h-24 w-full bg-[#FAFAFA]'>

    <div className='fixed flex h-20 py-4 w-full justify-between bg-[#FAFAFA] shadow-sm'>
      <img className='ml-4 mt-0 w-36 h-16 ' src={logo}/>
      
      <ul className='hidden sm:flex'>
        <li className='p-4 cursor-pointer'><a href='/'>Home</a></li>
        <li className='p-4 cursor-pointer'><a href='/about'>About</a></li>

        <li className='p-4 cursor-pointer'><a href='/resources'>Resources</a></li>
        <li className='p-4 font-semibold cursor-pointer'><a href='/signin'>Sign In</a></li>
        <li className='p-4 text-[#CB3737] font-semibold cursor-pointer'><a href='/signup'>Sign Up</a></li>
      </ul>

      <p className=' py-2 px-24  uppercase text-white font-extrabold border-2 border-[#CB3737] rounded-full cursor-pointer bg-[#CB3737] mr-4 hover:shadow-xl'><a href='/listings' >Live Alerts</a></p>

      </div>

      <div onClick={handleNav} className='block sm:hidden'>
      {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'fixed top-0 right-0 pt-4 w-[30%] h-full ease-in-out duration-500 bg-white' : 'pt-24 ease-in-out duration-500 fixed left-[-100%]'}> 

      <div onClick={handleNav} className='block sm:hidden'>
      <AiOutlineClose size={20} />
      </div>

      <ul className='text-center'>
      <li className='p-4 cursor-pointer'><a href='/'>Home</a></li>
      <li className='p-4 cursor-pointer'><a href='/about'>About</a></li>
        <li className='p-4 cursor-pointer'><a href='/resources'>Resources</a></li>
        <li className='p-4 font-semibold cursor-pointer'><a href='/signin'>Sign In</a></li>
        <li className='p-4 text-[#CB3737] font-semibold cursor-pointer'><a href='/signup'>Sign Up</a></li>
      </ul>
      </div>
      
      

    </div>
  )
}

export default Navbar