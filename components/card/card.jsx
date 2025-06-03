import React from "react";
import { Button } from "../button/button";

export const Card = ({ 
  title = 'Name', 
  description = 'Description', 
  onClick = () => {}, 
  className = '', 
  backgroundImage = '' 
}) => {
  return (
    <div 
      className={`flex w-75 h-75 border-5 rounded-3xl border-green1 overflow-hidden items-end group ${className}`} style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="flex w-full h-25 bg-gray4 items-center justify-between p-2 transition-all duration-300 ease-in-out group-hover:h-full group-hover:items-start">
        <div className="flex-1 min-w-0 pr-4 overflow-hidden">  
          <h2 className="truncate font-bold group-hover:pb-4">{title}</h2>
          <p className="opacity-0 max-h-0 transition-all duration-50 ease-in-out group-hover:opacity-100 group-hover:max-h-[calc(100%-2rem)] break-words overflow-hidden text-ellipsis line-clamp-10">
            {description}
          </p>
        </div>
        <Button title="View" className='text-lg transition-all duration-300 ease-in-out group-hover:h-full' onClick={onClick}/>
      </div>
    </div>
  );
};