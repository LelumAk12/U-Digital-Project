import React from 'react';
import { PhoneIcon, MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Header() {
  return <>
      <div className="w-full bg-brand-dark text-white py-2 px-6 flex justify-between items-center text-sm">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-4 h-4" />
            <span>+9476 842 8972</span>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="w-4 h-4" />
            <span>info@Uexpert@gmail.com</span>
          </div>
        </div>
        <div className="text-sm">
          Follow us on social media for the latest updates
        </div>
      </div>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-400 rounded"></div>
            <span className="text-xl font-bold text-brand-dark">U DIGITAL</span>
          </Link>
          <nav className="flex gap-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-brand-teal">
              Home
            </Link>
            <a href="#services" className="text-gray-700 hover:text-brand-teal">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-brand-teal">
              About
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-brand-teal">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-700 hover:text-brand-teal">
              Contact
            </a>
            <Link to="/pricing">
              <button className="bg-brand-teal text-white px-6 py-2 rounded-full hover:bg-brand-teal-dark">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </>;
}