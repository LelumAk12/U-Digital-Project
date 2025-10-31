import React, { useState } from 'react';
import { CheckIcon, BoxIcon } from 'lucide-react';
interface PricingCardProps {
  icon: BoxIcon;
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
  return <div onClick={onSelect} className={`bg-white rounded-lg p-8 transition-all duration-300 cursor-pointer border-2 shadow-md ${isSelected ? 'border-brand-teal ring-4 ring-brand-teal ring-opacity-30' : 'border-gray-200'} hover:shadow-lg`}>
      <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-brand-dark">{price} LKR</span>
        <span className="text-gray-600 text-sm ml-2">{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => <li key={index} className="flex items-start gap-3">
            <CheckIcon className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>)}
      </ul>
      <button onClick={e => {
      e.stopPropagation();
      onGetStarted();
    }} className="w-full py-3 rounded-lg font-medium transition-all bg-brand-teal text-white hover:bg-brand-teal-dark">
        Get Started
      </button>
    </div>;
}