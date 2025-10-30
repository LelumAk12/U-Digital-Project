import React from 'react';
import { PlayCircleIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="w-full bg-gradient-to-br from-teal-900 to-teal-700 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Creative
            <br />
            <span className="text-teal-300">Digital</span>
            <br />
            Solution
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Professional videography, photography, and digital marketing
            services in Colombo, Sri Lanka. Quality services at affordable
            prices.
          </p>
          <div className="flex gap-4">
            <button className="bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-600 font-medium">
              Start Your Project
            </button>
            <button className="bg-white text-teal-900 px-8 py-3 rounded-full hover:bg-gray-100 font-medium flex items-center gap-2">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Our Story
            </button>
          </div>
        </div>
      </div>
    </section>;
}