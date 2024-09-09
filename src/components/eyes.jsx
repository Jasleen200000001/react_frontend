import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

function Eyes() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate the direction for the rotation of both eyes
      const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
      setRotation(angle - 270 );

      // Calculate the movement of the pupils
      const deltaX = (mouseX - centerX) / 30; // Limit the movement
      const deltaY = (mouseY - centerY) / 300;
      setPosition({ left: deltaX, top: deltaY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div   className='relative w-full h-screen overflow-hidden bg-cu-light-gray'>
      <div  data-scroll data-scroll-session data-scroll-speed='-0.8'  className=' relative w-full h-full bg-cover bg-center bg-[url("/eyecover.jpg")]'>
        <div className='absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-8'>
          
          {/* Left Eye */}
          {/* <p className='fixed z-[999] uppercase text-white top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 '>play</p> */}
          <div
            style={{ transform: `rotate(${rotation}deg)` }}
            className='w-[15vw] h-[15vw] rounded-full bg-slate-100 mx-2 flex items-center justify-center'>
               
            <div
              style={{
                transform: `translate(${position.left}px, ${position.top}px)`,
              }}
              className='bg-gray-900 w-[10vw] h-[10vw] rounded-full flex items-top justify-center'>
               
               
           
          
              <div
                style={{
                  transform: `translate(${position.left}px, ${position.top}px)`,
                }}
                className="w-[4vw] h-[4vw] rounded-full bg-zinc-100" // Smaller pupil
              ></div>
            </div>
            
          </div>

          {/* Right Eye */}
          
          <div
            style={{ transform: `rotate(${rotation}deg)` }}
            className='w-[15vw] h-[15vw] rounded-full bg-slate-100 mx-2 flex items-center justify-center'>
            <div
              style={{
                transform: `translate(${position.left}px, ${position.top}px)`,
              }}
              className='bg-gray-900 w-[10vw] h-[10vw] rounded-full flex align-top justify-center'>
                 
              <div
                style={{
                  transform: `translate(${position.left}px, ${position.top}px)`,
                }}
                className="w-[4vw] h-[4vw] rounded-full bg-zinc-100" // Smaller pupil
              ></div>
            </div>
            
          </div>
          {/* <p className='fixed z-[999] uppercase text-white top-1/2 -right-1/2 -translate-x-1/2 -translate-y-1/2 '>play</p> */}
          
        </div>
      </div>
    </div>
  );
}

export default Eyes;
