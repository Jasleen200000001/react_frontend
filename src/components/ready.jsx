import React, { useState, useEffect } from 'react';

function Ready() {
  // State to manage the rotation and position
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
    <div className=' w-full h-[110rem] overflow-hidden '>
      <div  data-scroll data-scroll-session data-scroll-speed='0.2'  className=' w-full h-full bg-cover bg-center tracking-normal leading-[25vh] font-[FoundersGrotesk] bg-[#cdea68]'>
    
            <div className='text-[20rem]  flex text-center pt-40  align-middle justify-around uppercase '><div><h1> Ready </h1><h1>to start </h1> <h1>the project?</h1></div></div>
      
        <div data-scroll data-scroll-session data-scroll-speed='0.2'  className='w-full h-auto  pt-20 flex justify-center align-middle  gap-8'>
          
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

        <div className='grid h-[5rem] gap-y-2 items-center text-center pt-20 justify-center font-neue-montreal'>
  <a href="https://ochi.design/ochi-team/"
    className="flex   items-center justify-center font-neue-montreal w-[25rem] h-20 my-5 py-0 px-6 bg-gray-900 text-white rounded-full uppercase text-[1.3rem] mx-2"
  >
    View all case studies 
    <div className="w-3 h-3 bg-zinc-100 rounded-full ml-10"></div>
  </a>

  <h1 className='h-8 text-4xl '>OR</h1> 

  <a href="https://ochi.design/ochi-team/"
    className="flex items-center justify-center font-neue-montreal w-[25rem] h-20 my-5 py-0 px-6 bg-[#cdea68] text-black rounded-full border-black border-2 uppercase text-[1.3rem] mx-2"
  >
    hello@ochi.design
    <div className="w-3 h-3 bg-black rounded-full ml-10"></div>
  </a>
</div>



      </div>
    </div>
  );
}

export default Ready;
