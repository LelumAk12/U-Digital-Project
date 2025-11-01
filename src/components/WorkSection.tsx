import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
export function WorkSection() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const tabs = ['All Projects', 'Branding', 'Digital Marketing', 'Web Design', 'Campaigns'];
  const projects = [{
    image: "/2.jpg",
    title: 'TechStart Rebranding',
    description: 'Complete brand identity redesign for a growing tech startup.',
    tags: ['brand identity', 'logo design', 'guidelines']
  }, {
    image: "/3.jpg",
    title: 'TechStart Rebranding',
    description: 'Complete brand identity redesign for a growing tech startup.',
    tags: ['brand identity', 'logo design', 'guidelines']
  }, {
    image: "/4.jpg",
    title: 'TechStart Rebranding',
    description: 'Complete brand identity redesign for a growing tech startup.',
    tags: ['brand identity', 'logo design', 'guidelines']
  }, {
    image: "/2.jpg",
    title: 'TechStart Rebranding',
    description: 'Complete brand identity redesign for a growing tech startup.',
    tags: ['brand identity', 'logo design', 'guidelines']
  }];
  return <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="w-12 sm:w-16 h-0.5 bg-brand-teal"></span>
            OUR WORK
            <span className="w-12 sm:w-16 h-0.5 bg-brand-teal"></span>
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Success Stories
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Explore our portfolio of successful campaigns and projects that have
            helped brands achieve their goals and exceed expectations.
          </p>
        </div>
        <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 sm:px-6 py-2 rounded-full whitespace-nowrap transition-all text-sm sm:text-base ${activeTab === tab ? 'bg-brand-teal text-white' : 'bg-brand-cyan-light text-brand-dark hover:bg-opacity-80'}`}>
              {tab}
            </button>)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-brand-coral text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:opacity-90 font-medium transition-opacity text-sm sm:text-base">
            View All Projects
          </button>
        </div>
      </div>
    </section>;
}