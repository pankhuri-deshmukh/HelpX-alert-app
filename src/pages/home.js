import React from 'react';
import Typed from 'typed.js';
import image from './assets/about-img.png'
import { AiOutlineCheckCircle} from 'react-icons/ai';

import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["fast", "reliable", "wide-spread", "accurate"], 
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


  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);

  function handleAlertClick () {
    try{
      alert(`Your coordinates are : ${lat} , ${long}. \n Alert sent successfully.`)
    }
    catch{
      alert(`Error getting location: Please try again`);
    }
  }

// Riyas code

// const [alertMessage, setAlertMessage] = useState(null);

// const handleAlertClick = async () => {
//   try {
//     const position = await new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//     const { latitude, longitude } = position.coords;
//     const message = 'Emergency message';

//     const response = await fetch('/alert', {
//       method: 'POST',
//       body: JSON.stringify({ latitude, longitude, message }),
//       headers: { 'Content-Type': 'application/json' }
//     });

//     const result = await response.json();
//     setAlertMessage(result.message);
//   } catch (error) {
//     alert(`Error getting location: ${error.message}`);
//   }
// };
//end of riya code
const [isOpen, setIsOpen] = useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className='flex'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen  pt-30 flex flex-col justify-center'>
      <h1 className='sm:text-3xl text-2xl font-bold md:py-6 mx-auto'>
        Stay informed and stay safe with <span className='font-extrabold text-[#CB3737]'>HelpX</span>
        </h1>
      <p className='sm:text-lg text-lg font-bold text-gray-500 mx-auto italic'>Empowering women and protecting children - one alert at a time</p>
        
        
        <div className='flex items-center'>
        
          <p className='sm:text-xl text-lg font-bold py-4 mx-auto'>
            The emergency alert system that is 
            <span ref={el} className='sm:text-xl text-lg font-bold px-2 text-[#CB3737] ' ></span>
          </p>
        </div>
        {/* <p className='text-[#EE6F57] font-bold pt-4'>
        Crime doesn't rest, and neither do we.
        </p> */}
        <button className='bg-[#CB3737] w-[300px]  rounded-full my-6 mx-auto py-3 uppercase text-white text-3xl hover:shadow-xl font-bold' id='alert-button' onClick={openPopup}>Send Alert</button>
      </div>
      <div>
      <img
              className="h-full w-full object-cover md:h-96 rounded-lg "
              src={image}
              alt="about"
            />
      </div>
      </div>

{/* Trial */}
<div className={isOpen ? 'fixed bottom-10 left-28 pt-1 w-[45%] h-[70%] bg-white shadow-2xl border-2 border-[#CB3737]' : 'pt-24 fixed left-[-100%]'}>
  <div className='relative'>
    <button className='absolute right-0 p-1 mr-1 font-extrabold text-[#CB3737]' onClick={closePopup}>X</button>
  </div>
  <form className='flex flex-col items-center'>
    <h2 className='text-2xl font-bold mb-4 uppercase text-[#CB3737]'>Send Alert</h2>
    <div className='flex flex-col'>
      <div>
      <div className='flex items-center mb-4'>
      <input type='checkbox' id='Physical Assault' name='category' className='mr-2' />
      <label htmlFor='Physical Assault'>Physical Assault</label>
    </div>
    <div className='flex items-center mb-4'>
      <input type='checkbox' id='Sexual Assault' name='category' className='mr-2' />
      <label htmlFor='Sexual Assault'>Sexual Assault</label>
    </div>
    <div className='flex items-center mb-4'>
      <input type='checkbox' id='Stalking' name='category' className='mr-2' />
      <label htmlFor='Stalking'>Stalking</label>
    </div>
      </div>
      <div>
      <div className='flex items-center mb-4'>
      <input type='checkbox' id='Kidnapping' name='category' className='mr-2' />
      <label htmlFor='Kidnapping'>Kidnapping</label>
    </div>
    <div className='flex items-center mb-4'>
      <input type='checkbox' id='Hate Crime' name='category' className='mr-2' />
      <label htmlFor='Hate Crime'>Hate Crime</label>
    </div>
    <div className='flex items-center mb-4'>
      <input type='checkbox' id='Harassment' name='category' className='mr-2' />
      <label htmlFor='Harassment'>Harassment</label>
    </div>
      </div>
    </div>
    <h2 className='text-xl font-bold mb-4 text-[#CB3737]'>Your live location is sent with this alert.</h2>
    <button className='bg-[#CB3737] text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300 ease-in-out' onClick={handleAlertClick}>Submit</button>
  </form>
</div>

{/* trial end */}


    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-4xl font-bold text-center'>Our Features</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        Our website is dedicated to empowering women and protecting children by providing real-time emergency alerts and resources to stay safe.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Alert button</h3>
              <p className='text-lg pt-2 pb-4'>
              A prominent button on the website or mobile app that users can press in an emergency situation to immediately send an alert to emergency contacts.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Location tracking</h3>
              <p className='text-lg pt-2 pb-4'>
              The system can use GPS or other location tracking technology to determine the user's location and send it along with the alert to emergency contacts.
              </p>
            </div>
          </div>
          
          
          
             <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Integration with emergency services:</h3>
              <p className='text-lg pt-2 pb-4'>
              The system can be integrated with local emergency services to ensure that help is dispatched quickly in the event of an emergency.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Notifications</h3>
              <p className='text-lg pt-2 pb-4'>
              Users can receive push notifications on their mobile devices when an alert is triggered.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className='flex justify-evenly'>
    <div className='flex flex-col justify-center'>
      <h1 className='sm:text-3xl text-2xl font-bold md:py-6 mx-auto'>
        Don't be a bystander, <span className='text-[#CB3737]'>be an upstander.</span>
        </h1>
        <p className='sm:text-lg text-lg font-bold text-gray-500 mx-auto italic'>Register with us now!</p>
    </div>
    <div>
    <p className=' py-2 px-24 uppercase text-white font-extrabold border-2 border-[#CB3737] rounded-full cursor-pointer bg-[#CB3737] hover:shadow-xl mt-8 '><a href='/signup' >Sign Up !</a></p>

    </div>

    </div>
  </div>
  );
};

export default Hero;