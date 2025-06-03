import React, { useState, useEffect } from 'react';

const MovingSvgAnimation = () => {
  const [position, setPosition] = useState(200); // Empieza fuera del contenedor (derecha)
  const [currentSvg, setCurrentSvg] = useState(1);

  useEffect(() => {
    const animationSteps = [
      { delay: 1500, position: 0, svg: 2 },  // Mover al centro (100px) y cambiar a SVG 2
      { delay: 1000, position: 0, svg: 3 },    // Mover a izquierda (0px) y cambiar a SVG 3
      { delay: 1500, position: 190, svg: 1 }   // Volver al inicio (derecha) y resetear a SVG 1
    ];

    let currentStep = 0;
    let timeoutId;

    const runAnimation = () => {
      const { delay, position: newPosition, svg } = animationSteps[currentStep];
      
      timeoutId = setTimeout(() => {
        setPosition(newPosition);
        setCurrentSvg(svg);
        currentStep = (currentStep + 1) % animationSteps.length;
        runAnimation();
      }, delay);
    };

    runAnimation();

    return () => clearTimeout(timeoutId);
  }, []);

  // SVGs pequeños (ajusta el tamaño según necesites)
  const svgComponents = {
    1: (
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M39.1643 48.0535L32.2645 38.1955M32.2645 38.1955L28.6032 44.9543L22.406 24.1151L39.8674 37.0671L32.2645 38.1955Z" stroke="#127368" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    ),
    2: (
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_250_1112)">
      <path d="M41.6626 45.9386L34.7627 36.0806M34.7627 36.0806L31.1015 42.8394L24.9043 22.0001L42.3657 34.9522L34.7627 36.0806ZM18.3637 41.3982C15.546 40.0841 13.0958 38.0953 11.2303 35.6081C9.36473 33.1208 8.14138 30.2119 7.66857 27.1389C7.19577 24.0659 7.48812 20.9238 8.51972 17.9908C9.55133 15.0578 11.2903 12.4245 13.5827 10.3241C15.8751 8.22372 18.6501 6.72109 21.6619 5.94933C24.6738 5.17757 27.8294 5.16049 30.8494 5.8996C33.8694 6.63872 36.6605 8.11121 38.9755 10.1867C41.2905 12.2621 43.0579 14.8764 44.1212 17.7981M21.2709 35.1675C19.4776 34.3315 17.9182 33.066 16.7307 31.4833C15.5433 29.9005 14.7646 28.0493 14.4635 26.0937C14.1624 24.1381 14.3483 22.1384 15.0047 20.2718C15.6611 18.4052 16.7678 16.7293 18.2266 15.3926C19.6855 14.0558 21.4515 13.0995 23.3682 12.6084C25.2849 12.1172 27.2932 12.1064 29.2151 12.5768C31.137 13.0472 32.9133 13.9844 34.3865 15.3053C35.8596 16.6262 36.9843 18.2901 37.6608 20.1495" stroke="#127368" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_250_1112">
      <rect width="55" height="55" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    ),
    3: (
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_250_1117)">
      <path d="M41.6623 45.6856L34.7625 35.8276M34.7625 35.8276L31.1013 42.5864L24.9041 21.7471L42.3655 34.6992L34.7625 35.8276ZM19.8886 6.24535L21.6522 11.0906M34.3456 6.87545L32.1664 11.5486M44.121 17.5451L39.2757 19.3086M20.5434 36.4742L18.3657 41.1444M13.4342 28.7142L8.58888 30.4777M13.8922 18.1999L9.22191 16.0222" stroke="#127368" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_250_1117">
      <rect width="55" height="55" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    )
  };

  return (
    <div className="relative w-60 h-16  rounded-lg overflow-hidden">
      <div 
        className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out"
        style={{ left: `${position}px` }}
      >
        {svgComponents[currentSvg]}
      </div>
    </div>
  );
};

export default MovingSvgAnimation;