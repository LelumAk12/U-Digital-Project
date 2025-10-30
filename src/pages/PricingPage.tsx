import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PricingCard } from '../components/PricingCard';
import { OrderForm } from '../components/OrderForm';
import { TrendingUpIcon, LightbulbIcon, SparklesIcon } from 'lucide-react';
export function PricingPage() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const packages = [{
    icon: TrendingUpIcon,
    title: 'Digital Marketing',
    price: '20,000',
    period: 'per campaign',
    description: 'Comprehensive digital marketing campaigns across all major platforms',
    features: ['Social Media Management', 'Google Ads Optimization', 'Content Strategy', 'Performance Analytics', 'Monthly Reporting', 'Ongoing Consultation']
  }, {
    icon: LightbulbIcon,
    title: 'Brand Strategy',
    price: '50,000',
    period: 'per project',
    description: 'Complete brand development and strategic positioning for market leadership',
    features: ['Brand Identity Design', 'Market Research Analysis', 'Competitive Positioning', 'Brand Guidelines', 'Implementation Support', 'Ongoing Consultation'],
    featured: true
  }, {
    icon: SparklesIcon,
    title: 'Creative Campaign',
    price: '70,000',
    period: 'per campaign',
    description: 'Full-service creative campaigns from concept to execution',
    features: ['Creative Concept Development', 'Video Production', 'Graphic Design Assets', 'Multi-platform Adaptation', 'Campaign Management', 'Performance Optimization']
  }];
  const handleGetStarted = (pkg: any) => {
    setSelectedPackage(pkg);
    setShowOrderForm(true);
  };
  if (showOrderForm && selectedPackage) {
    return <OrderForm selectedPackage={selectedPackage} onBack={() => setShowOrderForm(false)} />;
  }
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-teal-900 mb-4">
              CHOOSE YOUR PERFECT ADVERTISING SOLUTION
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From digital marketing to complete brand transformation, we offer
              comprehensive advertising solutions tailored to your business
              needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => <PricingCard key={index} {...pkg} onGetStarted={() => handleGetStarted(pkg)} />)}
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}