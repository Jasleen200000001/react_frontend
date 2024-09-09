import { motion } from 'framer-motion';
import React from 'react';

function LandingPage() {
  return (
    <div className="w-full  h-screen pt-2">
      {/* Main Heading Section */}
      <div className="textstructure mt-56 px-10">
        {['we create', 'eye-opening', 'presentations'].map((item, index) => (
          <div key={index} className="masker p-4">
            <h1 className="uppercase leading-[10vh] text-[9vw] sm:text-[6.5vw] md:text-[7.5vw] lg:text-[8vw] tracking-normal font-[FoundersGrotesk] flex items-center">
              {/* Conditional rendering for animation */}
              {index === 1 && (
                <motion.div
                  initial={{ width: 0, marginRight: 0 }}
                  animate={{ width: '8vw', marginRight: '1.5rem' }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                  className="w-[8vw] h-[5vw] bg-green-800 rounded-lg"
                />
              )}
              {item}
            </h1>
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="mt-56 border-t-[1.5px] border-gray-400 flex justify-between items-center px-10">
        {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
          <p key={index} className="text-[1.6rem] font-extralight py-10">
            {item}
          </p>
        ))}
        <div className="start">
          <div className="text-[1.6rem] uppercase font-extralight px-4 py-2 border-[1px] border-gray-400 rounded-full">
            Start the project
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
