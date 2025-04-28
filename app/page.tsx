"use client";
// app/page.tsx
//import Link from 'next/link';
import { ReactTyped } from 'react-typed';
import ProfileImage from './assets/IMG_3393.png'
import { Button } from '@/components';

export default function Home() {

  const roles = ["Web Designer", "Frontend Developer", "Digital Artist"]; // Roles que cambian
  
  return (
    <div>
      <div className='flex flex-col w-full h-screen bg-gray3 gap-10 items-center justify-center'>

        <div>
          <h1 className='text-2xl'>Welcome to my <span className='text-green1'>portfolio</span></h1>
          <div className='flex w-3/4 border-b-8 border-green1'></div>
        </div>

        <div className="relative shadow h-62 md:h-70 w-62 md:w-70 rounded-full overflow-hidden bg-green1">
          <img className="absolute min-w-[375px] md:-w-[407px] md:min-w-[407px] w-[375px] top-9/20 left-40 md:left-45 transform -translate-x-1/2 -translate-y-1/2" src={ProfileImage.src} alt="ProfileImage"/>
        </div>

        <div className='flex flex-col w-90 h-fit text-center items-center gap-10'> 
          <h2 className='w-full font-medium text-5xl'>
          Hi! I'm <span className='text-green1'>Isaac</span> 
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
          <Button title={"Let’s Connect"}/>
        </div>

      </div>
    </div>
  );
}