export const ToggleMode = ({ isActive, onChange }) => {
  
  const handleToggle = () => {
    if (onChange) {
      onChange(!isActive);
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        checked={isActive}
        onChange={handleToggle}
        className="sr-only peer" 
      />
      <div className="flex items-center justify-center px-1 group peer ring-0 bg-gray3 rounded-full outline-none duration-300 after:duration-300 w-25 h-13 shadow-md peer-checked:bg-green1 peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-green1 after:outline-none after:h-11 after:w-11 after:top-1 after:right-1 after:flex after:justify-center after:items-center peer-checked:after:bg-gray3 peer-checked:after:-translate-x-12 peer-hover:after:scale-95">
      
      <div className="flex w-11 items-center justify-center">
        <svg className="left-12 w-7 h-7" height="100" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 17.5035C23.4152 18.164 21.7148 18.503 19.9979 18.5007C12.8186 18.5007 6.99925 12.6814 6.99925 5.50213C6.99925 3.72899 7.35388 2.03984 7.99648 0.5C5.62802 1.48804 3.60491 3.15485 2.18194 5.2905C0.758966 7.42614 -0.000219475 9.9351 4.75938e-08 12.5014C4.75938e-08 19.6806 5.81938 25.5 12.9986 25.5C15.5649 25.5002 18.0739 24.741 20.2095 23.3181C22.3451 21.8951 24.012 19.872 25 17.5035Z" fill="#127368"/>
        </svg>
      </div>

      <div className="flex w-11 items-center justify-center">
        <svg className="left-12 w-7 h-7" height="100" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 1.5V4.625ZM22.3389 5.16111L20.1292 7.37083ZM26 14H22.875ZM22.3389 22.8389L20.1292 20.6292ZM13.5 23.375V26.5ZM6.87083 20.6292L4.66111 22.8389ZM4.125 14H1ZM6.87083 7.37083L4.66111 5.16111ZM18.7083 14C18.7083 15.3813 18.1596 16.7061 17.1828 17.6828C16.2061 18.6596 14.8813 19.2083 13.5 19.2083C12.1187 19.2083 10.7939 18.6596 9.81715 17.6828C8.8404 16.7061 8.29167 15.3813 8.29167 14C8.29167 12.6187 8.8404 11.2939 9.81715 10.3172C10.7939 9.3404 12.1187 8.79167 13.5 8.79167C14.8813 8.79167 16.2061 9.3404 17.1828 10.3172C18.1596 11.2939 18.7083 12.6187 18.7083 14Z" fill="#D9D9D9"/>
          <path d="M13.5 1.5V4.625M22.3389 5.16111L20.1292 7.37083M26 14H22.875M22.3389 22.8389L20.1292 20.6292M13.5 23.375V26.5M6.87083 20.6292L4.66111 22.8389M4.125 14H1M6.87083 7.37083L4.66111 5.16111M18.7083 14C18.7083 15.3813 18.1596 16.7061 17.1828 17.6828C16.2061 18.6596 14.8813 19.2083 13.5 19.2083C12.1187 19.2083 10.7939 18.6596 9.81715 17.6828C8.8404 16.7061 8.29167 15.3813 8.29167 14C8.29167 12.6187 8.8404 11.2939 9.81715 10.3172C10.7939 9.3404 12.1187 8.79167 13.5 8.79167C14.8813 8.79167 16.2061 9.3404 17.1828 10.3172C18.1596 11.2939 18.7083 12.6187 18.7083 14Z" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      </div>
    </label>
  );
};