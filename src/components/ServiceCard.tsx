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
  return <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="w-24 h-24 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-12 h-12 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-brand-dark mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 text-base leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => <li key={index} className="text-base text-gray-700 flex items-center gap-3">
            <span className="w-2 h-2 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-full"></span>
            {feature}
          </li>)}
      </ul>
      <Link to={`/services/${serviceId}`}>
        <button className="text-brand-teal font-medium flex items-center gap-2 hover:gap-3 transition-all text-base sm:text-lg">
          Learn More <ChevronRightIcon className="w-5 h-5" />
        </button>
      </Link>
    </div>;
}