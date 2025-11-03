import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
export function WorkSection() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const tabs = ['All Projects', 'Branding', 'Digital Marketing', 'Web Design', 'Campaigns'];
  const allProjects = [{
    image: "/2.jpg",
    title: 'TechStart Rebranding',
    description: 'Complete brand identity redesign for a growing tech startup.',
    tags: ['brand identity', 'logo design', 'guidelines'],
    category: 'Branding'
  }, {
    image: "/3.jpg",
    title: 'Social Media Campaign',
    description: 'Strategic digital marketing campaign for product launch.',
    tags: ['social media', 'content creation', 'analytics'],
    category: 'Digital Marketing'
  }, {
    image: "/4.jpg",
    title: 'E-Commerce Platform',
    description: 'Modern responsive website design for online retail business.',
    tags: ['web design', 'ui/ux', 'e-commerce'],
    category: 'Web Design'
  }, {
    image: "/2.jpg",
    title: 'Product Launch Campaign',
    description: 'Multi-channel advertising campaign for new product introduction.',
    tags: ['advertising', 'video production', 'strategy'],
    category: 'Campaigns'
  }];
  const filteredProjects = activeTab === 'All Projects' ? allProjects : allProjects.filter(project => project.category === activeTab);
  return <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
            <span className="w-16 sm:w-20 h-0.5 bg-brand-teal"></span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark">
              OUR WORK
            </h2>
            <span className="w-16 sm:w-20 h-0.5 bg-brand-teal"></span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Success Stories
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Explore our portfolio of successful campaigns and projects that have
            helped brands achieve their goals and exceed expectations.
          </p>
        </div>
        <div className="flex justify-start sm:justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 px-2">
          {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`px-2 sm:px-6 py-1.5 sm:py-3 rounded-md whitespace-nowrap transition-all text-[10px] sm:text-base font-medium flex-shrink-0 ${activeTab === tab ? 'bg-brand-teal text-white' : 'bg-brand-cyan-light text-brand-dark hover:bg-opacity-80'}`}>
              {tab}
            </button>)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </div>
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-brand-teal hover:bg-brand-hover text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base">
            View All Projects
          </button>
        </div>
      </div>
    </section>;
}