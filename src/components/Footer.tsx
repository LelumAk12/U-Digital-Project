import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
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
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };
  const services = [{
    name: 'Live Streaming',
    section: '#services'
  }, {
    name: 'Profile Video',
    section: '#services'
  }, {
    name: 'Interview Setup',
    section: '#services'
  }, {
    name: 'Documentary',
    section: '#services'
  }, {
    name: 'Videography',
    section: '#services'
  }, {
    name: 'Photography',
    section: '#services'
  }, {
    name: 'Digital Marketing',
    section: '#services'
  }, {
    name: 'Advertising',
    section: '#services'
  }, {
    name: 'Video Production',
    section: '#services'
  }, {
    name: 'FB Post Design',
    section: '#services'
  }, {
    name: 'CV Design',
    section: '#services'
  }];
  const company = [{
    name: 'About Us',
    section: '#about'
  }, {
    name: 'Our Portfolio',
    section: '#portfolio'
  }, {
    name: 'Client Reviews',
    section: '#contact'
  }, {
    name: 'Career Opportunities',
    section: '#contact'
  }, {
    name: 'Contact Us',
    section: '#contact'
  }, {
    name: 'Get Quote',
    link: '/pricing'
  }];
  const followUs = [{
    name: 'YouTube Channel',
    url: '#'
  }, {
    name: 'TikTok Page',
    url: '#'
  }, {
    name: 'Facebook Page',
    url: '#'
  }, {
    name: 'Instagram',
    url: '#'
  }, {
    name: 'LinkedIn',
    url: '#'
  }, {
    name: 'WhatsApp',
    url: '#'
  }];
  return <footer className="w-full bg-brand-dark text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/favicon.png" alt="U Digital Logo" className="w-10 h-10" />
              <h4 className="text-lg sm:text-xl font-bold">U DIGITAL</h4>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              U DIGITAL EXPERT LANKA PVT LTD - Your one-stop solution for
              videography, photography, and digital marketing services in Sri
              Lanka. Quality services at affordable prices.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {services.map((service, index) => <li key={index} onClick={() => handleNavClick(service.section)} className="hover:text-white cursor-pointer transition-colors">
                  {service.name}
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {company.map((item, index) => <li key={index}>
                  {item.link ? <Link to={item.link} className="hover:text-white cursor-pointer transition-colors block">
                      {item.name}
                    </Link> : <span onClick={() => handleNavClick(item.section)} className="hover:text-white cursor-pointer transition-colors block">
                      {item.name}
                    </span>}
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">Follow Us</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {followUs.map((item, index) => <li key={index}>
                  <a href={item.url} className="hover:text-white cursor-pointer transition-colors block">
                    {item.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-teal-dark pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p className="leading-relaxed">
            2025 © All Rights Reserved | U Digital Expert | Designed &
            Developed by{' '}
            <a href="https://everefficient.lk/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors underline">
              EVER EFFICIENT Business Management (Pvt) Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>;
}