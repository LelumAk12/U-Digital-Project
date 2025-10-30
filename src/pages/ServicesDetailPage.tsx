import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CheckIcon, VideoIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function ServicesDetailPage() {
  const whatsIncluded = ['Live Streaming Events', 'Corporate Documentary Production', 'Promotional Video Creation', 'Advertising Video Production', 'Event Coverage & Highlights', 'Professional Interview Setup'];
  const processSteps = ['Initial Consultation & Concept Development', 'Pre-production Planning & Scripting', 'Professional Filming with HD Equipment', 'Post-production Editing & Color Grading', 'Final Delivery in Multiple Formats'];
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-lg flex items-center justify-center mb-6">
                <VideoIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">
                Videography Services
              </h3>
              <p className="text-gray-600 mb-6">
                Professional video production for all your needs, from
                documentaries to promotional content.
              </p>
              <div className="mb-8">
                <h4 className="font-bold text-brand-dark mb-4">
                  What's Included:
                </h4>
                <div className="space-y-3">
                  {whatsIncluded.map((item, index) => <div key={index} className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-brand-teal flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>)}
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-2xl font-bold text-brand-teal mb-2">
                  Starting from LKR 25,000
                </h4>
                <p className="text-sm text-gray-600">
                  *Final pricing depends on project scale
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h4 className="font-bold text-brand-dark mb-6">
                What's Included:
              </h4>
              <div className="space-y-4">
                {processSteps.map((step, index) => <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-teal text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-2">{step}</p>
                  </div>)}
              </div>
            </div>
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
            <div className="flex gap-4 justify-center">
              <button className="bg-brand-teal text-white px-8 py-3 rounded-lg hover:opacity-90 font-medium transition-opacity">
                Call Now
              </button>
              <button className="bg-white text-brand-dark px-8 py-3 rounded-lg hover:bg-gray-100 font-medium transition-opacity">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}