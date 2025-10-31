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
  return <section className="w-full bg-gradient-to-br from-brand-dark to-brand-teal-dark text-white py-24 px-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6 animate-slideInLeft">
            Creative
            <br />
            <span className="text-brand-cyan-light">Digital</span>
            <br />
            Solution
          </h1>
          <p className="text-lg mb-8 text-gray-200 animate-slideInLeft" style={{
          animationDelay: '0.2s'
        }}>
            Professional videography, photography, and digital marketing
            services in Colombo, Sri Lanka. Quality services at affordable
            prices.
          </p>
          <div className="flex gap-4 animate-slideInLeft" style={{
          animationDelay: '0.4s'
        }}>
            <Link to="/pricing">
              <button className="bg-brand-teal text-white px-8 py-3 rounded-full hover:opacity-90 font-medium transition-all hover:scale-105">
                Start Your Project
              </button>
            </Link>
            <a href="#portfolio" onClick={e => handleSmoothScroll(e, '#portfolio')} className="bg-brand-coral text-white px-8 py-3 rounded-full hover:opacity-90 font-medium flex items-center gap-2 transition-all hover:scale-105 cursor-pointer">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Our Story
            </a>
          </div>
        </div>
      </div>
    </section>;
}