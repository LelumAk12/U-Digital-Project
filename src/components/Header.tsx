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
      window.scrollTo(0, 0);
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
          const element = document.querySelector(sectionId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
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
    }
  };
  return <>
      <div className="w-full bg-brand-dark text-white py-2 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm sm:text-base">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center w-full sm:w-auto">
            <a href="tel:+94768428972" className="flex items-center gap-2 hover:text-brand-cyan-light transition-colors">
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>+9476 842 8972</span>
            </a>
            <a href="mailto:info@Uexpert@gmail.com" className="flex items-center gap-2 hover:text-brand-cyan-light transition-colors">
              <MailIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">info@Uexpert@gmail.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
            <div className="text-sm text-center sm:text-left lg:hidden">
              Follow us on social media for the latest updates
            </div>
          </div>
          <div className="text-sm hidden lg:block">
            Follow us on social media for the latest updates
          </div>
        </div>
      </div>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer">
            <img src="/favicon.png" alt="U Digital Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-xl sm:text-2xl font-bold text-brand-dark">
              U DIGITAL
            </span>
          </a>
          <button className="md:hidden text-brand-dark p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
          <nav className="hidden md:flex gap-8 lg:gap-10 items-center justify-center flex-1">
            <a href="/" onClick={handleHomeClick} className="text-lg lg:text-xl text-gray-800 hover:text-brand-teal transition-colors cursor-pointer font-medium">
              Home
            </a>
            <a href="#services" onClick={e => handleNavClick(e, '#services')} className="text-lg lg:text-xl text-gray-800 hover:text-brand-teal transition-colors cursor-pointer font-medium">
              Services
            </a>
            <a href="#about" onClick={e => handleNavClick(e, '#about')} className="text-lg lg:text-xl text-gray-800 hover:text-brand-teal transition-colors cursor-pointer font-medium">
              About
            </a>
            <a href="#portfolio" onClick={e => handleNavClick(e, '#portfolio')} className="text-lg lg:text-xl text-gray-800 hover:text-brand-teal transition-colors cursor-pointer font-medium">
              Portfolio
            </a>
            <a href="#contact" onClick={e => handleNavClick(e, '#contact')} className="text-lg lg:text-xl text-gray-800 hover:text-brand-teal transition-colors cursor-pointer font-medium">
              Contact
            </a>
          </nav>
          <Link to="/pricing" className="hidden md:block">
            <button className="bg-brand-teal text-white px-5 lg:px-6 py-2 sm:py-2.5 rounded-md text-base hover:bg-brand-hover transition-all">
              Get Started
            </button>
          </Link>
        </div>
        {mobileMenuOpen && <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 animate-fadeIn">
            <nav className="flex flex-col gap-4">
              <a href="/" onClick={handleHomeClick} className="text-gray-800 hover:text-brand-teal transition-colors py-2 text-lg font-medium">
                Home
              </a>
              <a href="#services" onClick={e => handleNavClick(e, '#services')} className="text-gray-800 hover:text-brand-teal transition-colors py-2 text-lg font-medium">
                Services
              </a>
              <a href="#about" onClick={e => handleNavClick(e, '#about')} className="text-gray-800 hover:text-brand-teal transition-colors py-2 text-lg font-medium">
                About
              </a>
              <a href="#portfolio" onClick={e => handleNavClick(e, '#portfolio')} className="text-gray-800 hover:text-brand-teal transition-colors py-2 text-lg font-medium">
                Portfolio
              </a>
              <a href="#contact" onClick={e => handleNavClick(e, '#contact')} className="text-gray-800 hover:text-brand-teal transition-colors py-2 text-lg font-medium">
                Contact
              </a>
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-brand-teal text-white px-6 py-2.5 rounded-md hover:bg-brand-hover transition-all text-lg">
                  Get Started
                </button>
              </Link>
            </nav>
          </div>}
      </header>
    </>;
}