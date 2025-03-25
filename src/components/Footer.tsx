import { Flame, BookOpen, Home, Clock, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-900 to-orange-950 text-white relative overflow-hidden">
      {/* Sacred flame pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBkPSJNMjAsNzAgQzQwLDkwIDYwLDkwIDgwLDcwIEM2MCw1MCA0MCw1MCAyMCw3MCBaIiBmaWxsPSJhbWJlciIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <Flame className="h-6 w-6 text-amber-400 mr-2" />
              <h3 className="text-xl font-semibold font-serif">श्री बालाजी ज्योतिष संस्थान</h3>
            </div>
            <p className="text-amber-200">
              Guiding your spiritual journey with the divine wisdom of Lord Hanuman and ancient Vedic astrology.
            </p>
            <div className="mt-4 flex items-center">
              <BookOpen className="h-4 w-4 text-amber-300 mr-2" />
              <p className="text-xs text-amber-300 italic">
                "संकट कटै मिटै सब पीरा, जो सुमिरै हनुमत बलबीरा"
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <div className="flex items-center mb-4">
              <Home className="h-6 w-6 text-amber-400 mr-2" />
              <h3 className="text-xl font-semibold font-serif">Divine Paths</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-amber-200 hover:text-amber-400 flex items-center">
                  <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4 12l8 10 8-10z"/>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-amber-200 hover:text-amber-400 flex items-center">
                  <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4 12l8 10 8-10z"/>
                  </svg>
                  Divine Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-amber-200 hover:text-amber-400 flex items-center">
                  <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4 12l8 10 8-10z"/>
                  </svg>
                  Our Blessings
                </a>
              </li>
              <li>
                <a href="#contact" className="text-amber-200 hover:text-amber-400 flex items-center">
                  <svg className="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4 12l8 10 8-10z"/>
                  </svg>
                  Seek Guidance
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-amber-400 mr-2" />
              <h3 className="text-xl font-semibold font-serif">Sacred Connect</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-amber-300 mr-2" />
                <p className="text-amber-200">blessings@hanumatjyotish.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-amber-300 mr-2" />
                <p className="text-amber-200">+91 98XXX XXXXX (WhatsApp)</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-orange-800">
              <p className="text-xs text-amber-400">
                For urgent spiritual matters, call during puja hours: 5 AM - 9 PM IST
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-orange-800 mt-8 pt-8 text-center">
          <p className="text-amber-300">
            © {new Date().getFullYear()} श्री बालाजी ज्योतिष संस्थान. All rights reserved.
          </p>
          <p className="text-xs text-amber-400 mt-2">
            Divine blessings to all devotees | जय श्री राम
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;