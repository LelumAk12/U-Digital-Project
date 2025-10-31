import React, { useState, createElement } from 'react';
import { CheckIcon, ArrowLeftIcon } from 'lucide-react';
interface OrderFormProps {
  selectedPackage: any;
  onBack: () => void;
}
export function OrderForm({
  selectedPackage,
  onBack
}: OrderFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    projectRequirements: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    if (!formData.industry) {
      newErrors.industry = 'Please select an industry';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.projectRequirements.trim()) {
      newErrors.projectRequirements = 'Project requirements are required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
      }
    }
  };
  const PackageSummary = () => <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 lg:h-fit lg:sticky lg:top-6">
      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-lg flex items-center justify-center flex-shrink-0">
          {createElement(selectedPackage.icon, {
          className: 'w-6 h-6 sm:w-8 sm:h-8 text-white'
        })}
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-1">
            {selectedPackage.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            {selectedPackage.description}
          </p>
        </div>
      </div>
      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        {selectedPackage.features.map((feature: string, index: number) => <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
            <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-teal flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>)}
      </ul>
      <div className="border-t border-gray-300 pt-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm sm:text-base text-gray-600">
            Package Price
          </span>
          <span className="text-sm sm:text-base font-bold text-brand-dark">
            {selectedPackage.price} LKR
          </span>
        </div>
        <div className="text-xs text-gray-500 mb-4">
          {selectedPackage.period}
        </div>
        <div className="flex justify-between font-bold text-base sm:text-lg">
          <span>Total</span>
          <span className="text-brand-dark">{selectedPackage.price} LKR</span>
        </div>
      </div>
    </div>;
  return <section className="w-full py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <button onClick={onBack} className="flex items-center gap-2 text-brand-teal hover:text-brand-teal-dark mb-4 text-sm sm:text-base">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Packages
          </button>
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 overflow-x-auto pb-2">
            <div className={`flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full text-sm sm:text-base ${step >= 1 ? 'bg-gradient-to-br from-brand-maroon to-brand-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <div className={`h-0.5 w-8 sm:w-16 ${step >= 2 ? 'bg-gradient-to-r from-brand-maroon to-brand-blue' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full text-sm sm:text-base ${step >= 2 ? 'bg-gradient-to-br from-brand-maroon to-brand-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
            <div className={`h-0.5 w-8 sm:w-16 ${step >= 3 ? 'bg-gradient-to-r from-brand-maroon to-brand-blue' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full text-sm sm:text-base ${step >= 3 ? 'bg-gradient-to-br from-brand-maroon to-brand-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
              3
            </div>
            <div className={`h-0.5 w-8 sm:w-16 ${step >= 4 ? 'bg-gradient-to-r from-brand-maroon to-brand-blue' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full text-sm sm:text-base ${step >= 4 ? 'bg-gradient-to-br from-brand-maroon to-brand-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
              4
            </div>
          </div>
        </div>
        {step === 1 && <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PackageSummary />
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Fill out your contact information to get started
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1 bg-red-50 p-2 rounded">
                        {errors.firstName}
                      </p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1 bg-red-50 p-2 rounded">
                        {errors.lastName}
                      </p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.email && <p className="text-red-500 text-sm mt-1 bg-red-50 p-2 rounded">
                      {errors.email}
                    </p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.phone && <p className="text-red-500 text-sm mt-1 bg-red-50 p-2 rounded">
                      {errors.phone}
                    </p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${errors.company ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.company && <p className="text-red-500 text-sm mt-1 bg-red-50 p-2 rounded">
                      {errors.company}
                    </p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select name="industry" value={formData.industry} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${errors.industry ? 'border-red-500' : 'border-gray-300'}`}>
                    <option value="">Select an industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.industry && <p className="text-red-500 text-sm mt-1 bg-red-50 p-2 rounded">
                      {errors.industry}
                    </p>}
                </div>
                <button type="submit" className="w-full bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white py-2.5 sm:py-3 rounded-lg hover:opacity-90 font-medium text-sm sm:text-base">
                  Continue to Project Details
                </button>
              </form>
            </div>
          </div>}
        {step === 2 && <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PackageSummary />
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Project Details
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Share more about your brand and project needs
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-brand-dark mb-4">
                  Project Requirements *
                </h3>
                <textarea name="projectRequirements" value={formData.projectRequirements} onChange={handleInputChange} rows={6} placeholder="Tell us about your project goals, timeline, and any specific requirements..." className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${errors.projectRequirements ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                {errors.projectRequirements && <p className="text-red-500 text-sm mt-1 bg-red-50 p-2 rounded">
                    {errors.projectRequirements}
                  </p>}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button onClick={() => setStep(1)} className="w-full sm:flex-1 bg-white text-brand-teal border border-brand-teal py-2.5 sm:py-3 rounded-lg hover:bg-brand-cyan-light font-medium text-sm sm:text-base">
                  Back
                </button>
                <button onClick={handleSubmit} className="w-full sm:flex-1 bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white py-2.5 sm:py-3 rounded-lg hover:opacity-90 font-medium text-sm sm:text-base">
                  Continue to Order Summary
                </button>
              </div>
            </div>
          </div>}
        {step === 3 && <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PackageSummary />
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Order Summary
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Please review your order details before proceeding to payment
              </p>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-brand-dark mb-4">
                    Client Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Client:</span>
                      <span className="text-gray-900 font-medium">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company:</span>
                      <span className="text-gray-900 font-medium">
                        {formData.company}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="text-gray-900 font-medium">
                        {formData.email}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="text-gray-900 font-medium">
                        {formData.phone}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Industry:</span>
                      <span className="text-gray-900 font-medium">
                        {formData.industry}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-brand-dark mb-4">
                    Selected Package
                  </h3>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      {createElement(selectedPackage.icon, {
                    className: 'w-6 h-6 text-white'
                  })}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">
                        {selectedPackage.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {selectedPackage.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {selectedPackage.features.map((feature: string, index: number) => <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckIcon className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>)}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-brand-dark mb-4">
                    Project Requirements
                  </h3>
                  <p className="text-sm text-gray-700">
                    {formData.projectRequirements}
                  </p>
                </div>
                <div className="bg-brand-teal bg-opacity-10 p-6 rounded-lg border-2 border-brand-teal">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-bold text-lg">
                      Total Amount
                    </span>
                    <span className="text-3xl font-bold text-brand-dark">
                      {selectedPackage.price} LKR
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {selectedPackage.period}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                <button onClick={() => setStep(2)} className="w-full sm:flex-1 bg-white text-brand-teal border border-brand-teal py-2.5 sm:py-3 rounded-lg hover:bg-brand-cyan-light font-medium text-sm sm:text-base">
                  Back to Project Details
                </button>
                <button onClick={() => setStep(4)} className="w-full sm:flex-1 bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white py-2.5 sm:py-3 rounded-lg hover:opacity-90 font-medium text-sm sm:text-base">
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>}
        {step === 4 && <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="order-2 lg:order-1 lg:col-span-2 bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-dark mb-4 sm:mb-6">
                Payment Information
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                Secure payment processing powered by Stripe
              </p>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-3 sm:mb-4">
                  Secure Payment
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input type="text" placeholder="MM/YY" className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input type="text" placeholder="123" className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input type="text" className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <select className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent">
                      <option>Sri Lanka</option>
                      <option>India</option>
                      <option>United States</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Postal Code
                    </label>
                    <input type="text" className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                Your payment information is encrypted and never stored on our
                servers. You will be redirected to Stripe's secure payment
                portal to complete your purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button onClick={() => setStep(3)} className="w-full sm:flex-1 bg-white text-brand-teal border border-brand-teal py-2.5 sm:py-3 rounded-lg hover:bg-brand-cyan-light font-medium text-sm sm:text-base">
                  Back to Order Summary
                </button>
                <button onClick={() => alert('Payment processing would happen here!')} className="w-full sm:flex-1 bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white py-2.5 sm:py-3 rounded-lg hover:opacity-90 font-medium text-sm sm:text-base">
                  Complete Payment
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                By completing this purchase you agree to our Terms of Service.
                No refunds will be provided for completed services.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <PackageSummary />
            </div>
          </div>}
      </div>
    </section>;
}