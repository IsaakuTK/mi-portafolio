"use client";
// app/page.tsx
//import Link from 'next/link'
import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section4 from './sections/section4';

export default function Home() {

  
  return (
    <div>
      
      <Section1 />
      <Section2 />
      <Section4 />
    </div>
  );
}