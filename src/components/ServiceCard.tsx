import type { ComponentType, SVGProps } from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
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
      <div className="w-24 h-24 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-2xl flex items-center justify-center mb-6 mx-auto">
        <Icon className="w-12 h-12 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-brand-dark mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 text-base leading-relaxed text-center">
        {description}
      </p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => <li key={index} className="text-base text-gray-700 flex items-center gap-3 justify-center">
            <span className="w-2 h-2 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-full"></span>
            {feature}
          </li>)}
      </ul>
      <Link to={`/services/${serviceId}`} className="flex justify-center">
        <button className="text-brand-teal font-medium flex items-center gap-2 hover:gap-3 transition-all text-base sm:text-lg">
          Learn More <ChevronRightIcon className="w-5 h-5" />
        </button>
      </Link>
    </div>;
}