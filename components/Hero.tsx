import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[211px] hidden md:flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://framerusercontent.com/images/ypu5OBld5NugrZJspI6dyFOkUnI.jpg)" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};

export default Hero;
