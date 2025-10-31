import React, { Component } from 'react';
import { CheckIcon, LightbulbIcon, TargetIcon, UsersIcon } from 'lucide-react';
export function AboutSection() {
  const highlights = ['Strategic brand positioning and messaging', 'Award-winning creative campaigns', 'Data-driven marketing approaches', 'End-to-end project management'];
  const coreValues = [{
    icon: LightbulbIcon,
    title: 'Innovation',
    description: 'We stay ahead of industry trends and embrace cutting-edge technologies to deliver forward-thinking solutions.'
  }, {
    icon: TargetIcon,
    title: 'Results-Driven',
    description: 'Every campaign is designed with clear objectives and measurable outcomes to ensure maximum impact and ROI.'
  }, {
    icon: UsersIcon,
    title: 'Client-Focused',
    description: 'Your success is our success. We build lasting partnerships based on trust, transparency, and exceptional service.'
  }];
  return <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xs sm:text-sm font-bold text-brand-dark tracking-wider">
              ABOUT US
            </h2>
            <div className="h-0.5 w-12 sm:w-16 bg-brand-dark"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4 sm:mb-6 leading-tight">
                Crafting Success Stories Since 2019
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                We are a full-service advertising agency dedicated to helping
                brands tell their stories in ways that resonate. Inside, you'll
                find a team of creative strategists, designers, and digital
                experts who work together to create campaigns that not only look
                amazing but deliver real business results.
              </p>
              <div className="space-y-3 mb-6 sm:mb-8">
                {highlights.map((highlight, index) => <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">
                      {highlight}
                    </span>
                  </div>)}
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-brand-teal">
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                  "Our mission is to transform brands into powerful stories that
                  connect with people's hearts and minds, driving both emotional
                  engagement and business growth."
                </p>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="bg-brand-dark rounded-2xl overflow-hidden shadow-2xl">
                <img src="1.jpg" alt="Team collaboration" className="w-full h-64 sm:h-80 lg:h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
            <div className="h-0.5 w-12 sm:w-16 bg-brand-dark"></div>
            <h2 className="text-xs sm:text-sm font-bold text-brand-dark tracking-wider">
              OUR CORE VALUES
            </h2>
            <div className="h-0.5 w-12 sm:w-16 bg-brand-dark"></div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            The principles that guide everything we do and drive our commitment
            to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {coreValues.map((value, index) => {
          const IconComponent = value.icon;
          return <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-brand-dark mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}