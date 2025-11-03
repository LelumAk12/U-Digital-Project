import type { ComponentType, SVGProps } from 'react';
import { CheckIcon } from 'lucide-react';

interface PricingCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  onGetStarted: () => void;
  isSelected: boolean;
  onSelect: () => void;
}
export function PricingCard({
  icon: Icon,
  title,
  price,
  period,
  description,
  features,
  onGetStarted,
  isSelected,
  onSelect
}: PricingCardProps) {
  return <div onClick={onSelect} className={`bg-white rounded-xl p-6 sm:p-10 transition-all duration-300 cursor-pointer border-2 shadow-lg ${isSelected ? 'border-brand-teal ring-4 ring-brand-teal ring-opacity-30' : 'border-gray-200'} hover:shadow-2xl`}>
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-center">
        {description}
      </p>
      <div className="mb-6 sm:mb-8 text-center">
        <span className="text-4xl sm:text-5xl font-bold text-brand-dark">
          {price} LKR
        </span>
        <span className="text-gray-700 text-base sm:text-lg ml-2 block sm:inline mt-1 sm:mt-0">
          {period}
        </span>
      </div>
      <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
        {features.map((feature, index) => <li key={index} className="flex items-start gap-3">
            <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-teal flex-shrink-0 mt-0.5" />
            <span className="text-gray-800 text-base sm:text-lg">
              {feature}
            </span>
          </li>)}
      </ul>
      <button onClick={e => {
      e.stopPropagation();
      onGetStarted();
    }} className="w-full py-2.5 sm:py-3 rounded-lg font-medium transition-all bg-brand-teal text-white hover:bg-brand-teal-dark text-base">
        Get Started
      </button>
    </div>;
}