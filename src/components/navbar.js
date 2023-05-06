import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between py-4 h-24 w-full bg-[#E3E3E3]'>
      <h1>LOGO</h1>
      <p className='py-4 px-24  uppercase text-[#CB3737] font-extrabold border-2 rounded-full border-[#CB3737] cursor-pointer hover:bg-[#EE6F57] hover:text-white'><a href='/listings'>Live Alerts</a></p>
      <ul className='hidden sm:flex'>
        <li className='p-4 cursor-pointer'><a href='/'>Home</a></li>
        <li className='p-4 cursor-pointer'><a href='/about'>About</a></li>

        <li className='p-4 cursor-pointer'><a href='/resources'>Resources</a></li>
        <li className='p-4 font-semibold cursor-pointer'><a href='/signin'>Sign In</a></li>
        <li className='p-4 text-[#CB3737] font-semibold cursor-pointer'><a href='/signup'>Sign Up</a></li>
      </ul>

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