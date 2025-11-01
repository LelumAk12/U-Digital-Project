import React, { useState } from 'react';
import { PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon } from 'lucide-react';
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };
  return <section className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-fadeIn">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="w-12 sm:w-16 h-0.5 bg-brand-teal"></span>
            GET IN TOUCH
            <span className="w-12 sm:w-16 h-0.5 bg-brand-teal"></span>
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Let's Create Together
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Ready to bring your vision to life? Contact U Digital Expert Lanka
            for professional videography, photography, and digital marketing
            services.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <a href="tel:+94768071913" className="bg-white p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all block">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1 text-sm sm:text-base">
                    Call Us
                  </h4>
                  <p className="text-brand-dark font-semibold text-sm sm:text-base">
                    076 807 1913
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Available 24/7 for urgent projects
                  </p>
                </div>
              </div>
            </a>
            <a href="mailto:info@Uexpert@gmail.com" className="bg-white p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all block">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1 text-sm sm:text-base">
                    Email Us
                  </h4>
                  <p className="text-brand-dark font-semibold text-xs sm:text-base break-all">
                    info@Uexpert@gmail.com
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </a>
            <div className="bg-white p-4 sm:p-6 rounded-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-icon-dark to-brand-icon-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1 text-sm sm:text-base">
                    Working Hours
                  </h4>
                  <p className="text-brand-dark font-semibold text-sm sm:text-base">
                    Mon - Sun
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Flexible scheduling available
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-teal-dark to-brand-dark text-white p-6 sm:p-8 rounded-lg">
              <h4 className="text-lg sm:text-xl font-bold mb-2">FOLLOW US</h4>
              <p className="text-gray-200 text-xs sm:text-sm mb-4 sm:mb-6">
                Stay updated with our latest work and behind-the-scenes content.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <a href="#" className="flex items-center gap-4 hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all">
                  <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-base">YouTube</div>
                    <div className="text-sm text-gray-300">Watch our work</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all">
                  <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-base">TikTok</div>
                    <div className="text-sm text-gray-300">
                      Follow for original ideas
                    </div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all">
                  <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-base">Facebook</div>
                    <div className="text-sm text-gray-300">
                      Like our page for updates
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h4 className="text-lg sm:text-xl font-bold text-brand-dark mb-2">
              Send us a Message
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
              Tell us about your project and we will get back to you with a
              customized quote.
            </p>
            {isSubmitted ? <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8 text-center animate-fadeIn">
                <CheckCircleIcon className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-sm sm:text-base text-green-600">
                  We'll get back to you within 24 hours.
                </p>
              </div> : <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select name="service" value={formData.service} onChange={handleInputChange} required className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all ${errors.service ? 'border-red-500' : 'border-gray-300'}`}>
                      <option value="">Select a service</option>
                      <option value="videography">Videography</option>
                      <option value="photography">Photography</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="interview-media">Interview & Media</option>
                      <option value="design">Design Services</option>
                      <option value="advertising">Advertising Solutions</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">
                        {errors.service}
                      </p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} required className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all ${errors.message ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-teal hover:bg-brand-hover text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>}
          </div>
        </div>
      </div>
    </section>;
}