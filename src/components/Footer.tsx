export function Footer() {
  const services = ['Live Streaming', 'Profile Video', 'Interview Setup', 'Documentary', 'Videography', 'Photography', 'Digital', 'Marketing', 'Advertising', 'Video', 'FB Post Design', 'CV Design'];
  const company = ['About Us', 'Our Portfolio', 'Client Reviews', 'Career', 'Opportunities', 'Contact Us', 'Get Quote'];
  const followUs = ['YouTube', 'Channel', 'TikTok Page', 'Facebook Page', 'Instagram', 'LinkedIn', 'WhatsApp'];
  return <footer className="w-full bg-teal-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">U DIGITAL</h4>
            <p className="text-gray-300 text-sm">
              U DIGITAL EXPERT LANKA PVT LTD - Your one-stop solution for
              videography, photography, and digital marketing services in Sri
              Lanka. Quality services at affordable prices.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {services.map((service, index) => <li key={index} className="hover:text-white cursor-pointer">
                  {service}
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {company.map((item, index) => <li key={index} className="hover:text-white cursor-pointer">
                  {item}
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {followUs.map((item, index) => <li key={index} className="hover:text-white cursor-pointer">
                  {item}
                </li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-teal-800 pt-6 text-center text-sm text-gray-400">
          <p>
            2025 © All Rights Reserved | U Digital Expert | Designed &
            Developed by EVER EFFICIENT Business Management (Pvt) Ltd.
          </p>
        </div>
      </div>
    </footer>;
}