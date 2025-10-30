import { PhoneIcon, MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Header() {
  return <>
      <div className="w-full bg-teal-900 text-white py-2 px-6 flex justify-between items-center text-sm">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-4 h-4" />
            <span>+9476 842 8972</span>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="w-4 h-4" />
            <span>info@Uexpert@gmail.com</span>
          </div>
        </div>
        <div className="text-sm">
          Follow us on social media for the latest updates
        </div>
      </div>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-400 rounded"></div>
            <span className="text-xl font-bold text-teal-900">U DIGITAL</span>
          </Link>
          <nav className="flex gap-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-teal-600">
              Home
            </Link>
            <a href="#services" className="text-gray-700 hover:text-teal-600">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-teal-600">
              About
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-teal-600">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600">
              Contact
            </a>
            <Link to="/pricing">
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </>;
}