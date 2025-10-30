import React from 'react';
import { ServiceCard } from './ServiceCard';
import { VideoIcon, CameraIcon, TrendingUpIcon, MicIcon, PenToolIcon, TvIcon } from 'lucide-react';
export function ServicesSection() {
  const services = [{
    icon: VideoIcon,
    title: 'Videography Services',
    description: 'Professional video production for all your needs, from documentaries to promotional content.',
    features: ['Corporate Videos', 'Documentary', 'Promotion Video', 'Advertising Video'],
    serviceId: 'videography'
  }, {
    icon: CameraIcon,
    title: 'Photography Services',
    description: 'High-quality photography services for events, portraits, and commercial purposes.',
    features: ['Event Photography', 'Event Photography', 'Commercial Shoots', 'Portrait Sessions'],
    serviceId: 'photography'
  }, {
    icon: TrendingUpIcon,
    title: 'Digital Marketing',
    description: 'Boost your online presence with strategic digital marketing campaigns and social media management.',
    features: ['Social Media Marketing', 'Content Strategy', 'Brand Promotion', 'Online Campaigns'],
    serviceId: 'digital-marketing'
  }, {
    icon: MicIcon,
    title: 'Interview & Media',
    description: 'Professional interview setups and media production for corporate and personal projects.',
    features: ['Corporate Interviews', 'Media Coverage', 'Live Streaming', 'Testimonial Videos'],
    serviceId: 'interview-media'
  }, {
    icon: PenToolIcon,
    title: 'Design Services',
    description: 'Creative design solutions for your business and branding needs.',
    features: ['FB Post Design', 'CV Design', 'Logo Design', 'Marketing Materials'],
    serviceId: 'design'
  }, {
    icon: TvIcon,
    title: 'Advertising Solutions',
    description: 'Complete advertising packages to promote your business across digital platforms.',
    features: ['Video Ads', 'Social Media Ads', 'Display Advertising', 'Brand Campaigns'],
    serviceId: 'advertising'
  }];
  return <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-900 mb-4 flex items-center justify-center gap-4">
            <span className="w-16 h-0.5 bg-teal-500"></span>
            OUR SERVICES
            <span className="w-16 h-0.5 bg-teal-500"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional videography, photography and digital marketing services
            in Colombo, Sri Lanka. Quality services at affordable prices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <ServiceCard key={index} {...service} />)}
        </div>
      </div>
    </section>;
}