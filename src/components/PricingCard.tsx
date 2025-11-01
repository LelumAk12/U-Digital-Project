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
  return <div onClick={onSelect} className={`bg-white rounded-xl p-10 transition-all duration-300 cursor-pointer border-2 shadow-lg ${isSelected ? 'border-brand-teal ring-4 ring-brand-teal ring-opacity-30' : 'border-gray-200'} hover:shadow-2xl`}>
      <div className="w-20 h-20 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-3xl font-bold text-brand-dark mb-3">{title}</h3>
      <p className="text-gray-600 text-base mb-8 leading-relaxed">
        {description}
      </p>
      <div className="mb-8">
        <span className="text-5xl font-bold text-brand-dark">{price} LKR</span>
        <span className="text-gray-600 text-base ml-2">{period}</span>
      </div>
      <ul className="space-y-4 mb-10">
        {features.map((feature, index) => <li key={index} className="flex items-start gap-3">
            <CheckIcon className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-base">{feature}</span>
          </li>)}
      </ul>
      <button onClick={e => {
      e.stopPropagation();
      onGetStarted();
    }} className="w-full py-4 sm:py-5 rounded-lg font-medium transition-all bg-brand-teal text-white hover:bg-brand-teal-dark text-base sm:text-lg">
        Get Started
      </button>
    </div>;
}