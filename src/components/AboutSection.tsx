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
  return <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-5 mb-8">
            <h2 className="text-sm sm:text-base font-bold text-brand-dark tracking-wider">
              ABOUT US
            </h2>
            <div className="h-0.5 w-16 sm:w-20 bg-brand-dark"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-6 sm:mb-8 leading-tight">
                Crafting Success Stories Since 2019
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                We are a full-service advertising agency dedicated to helping
                brands tell their stories in ways that resonate. Inside, you'll
                find a team of creative strategists, designers, and digital
                experts who work together to create campaigns that not only look
                amazing but deliver real business results.
              </p>
              <div className="space-y-4 mb-8 sm:mb-10">
                {highlights.map((highlight, index) => <div key={index} className="flex items-start gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-700">
                      {highlight}
                    </span>
                  </div>)}
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border-l-4 border-brand-teal">
                <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed">
                  "Our mission is to transform brands into powerful stories that
                  connect with people's hearts and minds, driving both emotional
                  engagement and business growth."
                </p>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="bg-brand-dark rounded-2xl overflow-hidden shadow-2xl">
                <img src="1.jpg" alt="Team collaboration" className="w-full h-72 sm:h-96 lg:h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-6">
            <div className="h-0.5 w-16 sm:w-20 bg-brand-dark"></div>
            <h2 className="text-sm sm:text-base font-bold text-brand-dark tracking-wider">
              OUR CORE VALUES
            </h2>
            <div className="h-0.5 w-16 sm:w-20 bg-brand-dark"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            The principles that guide everything we do and drive our commitment
            to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {coreValues.map((value, index) => {
          const IconComponent = value.icon;
          return <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-brand-dark mb-4">
                  {value.title}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}