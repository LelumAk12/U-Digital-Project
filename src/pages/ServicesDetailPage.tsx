import React, { useState, createElement } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import { CheckIcon, VideoIcon, ChevronLeftIcon, ChevronRightIcon, CameraIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function ServicesDetailPage() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const services = [{
    icon: VideoIcon,
    title: 'Videography Services',
    description: 'Professional video production for all your needs, from documentaries to promotional content.',
    whatsIncluded: ['Live Streaming Events', 'Corporate Documentary Production', 'Promotional Video Creation', 'Advertising Video Production', 'Event Coverage & Highlights', 'Professional Interview Setup'],
    price: '25,000'
  }, {
    icon: CameraIcon,
    title: 'Photography Services',
    description: 'High-quality photography services for events, portraits, and commercial purposes.',
    whatsIncluded: ['Event Photography', 'Portrait Sessions', 'Commercial Shoots', 'Product Photography', 'Real Estate Photography', 'Professional Editing'],
    price: '20,000'
  }];
  const currentService = services[currentServiceIndex];
  const handlePrevious = () => {
    setCurrentServiceIndex(prev => prev === 0 ? services.length - 1 : prev - 1);
  };
  const handleNext = () => {
    setCurrentServiceIndex(prev => prev === services.length - 1 ? 0 : prev + 1);
  };
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <section className="w-full py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="w-12 sm:w-16 h-0.5 bg-brand-teal"></span>
              OUR SERVICES
              <span className="w-12 sm:w-16 h-0.5 bg-brand-teal"></span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto px-4">
              Professional videography, photography, and digital marketing
              services in Colombo, Sri Lanka. Quality services at affordable
              prices.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-8 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                {createElement(currentService.icon, {
                className: 'w-6 h-6 sm:w-8 sm:h-8 text-white'
              })}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2 sm:mb-3">
                  {currentService.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                  {currentService.description}
                </p>
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-bold text-brand-dark mb-2 sm:mb-3 text-sm sm:text-base">
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {currentService.whatsIncluded.map((item, index) => <div key={index} className="flex items-center gap-2 justify-center sm:justify-start">
                        <div className="w-5 h-5 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-800">
                          {item}
                        </span>
                      </div>)}
                  </div>
                </div>
                <div className="bg-brand-cyan-light p-4 sm:p-6 rounded-lg">
                  <h4 className="font-bold text-brand-dark mb-2 sm:mb-4 text-sm sm:text-base">
                    Starting From LKR {currentService.price}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-800 mb-3 sm:mb-4">
                    Get pricing starting at LKR {currentService.price}
                  </p>
                  <Link to="/pricing">
                    <button className="bg-brand-teal text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-md hover:bg-brand-hover font-medium transition-all text-base w-full sm:w-auto">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <button onClick={handlePrevious} className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-brand-teal rounded-full flex items-center justify-center hover:bg-brand-cyan-light transition-colors">
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-teal" />
            </button>
            <div className="text-center">
              <p className="text-gray-700 text-xs sm:text-sm">
                Service {currentServiceIndex + 1} of {services.length}
              </p>
            </div>
            <button onClick={handleNext} className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-brand-teal rounded-full flex items-center justify-center hover:bg-brand-cyan-light transition-colors">
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-teal" />
            </button>
          </div>
          <div className="bg-brand-dark text-white p-6 sm:p-12 rounded-lg text-center">
            <h3 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-sm sm:text-base text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Call 076 807 1913 or
              visit our social media pages for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/pricing">
                <button className="w-full sm:w-auto bg-brand-teal text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-md hover:bg-brand-hover font-medium transition-all text-base">
                  Get Started
                </button>
              </Link>
              <a href="#contact">
                <button className="w-full sm:w-auto bg-white text-brand-dark px-6 sm:px-7 py-3 sm:py-3.5 rounded-md hover:opacity-90 font-medium transition-opacity text-base">
                  View Our Work
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>;
}