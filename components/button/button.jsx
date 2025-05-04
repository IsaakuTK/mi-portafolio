import React from "react";

export const Button = ({ title='', onClick= () => {}, className='', onChange= () => {}, icon='' }) => {
  return (
    <button
      className={`bg-green1 text-white rounded-xl w-fit h-fit p-4 text-2xl cursor-pointer ${className}`}
      value={title}
      onClick={onClick}
      onChange={onChange}
    >
      {title}
      {icon && <span>{icon}</span>}
    </button>
  );
};