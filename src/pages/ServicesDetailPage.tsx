import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CheckIcon, VideoIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function ServicesDetailPage() {
  const whatsIncluded = ['Live Streaming Events', 'Corporate Documentary Production', 'Promotional Video Creation', 'Advertising Video Production', 'Event Coverage & Highlights', 'Professional Interview Setup'];
  const processSteps = ['Initial Consultation & Concept Development', 'Pre-production Planning & Scripting', 'Professional Filming with HD Equipment', 'Post-production Editing & Color Grading', 'Final Delivery in Multiple Formats'];
  const features = ['Professional Equipment', 'Creative Storytelling', 'Fast Turnaround', 'Quality Assurance', 'Client-Centric Approach'];
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4 flex items-center justify-center gap-4">
              <span className="w-16 h-0.5 bg-brand-teal"></span>
              OUR SERVICES
              <span className="w-16 h-0.5 bg-brand-teal"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional videography, photography, and digital marketing
              services in Colombo, Sri Lanka. Quality services at affordable
              prices.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-lg flex items-center justify-center flex-shrink-0">
                <VideoIcon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">
                  Videography Services
                </h3>
                <p className="text-gray-600 mb-6">
                  Professional video production for all your needs, from
                  documentaries to promotional content.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold text-brand-dark mb-3">
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {whatsIncluded.map((item, index) => <div key={index} className="flex items-center gap-2">
                        <CheckIcon className="w-5 h-5 text-brand-teal flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>)}
                  </div>
                </div>
                <div className="bg-brand-cyan-light p-6 rounded-lg">
                  <h4 className="font-bold text-brand-dark mb-4">
                    Starting From LKR 25,000
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Get pricing starting at LKR 25,000
                  </p>
                  <Link to="/pricing">
                    <button className="bg-brand-teal text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:opacity-90 font-medium transition-opacity text-sm sm:text-base">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {features.map((feature, index) => <div key={index} className="bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple text-white p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-white text-brand-maroon rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  {index + 1}
                </div>
                <p className="text-sm">{feature}</p>
              </div>)}
          </div>
          <div className="flex justify-between items-center mb-12">
            <button className="w-12 h-12 bg-white border-2 border-brand-teal rounded-full flex items-center justify-center hover:bg-brand-cyan-light transition-colors">
              <ChevronLeftIcon className="w-6 h-6 text-brand-teal" />
            </button>
            <button className="w-12 h-12 bg-white border-2 border-brand-teal rounded-full flex items-center justify-center hover:bg-brand-cyan-light transition-colors">
              <ChevronRightIcon className="w-6 h-6 text-brand-teal" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-brand-dark to-brand-teal-dark text-white p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Call 076 807 1913 or
              visit our social media pages for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/pricing">
                <button className="w-full sm:w-auto bg-brand-teal text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:opacity-90 font-medium transition-opacity text-sm sm:text-base">
                  Call Now
                </button>
              </Link>
              <a href="#contact">
                <button className="w-full sm:w-auto bg-brand-coral text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:opacity-90 font-medium transition-opacity text-sm sm:text-base">
                  View Our Work
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}