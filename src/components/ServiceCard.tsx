import React from 'react';
import { ChevronRightIcon, BoxIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ServiceCardProps {
  icon: BoxIcon;
  title: string;
  description: string;
  features: string[];
  serviceId?: string;
}
export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  serviceId = 'videography'
}: ServiceCardProps) {
  return <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-teal-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
            {feature}
          </li>)}
      </ul>
      <Link to={`/services/${serviceId}`}>
        <button className="text-teal-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
          Learn More <ChevronRightIcon className="w-4 h-4" />
        </button>
      </Link>
    </div>;
}