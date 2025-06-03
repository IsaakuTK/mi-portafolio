"use client";
import { Card } from '@/components';
export default function Section4() {

  return (
    <div className="3RD">

      <div className='flex flex-col w-full min-h-[calc(100vh-80px)] items-center py-10 px-4 lg:hidden'>

      </div>






      <div className='hidden lg:flex w-full min-h-[calc(100vh-100px)] bg-gray3 items-center p-17 gap-14'>

        <div className="flex flex-col h-full w-fit gap-4 justify-center items-center text-green2 lg:text-5xl xl:text-7xl font-black">
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
        </div>

        <div className='flex flex-col 2xl:gap-8 gap-12 w-full items-center'>

          <div className='flex 2xl:gap-8 gap-12'>
            <Card title="Rappi Quest" description='Colaboré en la creación de un producto diseñado para Rappi, enfocándome en la investigación de mercado, el diseño de la propuesta y su presentación. ' backgroundImage='https://mir-s3-cdn-cf.behance.net/project_modules/fs/78972e186101687.656f6b98d7331.jpg'/>
            <Card title="Cada uno se puede cambiar y asi.." description="Cada uno se puede cambiar." backgroundImage=''/>
            <Card className='2xl:flex hidden' title="Rappi Quest" description='Colaboré en la creación de un producto diseñado para Rappi, enfocándome en la investigación de mercado, el diseño de la propuesta y su presentación. ' backgroundImage='https://mir-s3-cdn-cf.behance.net/project_modules/fs/78972e186101687.656f6b98d7331.jpg'/>
            <Card className='2xl:flex hidden'/>
          </div>

          <div className='flex 2xl:gap-8 gap-12'>
            <Card />
            <Card />
            <Card className='2xl:flex hidden' title="Rappi Quest" description='Colaboré en la creación de un producto diseñado para Rappi, enfocándome en la investigación de mercado, el diseño de la propuesta y su presentación. ' backgroundImage='https://mir-s3-cdn-cf.behance.net/project_modules/fs/78972e186101687.656f6b98d7331.jpg'/>
            <Card className='2xl:flex hidden ' />
          </div>
                  
          <div className='flex items-end text-green1 text-2xl underline cursor-pointer'>
          <p>SEE MORE...</p>
          </div>
          
        </div>
      
      </div>

    </div>

  );
}