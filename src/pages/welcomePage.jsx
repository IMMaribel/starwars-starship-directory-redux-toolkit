import React from 'react';
import HorizontalScroll from '../hooks/horizontalScroll';
import starsbg from '../assets/starsbg.mp4'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WelcomePage = () => {

  const handleNavigation = () => {
    if (isAuthenticated) {
      navigate('/starships');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-800 text-white">
      <div className="mx-auto px-4 py-16">
      <video 
        className="absolute inset-0 w-full min-h-full object-cover bg-center"
        src={starsbg}
        autoPlay
        loop
        muted
      />
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-4xl font-bold font-chackra text-center">
            Welcome to the Star Wars Starship Directory
          </h1>
          <HorizontalScroll/>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
