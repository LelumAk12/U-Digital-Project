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
  return <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <span className="w-16 sm:w-20 h-0.5 bg-brand-teal"></span>
            OUR WORK
            <span className="w-16 sm:w-20 h-0.5 bg-brand-teal"></span>
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Success Stories
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Explore our portfolio of successful campaigns and projects that have
            helped brands achieve their goals and exceed expectations.
          </p>
        </div>
        <div className="flex justify-center gap-4 sm:gap-5 mb-8 sm:mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full whitespace-nowrap transition-all text-base sm:text-lg font-medium ${activeTab === tab ? 'bg-brand-teal text-white' : 'bg-brand-cyan-light text-brand-dark hover:bg-opacity-80'}`}>
              {tab}
            </button>)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </div>
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-brand-teal hover:bg-brand-hover text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-medium transition-all text-base sm:text-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>;
}