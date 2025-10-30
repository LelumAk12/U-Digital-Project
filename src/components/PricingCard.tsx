import React from 'react';
import { CheckIcon, BoxIcon } from 'lucide-react';
interface PricingCardProps {
  icon: BoxIcon;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  onGetStarted: () => void;
}
export function PricingCard({
  icon: Icon,
  title,
  price,
  period,
  description,
  features,
  featured = false,
  onGetStarted
}: PricingCardProps) {
  return <div className={`bg-white rounded-lg p-8 ${featured ? 'border-2 border-teal-600 shadow-xl' : 'border border-gray-200'}`}>
      <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-teal-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-teal-900">{price} LKR</span>
        <span className="text-gray-600 text-sm ml-2">{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => <li key={index} className="flex items-start gap-3">
            <CheckIcon className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>)}
      </ul>
      <button onClick={onGetStarted} className={`w-full py-3 rounded-lg font-medium ${featured ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-white text-teal-600 border border-teal-600 hover:bg-teal-50'}`}>
        Get Started
      </button>
    </div>;
}