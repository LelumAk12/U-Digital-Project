import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MenuIcon, XIcon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isHomePage) {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  };
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  };
  return <>
      <div className="w-full bg-brand-dark text-white py-2 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
            <a href="tel:+94768428972" className="flex items-center gap-2 hover:text-brand-cyan-light transition-colors">
              <PhoneIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>+9476 842 8972</span>
            </a>
            <a href="mailto:info@Uexpert@gmail.com" className="flex items-center gap-2 hover:text-brand-cyan-light transition-colors">
              <MailIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">info@Uexpert@gmail.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
          </div>
          <div className="text-xs hidden lg:block">
            Follow us on social media for the latest updates
          </div>
        </div>
      </div>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-400 to-orange-400 rounded"></div>
            <span className="text-lg sm:text-xl font-bold text-brand-dark">
              U DIGITAL
            </span>
          </a>
          <button className="md:hidden text-brand-dark p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
            <a href="/" onClick={handleHomeClick} className="text-sm lg:text-base text-gray-700 hover:text-brand-teal transition-colors cursor-pointer">
              Home
            </a>
            <a href="#services" onClick={e => handleNavClick(e, '#services')} className="text-sm lg:text-base text-gray-700 hover:text-brand-teal transition-colors cursor-pointer">
              Services
            </a>
            <a href="#about" onClick={e => handleNavClick(e, '#about')} className="text-sm lg:text-base text-gray-700 hover:text-brand-teal transition-colors cursor-pointer">
              About
            </a>
            <a href="#portfolio" onClick={e => handleNavClick(e, '#portfolio')} className="text-sm lg:text-base text-gray-700 hover:text-brand-teal transition-colors cursor-pointer">
              Portfolio
            </a>
            <a href="#contact" onClick={e => handleNavClick(e, '#contact')} className="text-sm lg:text-base text-gray-700 hover:text-brand-teal transition-colors cursor-pointer">
              Contact
            </a>
            <Link to="/pricing">
              <button className="bg-brand-teal text-white px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base hover:bg-brand-teal-dark transition-all hover:scale-105">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
        {mobileMenuOpen && <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 animate-fadeIn">
            <nav className="flex flex-col gap-4">
              <a href="/" onClick={handleHomeClick} className="text-gray-700 hover:text-brand-teal transition-colors py-2 text-base">
                Home
              </a>
              <a href="#services" onClick={e => handleNavClick(e, '#services')} className="text-gray-700 hover:text-brand-teal transition-colors py-2 text-base">
                Services
              </a>
              <a href="#about" onClick={e => handleNavClick(e, '#about')} className="text-gray-700 hover:text-brand-teal transition-colors py-2 text-base">
                About
              </a>
              <a href="#portfolio" onClick={e => handleNavClick(e, '#portfolio')} className="text-gray-700 hover:text-brand-teal transition-colors py-2 text-base">
                Portfolio
              </a>
              <a href="#contact" onClick={e => handleNavClick(e, '#contact')} className="text-gray-700 hover:text-brand-teal transition-colors py-2 text-base">
                Contact
              </a>
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-brand-teal text-white px-6 py-3 rounded-full hover:bg-brand-teal-dark transition-all text-base">
                  Get Started
                </button>
              </Link>
            </nav>
          </div>}
      </header>
    </>;
}