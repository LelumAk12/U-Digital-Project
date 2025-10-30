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
  return <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-dark mb-4 flex items-center justify-center gap-4">
            <span className="w-16 h-0.5 bg-brand-teal"></span>
            OUR WORK
            <span className="w-16 h-0.5 bg-brand-teal"></span>
          </h2>
          <h3 className="text-4xl font-bold text-brand-dark mb-4">
            Success Stories
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful campaigns and projects that have
            helped brands achieve their goals and exceed expectations.
          </p>
        </div>
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${activeTab === tab ? 'bg-brand-teal text-white' : 'bg-brand-cyan-light text-brand-dark hover:bg-opacity-80'}`}>
              {tab}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </div>
        <div className="text-center mt-12">
          <button className="bg-brand-coral text-white px-8 py-3 rounded-full hover:opacity-90 font-medium transition-opacity">
            View All Projects
          </button>
        </div>
      </div>
    </section>;
}