import { PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
export function ContactSection() {
  return <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-900 mb-4 flex items-center justify-center gap-4">
            <span className="w-16 h-0.5 bg-teal-500"></span>
            GET IN TOUCH
            <span className="w-16 h-0.5 bg-teal-500"></span>
          </h2>
          <h3 className="text-4xl font-bold text-teal-900 mb-4">
            Let's Create Together
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact U Digital Expert Lanka
            for professional videography, photography, and digital marketing
            services.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <PhoneIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-teal-900 mb-2">Call Us</h4>
              <p className="text-gray-600 text-sm mb-2">076 842 1913</p>
              <p className="text-gray-500 text-xs">
                Available 24/7 for urgent projects
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <MailIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-teal-900 mb-2">Email Us</h4>
              <p className="text-gray-600 text-sm mb-2">
                info@Uexpert@gmail.com
              </p>
              <p className="text-gray-500 text-xs">
                We will reply within 24 hours
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-teal-900 mb-2">Working Hours</h4>
              <p className="text-gray-600 text-sm mb-2">Mon - Sun</p>
              <p className="text-gray-500 text-xs">
                Flexible scheduling available
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg">
              <h4 className="text-xl font-bold text-teal-900 mb-6">
                Send us a Message
              </h4>
              <p className="text-gray-600 text-sm mb-6">
                Tell us about your project and we will get back to you with a
                customized quote.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                      <option>Select a service</option>
                      <option>Videography</option>
                      <option>Photography</option>
                      <option>Digital Marketing</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"></textarea>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  We respect your privacy and will never share your information
                  with third parties.
                </div>
                <button type="submit" className="w-full bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
}