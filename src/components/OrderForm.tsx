import React, { useState, createElement } from 'react';
import { CheckIcon, ArrowLeftIcon, XIcon, CreditCardIcon, LockIcon } from 'lucide-react';
interface OrderFormProps {
  selectedPackage: any;
  onBack: () => void;
}
export function OrderForm({
  selectedPackage,
  onBack
}: OrderFormProps) {
  const [step, setStep] = useState(1);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    projectRequirements: ''
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    billingAddress: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>({});
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
  const handlePaymentInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = e.target.value;
    // Format card number with spaces
    if (e.target.name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    // Format expiry date
    if (e.target.name === 'expiryDate') {
      value = value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2').substring(0, 5);
    }
    // Limit CVV to 3 digits
    if (e.target.name === 'cvv') {
      value = value.replace(/\D/g, '').substring(0, 3);
    }
    setPaymentData({
      ...paymentData,
      [e.target.name]: value
    });
    if (paymentErrors[e.target.name]) {
      setPaymentErrors({
        ...paymentErrors,
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
  const validatePayment = () => {
    const newErrors: Record<string, string> = {};
    if (!paymentData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (paymentData.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!paymentData.cardName.trim()) {
      newErrors.cardName = 'Cardholder name is required';
    }
    if (!paymentData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(paymentData.expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date format (MM/YY)';
    }
    if (!paymentData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (paymentData.cvv.length !== 3) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    if (!paymentData.billingAddress.trim()) {
      newErrors.billingAddress = 'Billing address is required';
    }
    setPaymentErrors(newErrors);
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
  const handlePaymentSubmit = () => {
    if (validatePayment()) {
      setShowPaymentModal(false);
      setShowConfirmationModal(true);
    }
  };
  const PackageSummary = () => <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 lg:h-fit lg:sticky lg:top-6">
      <div className="flex items-start gap-4 sm:gap-5 mb-6 sm:mb-8">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-2xl flex items-center justify-center flex-shrink-0">
          {createElement(selectedPackage.icon, {
          className: 'w-8 h-8 sm:w-10 sm:h-10 text-white'
        })}
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2">
            {selectedPackage.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            {selectedPackage.description}
          </p>
        </div>
      </div>
      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {selectedPackage.features.map((feature: string, index: number) => <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
            <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-teal flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>)}
      </ul>
      <div className="border-t border-gray-300 pt-6">
        <div className="flex justify-between mb-3">
          <span className="text-base sm:text-lg text-gray-600">
            Package Price
          </span>
          <span className="text-base sm:text-lg font-bold text-brand-dark">
            {selectedPackage.price} LKR
          </span>
        </div>
        <div className="text-sm text-gray-500 mb-6">
          {selectedPackage.period}
        </div>
        <div className="flex justify-between font-bold text-lg sm:text-xl">
          <span>Total</span>
          <span className="text-brand-dark">{selectedPackage.price} LKR</span>
        </div>
      </div>
    </div>;
  return <section className="w-full py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <button onClick={onBack} className="flex items-center gap-2 text-brand-teal hover:text-brand-teal-dark mb-6 text-base sm:text-lg font-medium">
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Packages
          </button>
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-8 sm:mb-10 overflow-x-auto pb-2">
            <div className={`flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full text-base sm:text-lg font-bold ${step >= 1 ? 'bg-gradient-to-br from-brand-maroon to-brand-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <div className={`h-0.5 w-10 sm:w-20 ${step >= 2 ? 'bg-gradient-to-r from-brand-maroon to-brand-blue' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full text-base sm:text-lg font-bold ${step >= 2 ? 'bg-gradient-to-br from-brand-maroon to-brand-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
            <div className={`h-0.5 w-10 sm:w-20 ${step >= 3 ? 'bg-gradient-to-r from-brand-maroon to-brand-blue' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full text-base sm:text-lg font-bold ${step >= 3 ? 'bg-gradient-to-br from-brand-maroon to-brand-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
              3
            </div>
          </div>
        </div>
        {step === 1 && <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <PackageSummary />
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-8 sm:p-10">
              <h2 className="text-3xl font-bold text-brand-dark mb-3">
                Contact Information
              </h2>
              <p className="text-gray-600 text-base mb-8">
                Tell us about yourself and your project needs
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-3">
                      First Name*
                    </label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className={`w-full px-5 py-4 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent text-base ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.firstName && <p className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded">
                        {errors.firstName}
                      </p>}
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-3">
                      Last Name*
                    </label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className={`w-full px-5 py-4 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent text-base ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.lastName && <p className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded">
                        {errors.lastName}
                      </p>}
                  </div>
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Email Address*
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full px-5 py-4 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent text-base ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.email && <p className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded">
                      {errors.email}
                    </p>}
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Phone Number
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={`w-full px-5 py-4 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent text-base ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.phone && <p className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded">
                      {errors.phone}
                    </p>}
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Company Name*
                  </label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className={`w-full px-5 py-4 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent text-base ${errors.company ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.company && <p className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded">
                      {errors.company}
                    </p>}
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Industry
                  </label>
                  <input type="text" name="industry" value={formData.industry} onChange={handleInputChange} className={`w-full px-5 py-4 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent text-base ${errors.industry ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.industry && <p className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded">
                      {errors.industry}
                    </p>}
                </div>
                <button type="submit" className="w-full bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white py-4 sm:py-5 rounded-lg hover:opacity-90 font-medium text-base sm:text-lg">
                  Continue to Review
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
                Please review your order details before proceeding
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
                <button onClick={() => setShowPaymentModal(true)} className="w-full sm:flex-1 bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white py-2.5 sm:py-3 rounded-lg hover:opacity-90 font-medium text-sm sm:text-base">
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>}
        {showPaymentModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full my-8 animate-scaleIn">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2">
                    Payment Details
                  </h3>
                  <p className="text-sm text-gray-600">
                    Enter your payment information securely
                  </p>
                </div>
                <button onClick={() => setShowPaymentModal(false)} className="text-gray-400 hover:text-gray-600">
                  <XIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white p-4 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCardIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">Amount to Pay</span>
                </div>
                <div className="text-3xl font-bold">
                  {selectedPackage.price} LKR
                </div>
                <div className="text-sm text-gray-200 mt-1">
                  {selectedPackage.period}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number *
                  </label>
                  <input type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handlePaymentInputChange} placeholder="1234 5678 9012 3456" maxLength={19} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${paymentErrors.cardNumber ? 'border-red-500' : 'border-gray-300'}`} />
                  {paymentErrors.cardNumber && <p className="text-red-500 text-xs mt-1">
                      {paymentErrors.cardNumber}
                    </p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name *
                  </label>
                  <input type="text" name="cardName" value={paymentData.cardName} onChange={handlePaymentInputChange} placeholder="John Doe" className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${paymentErrors.cardName ? 'border-red-500' : 'border-gray-300'}`} />
                  {paymentErrors.cardName && <p className="text-red-500 text-xs mt-1">
                      {paymentErrors.cardName}
                    </p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date *
                    </label>
                    <input type="text" name="expiryDate" value={paymentData.expiryDate} onChange={handlePaymentInputChange} placeholder="MM/YY" maxLength={5} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${paymentErrors.expiryDate ? 'border-red-500' : 'border-gray-300'}`} />
                    {paymentErrors.expiryDate && <p className="text-red-500 text-xs mt-1">
                        {paymentErrors.expiryDate}
                      </p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV *
                    </label>
                    <input type="text" name="cvv" value={paymentData.cvv} onChange={handlePaymentInputChange} placeholder="123" maxLength={3} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${paymentErrors.cvv ? 'border-red-500' : 'border-gray-300'}`} />
                    {paymentErrors.cvv && <p className="text-red-500 text-xs mt-1">
                        {paymentErrors.cvv}
                      </p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Billing Address *
                  </label>
                  <textarea name="billingAddress" value={paymentData.billingAddress} onChange={handlePaymentInputChange} placeholder="Enter your billing address" rows={3} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent ${paymentErrors.billingAddress ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                  {paymentErrors.billingAddress && <p className="text-red-500 text-xs mt-1">
                      {paymentErrors.billingAddress}
                    </p>}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                  <LockIcon className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600">
                    Your payment information is encrypted and secure. We use
                    industry-standard security measures to protect your data.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button onClick={() => setShowPaymentModal(false)} className="w-full sm:flex-1 bg-white text-brand-teal border border-brand-teal py-2.5 rounded-lg hover:bg-brand-cyan-light font-medium text-sm">
                  Cancel
                </button>
                <button onClick={handlePaymentSubmit} className="w-full sm:flex-1 bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white py-2.5 rounded-lg hover:opacity-90 font-medium text-sm flex items-center justify-center gap-2">
                  <LockIcon className="w-4 h-4" />
                  Pay {selectedPackage.price} LKR
                </button>
              </div>
            </div>
          </div>}
        {showConfirmationModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full animate-scaleIn">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-dark text-center mb-4">
                Payment Successful!
              </h3>
              <div className="mb-6">
                <p className="text-gray-600 mb-4 text-center">
                  Your order has been confirmed and payment processed
                  successfully.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-medium">
                      ORD-{Date.now().toString().slice(-8)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Package:</span>
                    <span className="font-medium">{selectedPackage.title}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Client:</span>
                    <span className="font-medium">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div className="border-t border-gray-300 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="font-bold">Amount Paid:</span>
                      <span className="font-bold text-green-600">
                        {selectedPackage.price} LKR
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => {
            setShowConfirmationModal(false);
            window.location.href = '/';
          }} className="w-full bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white py-2.5 rounded-lg hover:opacity-90 font-medium text-sm">
                Return to Home
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                A confirmation email has been sent to {formData.email}. Our team
                will contact you within 24 hours to discuss project details.
              </p>
            </div>
          </div>}
      </div>
    </section>;
}