import React from 'react';

function Cards() {
  return (
    <div className="w-full h-full py-20 bg-cu-light-gray">
      <h1 className="text-[4.2vw] px-10 pb-7 border-zinc-400 border-b-[0.1px]">
        Clients’ reviews
      </h1>
      <div className="cards w-full h-auto py-10 px-10 flex gap-y-12 gap-x-4 justify-around">
        <div className='relative w-full h-[66vh] flex items-center justify-center p-20 bg-green-950 rounded-2xl'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <div className="absolute bottom-4 left-4 px-4 py-2 border-[1px] border-[#cdea68] rounded-full bg-green-950">
            <a className="flex justify-start items-center " href="#">
              <span className='text-[#cdea68]'>©2019–2022</span>
            </a>
          </div>
        </div>
        <div className='w-full relative flex items-center justify-center p-20 bg-black rounded-2xl'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <div className="absolute bottom-4 left-4 px-4 py-2 border-[1px] border-white rounded-full bg-black">
            <a className="flex justify-start items-center text-white " href="#">
              <span className='text-white'>Rating 5.0 on Clutch</span>
            </a>
          </div>
        </div>
        <div className='w-full flex items-center justify-center p-20 bg-black rounded-2xl'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
