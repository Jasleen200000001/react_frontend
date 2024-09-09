import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div className='bg-cu-light-gray '>
   
    <div data-scroll data-scroll-session data-scroll-speed='0.2'   className='h-82 py-32 w-full bg-[#004d43] mt-0 rounded-t-3xl'>
      <div className=' my-2 pb-[3rem] border-t-[0.1px] border-b-[0.1px] leading-[19rem] border-slate-500 flex whitespace-nowrap overflow-hidden align-middle'>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }} 
          className='text-white text-[32rem] uppercase font-[FoundersGrotesk]'
        >
          We are Ochi
        </motion.h1>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }} 
          className='text-white text-[32rem] uppercase font-[FoundersGrotesk]'
        >
          We are Ochi
        </motion.h1>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }} 
          className='text-white text-[32rem] uppercase font-[FoundersGrotesk]'
        >
          We are Ochi
        </motion.h1>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }} 
          className='text-white text-[32rem] uppercase font-[FoundersGrotesk]'
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
    </div>
  );
}

export default Marquee;
