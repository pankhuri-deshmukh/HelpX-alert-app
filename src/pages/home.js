import React from 'react';
import Typed from 'typed.js';
// import { CheckIcon } from '@heroicons/react/outline';
import { AiOutlineCheckCircle} from 'react-icons/ai';

import { useEffect, useRef } from "react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["fast", "reliable", "wide-spread", "accurate"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: false
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='sm:text-2xl text-xl font-bold text-gray-500 pt-24'>Empowering women and protecting children - one alert at a time</p>
        <h1 className='sm:text-4xl  text-2xl font-bold md:py-6'>
        Stay informed and stay safe with LOGO
        </h1>
        
        <div className='flex justify-center items-center'>
        
          <span className='sm:text-3xl text-2xl font-bold py-4'>
            The emergency alert system that is 
          </span>
          <span ref={el} className='sm:text-3xl  text-xl font-bold sm:pl-4 pl-2 text-[#CB3737] ' ></span>
        </div>
        <p className='text-[#EE6F57] font-bold pt-4'>
        Crime doesn't rest, and neither do we.
        </p>
        <button className='bg-[#CB3737] w-[300px]  rounded-full my-6 mx-auto py-3 uppercase text-white text-3xl hover:bg-[#EE6F57] font-bold'>Send Alert</button>
      </div>

    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>Our Features</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        In the age of fast fashion and throwaway mentality, our online thrift store provides an economical and environmentally friendly alternative to buying new things.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Unique Try-On Feature</h3>
              <p className='text-lg pt-2 pb-4'>
                We offer a unique try-on feature that allows you to try on the clothes you like before you buy them.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Amazing Return Policy</h3>
              <p className='text-lg pt-2 pb-4'>
                Buyers get 24 hours to return any damaged articles, with submission of valid proof.
              </p>
            </div>
          </div>
          
          
          
             <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Secure Payment Gateway</h3>
              <p className='text-lg pt-2 pb-4'>
                We offer a secure payment gateway with the help of Polygon.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Minimal Selling Fee</h3>
              <p className='text-lg pt-2 pb-4'>
                Sellers get the chance to sell their products to a wide audience with just a minimal selling fee that is automatically adjusted. 
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>




    </div>
  );
};

export default Hero;