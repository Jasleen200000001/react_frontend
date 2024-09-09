import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const projects = [
  {
    title: 'Cardboard Spaceship',
    imgSrc: 'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png',
    buttons: [
      'Branded Template',
      'Sales Deck',
      'Social Media Templates'
    ]
  },
  {
    title: 'AH2 & Matt Horn',
    imgSrc: 'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png',
    buttons: ['Pitch deck']
  },
  {
    title: 'Fyde',
    imgSrc: 'https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png',
    buttons: ['Audit', 'Copywriting', 'Sales Deck', 'Slides Design']
  },
  {
    title: 'Vise',
    imgSrc: 'https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg',
    buttons: ['Branded Template', 'Branded Template']
  }
];

const ProjectCard = ({ title, imgSrc, buttons }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    const cardElement = textRef.current.closest('.card');
    if (cardElement) {
      cardElement.addEventListener('mouseenter', handleMouseEnter);
      cardElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener('mouseenter', handleMouseEnter);
        cardElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="box w-[48.5%] relative">
      <div className="text-sm uppercase mb-4 flex items-center">
        <span className="w-2 h-2 flex-shrink-0 rounded-full bg-current mr-2"></span>
        <h2>{title}</h2>
      </div>
      <div className="card relative h-[75vh] rounded-xl hover:scale-95 transition-transform duration-300 flex justify-around items-center ">
        {/* Overlay Text with z-index correction */}
        <div className="absolute z-20 font-[FoundersGrotesk] text-[15vh] self-center">
          <h2 ref={textRef} className="text-[#cdea68] m-0 uppercase font-semibold whitespace-nowrap opacity-0">
            {title}
          </h2>
        </div>
        {/* Image with lower z-index */}
        <img className="h-full w-full rounded-xl z-10" src={imgSrc} alt={title} />
      </div>
      <div className="buttons my-3 flex justify-start">
        {buttons.map((btn, index) => (
          <div key={index} className="mr-5 px-4 py-2 border-[1px] border-black rounded-full">
            <a className="btn btn--default btn--small" href="#">
              <span className="btn__text">{btn}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Featured = () => (
  <div className="w-full h-auto py-20 bg-cu-light-gray">
    <h1 className="text-[4.2vw] px-10 pb-7 border-zinc-400 border-b-[0.1px]">
      Featured Projects
    </h1>
    <div className="cards flex-wrap py-10 px-10 flex gap-y-12 gap-x-4 justify-evenly">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          imgSrc={project.imgSrc}
          buttons={project.buttons}
        />
      ))}
              <a href="https://ochi.design/ochi-team/" className="uppercase text-[1.3rem] bg-gray-900 text-white  w-[25rem] my-5 -py-1 rounded-full flex justify-center align-middle " data-zoom-target="">
	        <span className=" text-white px-6 py-6 rounded-full">View all case studies </span><div className='w-3 h-3 mx-8 my-8 bg-zinc-100 rounded-full'></div>
	    </a>
    </div>
  </div>
);

export default Featured;
