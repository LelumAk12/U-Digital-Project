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
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
          Branding
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-teal-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
              {tag}
            </span>)}
        </div>
        <Link to={`/portfolio/${projectId}`}>
          <button className="text-teal-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
            View Case Study <ChevronRightIcon className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>;
}