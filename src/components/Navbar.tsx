import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">Balaji Jyotish Sansthan</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-indigo-800 px-3 py-2 rounded-md">Home</Link>
              <Link to="#services" className="hover:bg-indigo-800 px-3 py-2 rounded-md">Services</Link>
              <Link to="#about" className="hover:bg-indigo-800 px-3 py-2 rounded-md">About</Link>
              <Link to="#contact" className="hover:bg-indigo-800 px-3 py-2 rounded-md">Contact</Link>
              {/* <Link 
                to="/admin/prayer-requests" 
                className="bg-amber-600 hover:bg-amber-700 px-3 py-2 rounded-md flex items-center"
              >
                <span className="hidden sm:inline">Admin</span>
                <svg className="h-5 w-5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4 12l8 10 8-10z"/>
                </svg>
              </Link> */}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-red-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block hover:bg-indigo-800 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link 
              to="#services" 
              onClick={() => setIsOpen(false)}
              className="block hover:bg-indigo-800 px-3 py-2 rounded-md"
            >
              Services
            </Link>
            <Link 
              to="#about" 
              onClick={() => setIsOpen(false)}
              className="block hover:bg-indigo-800 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link 
              to="#contact" 
              onClick={() => setIsOpen(false)}
              className="block hover:bg-indigo-800 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
            {/* <Link 
              to="/admin/prayer-requests" 
              onClick={() => setIsOpen(false)}
              className="block bg-amber-600 hover:bg-amber-700 px-3 py-2 rounded-md flex items-center"
            >
              <span>Admin</span>
              <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4 12l8 10 8-10z"/>
              </svg>
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;