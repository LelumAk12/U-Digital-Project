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
  return <>
      <div className="w-full bg-brand-dark text-white py-2 px-6 flex justify-between items-center text-sm">
        <div className="flex gap-6">
          <a href="tel:+94768428972" className="flex items-center gap-2 hover:text-brand-cyan-light transition-colors">
            <PhoneIcon className="w-4 h-4" />
            <span>+9476 842 8972</span>
          </a>
          <a href="mailto:info@Uexpert@gmail.com" className="flex items-center gap-2 hover:text-brand-cyan-light transition-colors">
            <MailIcon className="w-4 h-4" />
            <span>info@Uexpert@gmail.com</span>
          </a>
        </div>
        <div className="text-sm hidden md:block">
          Follow us on social media for the latest updates
        </div>
      </div>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-400 rounded"></div>
            <span className="text-xl font-bold text-brand-dark">U DIGITAL</span>
          </Link>
          <button className="md:hidden text-brand-dark" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-brand-teal transition-colors">
              Home
            </Link>
            <a href="#services" onClick={e => handleNavClick(e, '#services')} className="text-gray-700 hover:text-brand-teal transition-colors cursor-pointer">
              Services
            </a>
            <a href="#about" onClick={e => handleNavClick(e, '#about')} className="text-gray-700 hover:text-brand-teal transition-colors cursor-pointer">
              About
            </a>
            <a href="#portfolio" onClick={e => handleNavClick(e, '#portfolio')} className="text-gray-700 hover:text-brand-teal transition-colors cursor-pointer">
              Portfolio
            </a>
            <a href="#contact" onClick={e => handleNavClick(e, '#contact')} className="text-gray-700 hover:text-brand-teal transition-colors cursor-pointer">
              Contact
            </a>
            <Link to="/pricing">
              <button className="bg-brand-teal text-white px-6 py-2 rounded-full hover:bg-brand-teal-dark transition-all hover:scale-105">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
        {mobileMenuOpen && <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6 animate-fadeIn">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-gray-700 hover:text-brand-teal transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <a href="#services" onClick={e => handleNavClick(e, '#services')} className="text-gray-700 hover:text-brand-teal transition-colors">
                Services
              </a>
              <a href="#about" onClick={e => handleNavClick(e, '#about')} className="text-gray-700 hover:text-brand-teal transition-colors">
                About
              </a>
              <a href="#portfolio" onClick={e => handleNavClick(e, '#portfolio')} className="text-gray-700 hover:text-brand-teal transition-colors">
                Portfolio
              </a>
              <a href="#contact" onClick={e => handleNavClick(e, '#contact')} className="text-gray-700 hover:text-brand-teal transition-colors">
                Contact
              </a>
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-brand-teal text-white px-6 py-2 rounded-full hover:bg-brand-teal-dark transition-all">
                  Get Started
                </button>
              </Link>
            </nav>
          </div>}
      </header>
    </>;
}