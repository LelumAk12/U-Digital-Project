import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CalendarIcon, UsersIcon, TrendingUpIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function PortfolioDetailPage() {
  const challenges = ['Outdated brand identity lacking modern appeal', 'Inconsistent visual identity across platforms', 'Limited market recognition in competitive space'];
  const solutions = ['Complete brand identity redesign', 'Professional video content creation', 'Strategic digital marketing campaigns to establish strong market presence'];
  const services = [{
    title: 'Brand Identity Design',
    description: 'Logo, color palette, typography'
  }, {
    title: 'Video Production',
    description: 'Promotional videos, testimonials'
  }, {
    title: 'Digital Marketing',
    description: 'Social media campaigns, content strategy'
  }];
  const impacts = [{
    value: '150%',
    label: 'Brand Recognition'
  }, {
    value: '300%',
    label: 'Social Media Engagement'
  }, {
    value: '80%',
    label: 'Client Satisfaction'
  }];
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 text-center">
            TECHSTART REBRANDING SUCCESS
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How we transformed a growing tech startup's brand identity and
            increased their market recognition by 150%
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <img src="/2.png" alt="TechStart project" className="w-full rounded-lg shadow-lg" />
              <div className="mt-6">
                <Link to="/pricing">
                  <button className="w-full bg-brand-teal text-white py-3 rounded-lg hover:opacity-90 font-medium transition-opacity">
                    Start Your Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarIcon className="w-6 h-6 text-brand-teal" />
                  <h3 className="font-bold text-brand-dark">
                    Project Timeline
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">March - April 2024</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <UsersIcon className="w-6 h-6 text-brand-teal" />
                  <h3 className="font-bold text-brand-dark">Team Size</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  5 specialists - Videographer, Photographer, Marketing Expert
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUpIcon className="w-6 h-6 text-brand-teal" />
                  <h3 className="font-bold text-brand-dark">Results</h3>
                </div>
                <p className="text-2xl font-bold text-brand-teal mb-1">+150%</p>
                <p className="text-gray-600 text-sm">
                  Brand Recognition Increase
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                The Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                TechStart was struggling with brand recognition in a competitive
                market. Their outdated visual identity and lack of cohesive
                marketing strategy were limiting their growth potential.
              </p>
              <ul className="space-y-2">
                {challenges.map((challenge, index) => <li key={index} className="text-gray-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>{challenge}</span>
                  </li>)}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Our Solution
              </h3>
              <p className="text-gray-600 mb-4">
                We developed a comprehensive rebranding strategy that included
                new visual identity, promotional videos, and digital marketing
                campaigns to establish strong market presence.
              </p>
              <ul className="space-y-2">
                {solutions.map((solution, index) => <li key={index} className="text-gray-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>{solution}</span>
                  </li>)}
              </ul>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">
              SERVICES UTILIZED
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-brand-dark mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>)}
            </div>
          </div>
          <div className="bg-gradient-to-br from-brand-dark to-brand-teal-dark text-white p-12 rounded-lg mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Project Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impacts.map((impact, index) => <div key={index} className="text-center">
                  <p className="text-4xl font-bold mb-2">{impact.value}</p>
                  <p className="text-gray-200">{impact.label}</p>
                </div>)}
            </div>
          </div>
          <div className="bg-gray-50 p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Call 076 807 1913 or
              visit our social media pages for more information.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/pricing">
                <button className="bg-brand-teal text-white px-8 py-3 rounded-lg hover:opacity-90 font-medium transition-opacity">
                  Start Your Project
                </button>
              </Link>
              <Link to="/">
                <button className="bg-brand-coral text-white px-8 py-3 rounded-lg hover:opacity-90 font-medium border-2 border-brand-coral transition-opacity">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}