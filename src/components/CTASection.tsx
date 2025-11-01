import React from 'react';
import { Link } from 'react-router-dom';
export function CTASection() {
  return <section className="w-full bg-gradient-to-br from-brand-dark to-brand-teal-dark text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-sm sm:text-base text-gray-200 mb-6 sm:mb-8">
          Contact us today for a free consultation. Call 076 842 1913 or visit
          our social media pages for more information.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/pricing" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-brand-teal hover:bg-brand-hover text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base">
              Get Started
            </button>
          </Link>
          <a href="#portfolio" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white text-brand-dark px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:opacity-90 font-medium transition-opacity text-sm sm:text-base">
              View Our Work
            </button>
          </a>
        </div>
      </div>
    </section>;
}