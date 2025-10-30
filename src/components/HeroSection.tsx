import React from 'react';
import { PlayCircleIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="w-full bg-gradient-to-br from-brand-dark to-brand-teal-dark text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Creative
            <br />
            <span className="text-brand-cyan-light">Digital</span>
            <br />
            Solution
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Professional videography, photography, and digital marketing
            services in Colombo, Sri Lanka. Quality services at affordable
            prices.
          </p>
          <div className="flex gap-4">
            <button className="bg-brand-teal text-white px-8 py-3 rounded-full hover:opacity-90 font-medium transition-opacity">
              Start Your Project
            </button>
            <button className="bg-brand-coral text-white px-8 py-3 rounded-full hover:opacity-90 font-medium flex items-center gap-2 transition-opacity">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Our Story
            </button>
          </div>
        </div>
      </div>
    </section>;
}