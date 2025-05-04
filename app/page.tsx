"use client";
// app/page.tsx
//import Link from 'next/link';
import { ReactTyped } from 'react-typed';
import ProfileImage from './assets/IMG_3393.png'
import { Button } from '@/components';
import Image from 'next/image';

export default function Home() {

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
    <div>
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

            <div className="relative shadow aspect-square 2xl:w-350 xl:w-300 lg:w-160 rounded-full overflow-hidden bg-green1">
              <Image className="absolute w-100 top-9/20 left-7/12 transform -translate-x-1/2 -translate-y-1/2 2xl:scale-220 xl:scale-150 lg:scale-130" src={ProfileImage} alt="ProfileImage" />
            </div>
          </div>

          <Button title="Let’s Connect" onClick={handleEmailClick}/>
          
        </div>

      </div>

      <div className='2nd flex flex-col w-full min-h-[calc(100vh-80px)] items-center py-10 px-4'>

          <h1 className='text-4xl text-green1 pb-10'>About</h1>

          <div className='flex flex-col w-full h-full gap-21'>

            <p className='text-xl text-center'>
              I am passionate about creating impactful visual and digital experiences. With a deep understanding of design principles and front-end technologies, <span className=' text-green1'>I craft seamless, intuitive, and engaging interfaces</span> that elevate user interactions.
            </p>

            <div className='flex flex-col gap-8'>
              <div className='flex flex-col w-full items-center justify-center'>
                <div className='flex w-35 justify-between'>
                  <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0556 5C14.0556 5.99456 13.6166 6.94839 12.8352 7.65165C12.0538 8.35491 10.994 8.75 9.88889 8.75C8.78383 8.75 7.72402 8.35491 6.94262 7.65165C6.16121 6.94839 5.72223 5.99456 5.72223 5C5.72223 4.00544 6.16121 3.05161 6.94262 2.34835C7.72402 1.64509 8.78383 1.25 9.88889 1.25C10.994 1.25 12.0538 1.64509 12.8352 2.34835C13.6166 3.05161 14.0556 4.00544 14.0556 5ZM1.55667 19.118C1.59238 17.1504 2.48594 15.2742 4.04465 13.894C5.60336 12.5139 7.70232 11.7405 9.88889 11.7405C12.0755 11.7405 14.1744 12.5139 15.7331 13.894C17.2919 15.2742 18.1854 17.1504 18.2211 19.118C15.6071 20.1968 12.7646 20.7535 9.88889 20.75C6.91556 20.75 4.09334 20.166 1.55667 19.118Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>Name</p>
                  <p>:</p>
                </div>
                <p>Isaac Calle</p>
              </div>

              <div className='flex flex-col w-full items-center justify-center'>
                <div className='flex w-35 justify-between'>
                  <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.54187 5.25C1.54187 13.534 8.5113 20.25 17.1079 20.25H19.4428C20.0621 20.25 20.656 20.0129 21.0938 19.591C21.5317 19.169 21.7777 18.5967 21.7777 18V16.628C21.7777 16.112 21.4135 15.662 20.8936 15.537L16.3037 14.431C15.8471 14.321 15.3676 14.486 15.0864 14.848L14.0798 16.141C13.7872 16.517 13.2818 16.683 12.8241 16.521C11.1252 15.9191 9.58241 14.9686 8.30249 13.7352C7.02258 12.5018 6.03617 11.0151 5.41159 9.378C5.24347 8.937 5.41574 8.45 5.80593 8.168L7.14772 7.198C7.52442 6.927 7.69461 6.464 7.58046 6.025L6.43272 1.602C6.36956 1.35869 6.22384 1.1427 6.01872 0.988337C5.81359 0.833971 5.56082 0.750083 5.30055 0.75H3.87678C3.25752 0.75 2.66363 0.987053 2.22575 1.40901C1.78787 1.83097 1.54187 2.40326 1.54187 3V5.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>Phone</p>
                  <p>:</p>
                </div>
                <p>+57 (318) 452 4470</p>
              </div>

              <div className='flex flex-col w-full items-center justify-center'>
                <div className='flex w-35 justify-between'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.2778 12.5001C17.2778 13.6935 16.8037 14.8381 15.9598 15.682C15.1159 16.526 13.9713 17.0001 12.7778 17.0001C11.5844 17.0001 10.4398 16.526 9.59585 15.682C8.75194 14.8381 8.27783 13.6935 8.27783 12.5001C8.27783 11.3066 8.75194 10.162 9.59585 9.31808C10.4398 8.47416 11.5844 8.00006 12.7778 8.00006C13.9713 8.00006 15.1159 8.47416 15.9598 9.31808C16.8037 10.162 17.2778 11.3066 17.2778 12.5001ZM17.2778 12.5001C17.2778 14.1571 18.2848 15.5001 19.5278 15.5001C20.7708 15.5001 21.7778 14.1571 21.7778 12.5001C21.7778 10.4179 21.0558 8.40009 19.7349 6.79054C18.4139 5.18099 16.5758 4.07925 14.5336 3.67305C12.4914 3.26685 10.3715 3.58132 8.5352 4.56288C6.69888 5.54443 5.2597 7.13234 4.46289 9.05605C3.66609 10.9798 3.56095 13.1202 4.16539 15.1128C4.76983 17.1053 6.04646 18.8266 7.77775 19.9834C9.50904 21.1402 11.5879 21.6609 13.66 21.4568C15.7322 21.2527 17.6695 20.3364 19.1418 18.8641M17.2778 12.5001V8.75006" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                  <p>Email</p>
                  <p>:</p>
                </div>
                <p>isaaccallecardozo@gmail.com</p>
              </div>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
              <h3>My Interests</h3>

              <div className='flex'>
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.36174 7.92249L16.8617 4.92249M16.8617 11.4755V15.2255C16.8616 15.7144 16.7023 16.1899 16.4078 16.5802C16.1134 16.9705 15.6998 17.2542 15.2297 17.3885L13.9097 17.7655C13.6809 17.8346 13.4405 17.8576 13.2027 17.833C12.9649 17.8084 12.7343 17.7367 12.5244 17.6222C12.3146 17.5077 12.1296 17.3525 11.9802 17.1658C11.8309 16.9791 11.7201 16.7645 11.6545 16.5346C11.5888 16.3047 11.5696 16.064 11.5978 15.8266C11.6261 15.5892 11.7012 15.3598 11.819 15.1517C11.9367 14.9436 12.0947 14.761 12.2837 14.6145C12.4726 14.468 12.6889 14.3606 12.9197 14.2985L15.2297 13.6385C15.6998 13.5042 16.1134 13.2205 16.4078 12.8302C16.7023 12.4399 16.8616 11.9644 16.8617 11.4755ZM16.8617 11.4755V1.17249L6.36174 4.17249V14.4755M6.36174 14.4755V18.2255C6.36164 18.7144 6.2023 19.1899 5.90785 19.5802C5.61339 19.9705 5.19983 20.2542 4.72974 20.3885L3.40974 20.7655C2.95259 20.8885 2.46541 20.8268 2.05339 20.5936C1.64136 20.3605 1.33756 19.9747 1.20758 19.5195C1.07759 19.0643 1.13185 18.5762 1.35865 18.1606C1.58544 17.7451 1.96657 17.4354 2.41974 17.2985L4.72974 16.6385C5.19983 16.5042 5.61339 16.2205 5.90785 15.8302C6.2023 15.4399 6.36164 14.9644 6.36174 14.4755Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Musica</p>
              </div>

              <div className='flex'>
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.36174 7.92249L16.8617 4.92249M16.8617 11.4755V15.2255C16.8616 15.7144 16.7023 16.1899 16.4078 16.5802C16.1134 16.9705 15.6998 17.2542 15.2297 17.3885L13.9097 17.7655C13.6809 17.8346 13.4405 17.8576 13.2027 17.833C12.9649 17.8084 12.7343 17.7367 12.5244 17.6222C12.3146 17.5077 12.1296 17.3525 11.9802 17.1658C11.8309 16.9791 11.7201 16.7645 11.6545 16.5346C11.5888 16.3047 11.5696 16.064 11.5978 15.8266C11.6261 15.5892 11.7012 15.3598 11.819 15.1517C11.9367 14.9436 12.0947 14.761 12.2837 14.6145C12.4726 14.468 12.6889 14.3606 12.9197 14.2985L15.2297 13.6385C15.6998 13.5042 16.1134 13.2205 16.4078 12.8302C16.7023 12.4399 16.8616 11.9644 16.8617 11.4755ZM16.8617 11.4755V1.17249L6.36174 4.17249V14.4755M6.36174 14.4755V18.2255C6.36164 18.7144 6.2023 19.1899 5.90785 19.5802C5.61339 19.9705 5.19983 20.2542 4.72974 20.3885L3.40974 20.7655C2.95259 20.8885 2.46541 20.8268 2.05339 20.5936C1.64136 20.3605 1.33756 19.9747 1.20758 19.5195C1.07759 19.0643 1.13185 18.5762 1.35865 18.1606C1.58544 17.7451 1.96657 17.4354 2.41974 17.2985L4.72974 16.6385C5.19983 16.5042 5.61339 16.2205 5.90785 15.8302C6.2023 15.4399 6.36164 14.9644 6.36174 14.4755Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Musica</p>
              </div>

              <div className='flex'>
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.36174 7.92249L16.8617 4.92249M16.8617 11.4755V15.2255C16.8616 15.7144 16.7023 16.1899 16.4078 16.5802C16.1134 16.9705 15.6998 17.2542 15.2297 17.3885L13.9097 17.7655C13.6809 17.8346 13.4405 17.8576 13.2027 17.833C12.9649 17.8084 12.7343 17.7367 12.5244 17.6222C12.3146 17.5077 12.1296 17.3525 11.9802 17.1658C11.8309 16.9791 11.7201 16.7645 11.6545 16.5346C11.5888 16.3047 11.5696 16.064 11.5978 15.8266C11.6261 15.5892 11.7012 15.3598 11.819 15.1517C11.9367 14.9436 12.0947 14.761 12.2837 14.6145C12.4726 14.468 12.6889 14.3606 12.9197 14.2985L15.2297 13.6385C15.6998 13.5042 16.1134 13.2205 16.4078 12.8302C16.7023 12.4399 16.8616 11.9644 16.8617 11.4755ZM16.8617 11.4755V1.17249L6.36174 4.17249V14.4755M6.36174 14.4755V18.2255C6.36164 18.7144 6.2023 19.1899 5.90785 19.5802C5.61339 19.9705 5.19983 20.2542 4.72974 20.3885L3.40974 20.7655C2.95259 20.8885 2.46541 20.8268 2.05339 20.5936C1.64136 20.3605 1.33756 19.9747 1.20758 19.5195C1.07759 19.0643 1.13185 18.5762 1.35865 18.1606C1.58544 17.7451 1.96657 17.4354 2.41974 17.2985L4.72974 16.6385C5.19983 16.5042 5.61339 16.2205 5.90785 15.8302C6.2023 15.4399 6.36164 14.9644 6.36174 14.4755Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Musica</p>
              </div>

              <div className='flex'>
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.36174 7.92249L16.8617 4.92249M16.8617 11.4755V15.2255C16.8616 15.7144 16.7023 16.1899 16.4078 16.5802C16.1134 16.9705 15.6998 17.2542 15.2297 17.3885L13.9097 17.7655C13.6809 17.8346 13.4405 17.8576 13.2027 17.833C12.9649 17.8084 12.7343 17.7367 12.5244 17.6222C12.3146 17.5077 12.1296 17.3525 11.9802 17.1658C11.8309 16.9791 11.7201 16.7645 11.6545 16.5346C11.5888 16.3047 11.5696 16.064 11.5978 15.8266C11.6261 15.5892 11.7012 15.3598 11.819 15.1517C11.9367 14.9436 12.0947 14.761 12.2837 14.6145C12.4726 14.468 12.6889 14.3606 12.9197 14.2985L15.2297 13.6385C15.6998 13.5042 16.1134 13.2205 16.4078 12.8302C16.7023 12.4399 16.8616 11.9644 16.8617 11.4755ZM16.8617 11.4755V1.17249L6.36174 4.17249V14.4755M6.36174 14.4755V18.2255C6.36164 18.7144 6.2023 19.1899 5.90785 19.5802C5.61339 19.9705 5.19983 20.2542 4.72974 20.3885L3.40974 20.7655C2.95259 20.8885 2.46541 20.8268 2.05339 20.5936C1.64136 20.3605 1.33756 19.9747 1.20758 19.5195C1.07759 19.0643 1.13185 18.5762 1.35865 18.1606C1.58544 17.7451 1.96657 17.4354 2.41974 17.2985L4.72974 16.6385C5.19983 16.5042 5.61339 16.2205 5.90785 15.8302C6.2023 15.4399 6.36164 14.9644 6.36174 14.4755Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Musica</p>
              </div>
            </div>

          </div>


      </div>
    </div>
  );
}