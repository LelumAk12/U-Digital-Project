import React from 'react';
export function StatsSection() {
  const stats = [{
    value: '500+',
    label: 'Happy Clients'
  }, {
    value: '100%',
    label: 'Quality Assured'
  }, {
    value: '24/7',
    label: 'Support'
  }];
  return <section className="w-full bg-teal-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => <div key={index} className="text-center">
            <h3 className="text-4xl font-bold text-teal-900 mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>)}
      </div>
    </section>;
}