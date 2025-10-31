import React from 'react';
import { PlayCircleIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function HeroSection() {
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
  return <section className="w-full bg-gradient-to-br from-brand-dark to-brand-teal-dark text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-slideInLeft leading-tight">
            Creative
            <br />
            <span className="text-brand-cyan-light">Digital</span>
            <br />
            Solution
          </h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-200 animate-slideInLeft" style={{
          animationDelay: '0.2s'
        }}>
            Professional videography, photography, and digital marketing
            services in Colombo, Sri Lanka. Quality services at affordable
            prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slideInLeft" style={{
          animationDelay: '0.4s'
        }}>
            <Link to="/pricing" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-brand-teal text-white px-6 sm:px-8 py-3 rounded-full hover:opacity-90 font-medium transition-all hover:scale-105 text-sm sm:text-base">
                Start Your Project
              </button>
            </Link>
            <a href="#portfolio" onClick={e => handleSmoothScroll(e, '#portfolio')} className="w-full sm:w-auto bg-brand-coral text-white px-6 sm:px-8 py-3 rounded-full hover:opacity-90 font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer text-sm sm:text-base">
              <PlayCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Watch Our Story
            </a>
          </div>
        </div>
      </div>
    </section>;
}