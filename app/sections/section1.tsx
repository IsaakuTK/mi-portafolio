"use client";
import { ReactTyped } from 'react-typed';
import ProfileImage from './../assets/IMG_3393.png'
import { Button } from '@/components';
import Image from 'next/image';
import SvgAnimation from './SvgAnimation';

export default function Section1() {

  const roles = ["Web Designer", "Frontend Developer", "Digital Artist"]; // Roles que cambian
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Consulta desde tu sitio web");
    const body = encodeURIComponent("Hola,\n\nMe gustaría obtener más información sobre...");
    
    window.open(`mailto:isaaccallecardozo@gmail.com?subject=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  
  return (
      <div className='1rst'>

        <div className='flex flex-col w-full min-h-[calc(100vh-80px)] bg-gray3 gap-10 items-center justify-center lg:hidden'>
          <div>
            <h1 className='text-2xl'>Welcome to my <span className='text-green1'>portfolio</span></h1>
            <div className='flex w-3/4 border-b-8 border-green1'></div>
          </div>

          <div className="relative shadow h-62 md:h-70 w-62 md:w-70 rounded-full overflow-hidden bg-green1">
            <Image className="absolute min-w-[375px] md:-w-[407px] md:min-w-[407px] w-[375px] top-9/20 left-40 md:left-45 transform -translate-x-1/2 -translate-y-1/2" src={ProfileImage} alt="ProfileImage" />
          </div>
          <div className='flex flex-col w-90 h-fit text-center items-center gap-10'> 
            <h2 className='w-full font-medium text-5xl'>
            Hi! Im <span className='text-green1'>Isaac</span> 
            { " " }
            < ReactTyped
            strings = {roles}  
            typeSpeed = { 100 }
            loop
            backSpeed = { 100 }
            cursorChar = "|"
            showCursor = { true }
          />
          </h2>
            <Button title="Let’s Connect" onClick={handleEmailClick}/>
          </div>
        </div>


        <div className='hidden lg:flex flex-col w-full min-h-[calc(100vh-100px)] bg-gray3 gap-1 px-[10%] justify-center'>

          <div>
            <h1 className='2xl:text-3xl xl:text-4xl lg:text-2xl pb-3'>Welcome to my <span className='text-green1'>portfolio</span></h1>
            <div className='flex w-70 border-b-8 border-green1'></div>
          </div>

          <div className='flex w-full h-fit items-center 2xl:gap-30 xl:gap-40'>
            <h2 className='w-full font-medium 2xl:text-8xl xl:text-7xl lg:text-6xl'>
              Hi! Im <span className='text-green1'>Isaac</span> 
              { " " }
              < ReactTyped
              strings = {roles}  
              typeSpeed = { 100 }
              loop
              backSpeed = { 100 }
              cursorChar = "|"
              showCursor = { true }
            />
            </h2>

            <div className="relative shadow aspect-square 2xl:w-350 xl:w-300 lg:w-160 rounded-full overflow-hidden bg-green1">
              <Image className="absolute w-100 top-9/20 left-7/12 transform -translate-x-1/2 -translate-y-1/2 2xl:scale-220 xl:scale-150 lg:scale-130" src={ProfileImage} alt="ProfileImage" />
            </div>
          </div>

          <div className='flex'>
            <Button title="Let’s Connect" onClick={handleEmailClick}/>
            <SvgAnimation />
          </div>
          
        </div>

      </div>
  );
}