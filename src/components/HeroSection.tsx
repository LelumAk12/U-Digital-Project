import React, { useState } from 'react';
import { PlayCircleIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
export function HeroSection() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();
  const handleStartProject = () => {
    window.location.href = '/pricing';
  };
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section className="w-full text-white py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 animate-fadeIn relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('https://uploadthingy.s3.us-west-1.amazonaws.com/29u847edogzbwUHHKSczbE/5.jpg')"
    }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-teal-dark to-brand-dark opacity-95"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-hero-title font-bold mb-6 sm:mb-8 animate-slideInLeft leading-tight">
            Creative
            <br />
            <span className="text-brand-teal">Digital</span>
            <br />
            Solution
          </h1>
          <p className="text-xl sm:text-2xl md:text-2xl mb-8 sm:mb-10 text-gray-200 animate-slideInLeft leading-relaxed" style={{
          animationDelay: '0.2s'
        }}>
            Professional videography, photography, and digital marketing
            services in Colombo, Sri Lanka. Quality services at affordable
            prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 animate-slideInLeft" style={{
          animationDelay: '0.4s'
        }}>
            <button onClick={handleStartProject} className="w-full sm:w-auto bg-brand-teal hover:bg-brand-hover text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-md font-medium transition-all text-base">
              Start Your Project
            </button>
            <a href="#portfolio" onClick={e => handleSmoothScroll(e, '#portfolio')} className="w-full sm:w-auto bg-white text-brand-dark px-6 sm:px-7 py-3 sm:py-3.5 rounded-md hover:opacity-90 font-medium flex items-center justify-center gap-3 transition-all cursor-pointer text-base">
              <PlayCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              Watch Our Story
            </a>
          </div>
        </div>
      </div>
    </section>;
}