import React, { useEffect, useState, useRef } from 'react';
export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    quality: 0
  });
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.5
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const clientsIncrement = 500 / steps;
      const qualityIncrement = 100 / steps;
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCounts({
          clients: Math.min(Math.round(clientsIncrement * currentStep), 500),
          quality: Math.min(Math.round(qualityIncrement * currentStep), 100)
        });
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isVisible]);
  const stats = [{
    value: `${counts.clients}+`,
    label: 'Happy Clients'
  }, {
    value: `${counts.quality}%`,
    label: 'Quality Assured'
  }, {
    value: '24/7',
    label: 'Support'
  }];
  return <section ref={sectionRef} className="w-full bg-brand-cyan-light py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => <div key={index} className="text-center animate-scaleIn" style={{
        animationDelay: `${index * 0.2}s`
      }}>
            <h3 className="text-4xl font-bold text-brand-dark mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>)}
      </div>
    </section>;
}