import React from 'react';
import { Link } from 'react-router-dom';
export function CTASection() {
  return <section className="w-full bg-gradient-to-br from-brand-dark to-brand-teal-dark text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-200 mb-8">
          Contact us today for a free consultation. Call 076 842 1913 or visit
          our social media pages for more information.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/pricing">
            <button className="bg-brand-teal text-white px-8 py-3 rounded-full hover:opacity-90 font-medium transition-opacity">
              Get Started
            </button>
          </Link>
          <a href="#portfolio">
            <button className="bg-brand-coral text-white px-8 py-3 rounded-full hover:opacity-90 font-medium transition-opacity">
              View Our Work
            </button>
          </a>
        </div>
      </div>
    </section>;
}