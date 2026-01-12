import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ugassLogo from '../assets/ugass-logo.jpg';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Programs', path: '/programs' },
    { name: 'Resources', path: '/resources' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={ugassLogo}
              alt="UGASS Logo"
              className="w-10 h-10 rounded-lg object-contain"
            />
            <div>
              <h1 className="text-sm font-bold leading-tight text-ugass-green uppercase">UGASS</h1>
              <p className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Data Science Club</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-ugass-gold ${
                  isActive(item.path) ? 'text-ugass-gold' : 'text-slate-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/join"
              className="bg-ugass-gold text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-yellow-600 transition-all shadow-md active:scale-95"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/join"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-ugass-gold text-white py-4 rounded-xl font-bold mt-4 shadow-lg text-center"
          >
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;