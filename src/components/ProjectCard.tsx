import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  projectId?: string;
}
export function ProjectCard({
  image,
  title,
  description,
  tags,
  projectId = 'techstart-rebranding'
}: ProjectCardProps) {
  return <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4 bg-brand-teal text-white px-4 py-2 rounded-full text-base font-medium">
          Branding
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-brand-dark mb-3">{title}</h3>
        <p className="text-gray-600 text-base mb-5 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
              {tag}
            </span>)}
        </div>
        <Link to={`/portfolio/${projectId}`}>
          <button className="text-brand-teal font-medium flex items-center gap-2 hover:gap-3 transition-all text-base sm:text-lg">
            View Case Study <ChevronRightIcon className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>;
}