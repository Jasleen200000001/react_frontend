
import { div } from 'framer-motion/client';
import React from 'react'; 

function About() {
  
  return (
    
    <div className="bg-[#cdea68] w-full font-[Neue Montreal] rounded-t-3xl text-black "  >
      <h1  className= "px-14 py-24 text-[4.2vw] border-zinc-500 border-b-[0.1px] leading-[5rem] tracking-normal">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to{' '}
        <u>
          raise funds, sell products, explain complex ideas, and hire great people
        </u>
      </h1>
      <div className="flex pt-10 text-[1.6rem] justify-between px-10 gap-[10rem]">
        <div>
          <p>What you can expect:</p>
        </div>
        <div className='w-[350px]  '>
          <p className='pb-12'>
            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
          </p>
       </div>
        <div>
          <p className='pb-12'>S:</p>
          <ul>
            <li>Instagram</li>
            <li>Behance</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className=" text-[4.2vw] mt-[20px] h-full border-zinc-500 border-t-[0.1px]  flex justify-between align-middle px-10 gap-[10rem]">
      <div>
      <h1>Our approach:</h1>
        <a href="https://ochi.design/ochi-team/" className="uppercase text-[1.3rem] bg-gray-900 text-white  w-[16rem] my-5 -py-1 rounded-full flex justify-center align-middle " data-zoom-target="">
	        <span className=" text-white px-6 py-6 rounded-full">Read more </span><div className='w-3 h-3 mx-8 my-8 bg-zinc-100 rounded-full'></div>
	    </a>
      </div>
     
        <div className=' h-[38rem]  py-8 align-middle'>
        <img src="./image.png"  className="rounded-xl  h-[100%] w-[100%]" alt="Description" />
        </div>
      
 
         
      </div>
    </div>


  );
}

export default About;
