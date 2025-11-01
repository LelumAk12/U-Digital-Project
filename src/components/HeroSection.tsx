import React, { useState } from 'react';
import { PlayCircleIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
export function HeroSection() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const handleStartProject = () => {
    setIsButtonClicked(true);
    navigate('/pricing');
  };
  return <section className="w-full text-white py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 animate-fadeIn relative bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: "url('https://uploadthingy.s3.us-west-1.amazonaws.com/29u847edogzbwUHHKSczbE/5.jpg')"
  }}>
      <div className="absolute inset-0 bg-brand-dark bg-opacity-40"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-hero-title font-bold mb-6 sm:mb-8 animate-slideInLeft leading-tight">
            Creative
            <br />
            <span className="text-brand-cyan-light">Digital</span>
            <br />
            Solution
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-gray-200 animate-slideInLeft leading-relaxed" style={{
          animationDelay: '0.2s'
        }}>
            Professional videography, photography, and digital marketing
            services in Colombo, Sri Lanka. Quality services at affordable
            prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 animate-slideInLeft" style={{
          animationDelay: '0.4s'
        }}>
            <button onClick={handleStartProject} className="w-full sm:w-auto bg-brand-teal hover:bg-brand-hover text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-medium transition-all hover:scale-105 text-base sm:text-lg">
              Start Your Project
            </button>
            <a href="#portfolio" onClick={e => handleSmoothScroll(e, '#portfolio')} className="w-full sm:w-auto bg-white text-brand-dark px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:opacity-90 font-medium flex items-center justify-center gap-3 transition-all hover:scale-105 cursor-pointer text-base sm:text-lg">
              <PlayCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              Watch Our Story
            </a>
          </div>
        </div>
      </div>
    </section>;
}