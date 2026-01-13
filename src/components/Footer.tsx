import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Github, Mail, MapPin } from 'lucide-react';
import ugassLogo from '../assets/ugass-logo.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
           <img
              src={ugassLogo}
              alt="UGASS Logo"
              className="w-10 h-10 rounded-lg object-contain"
            />
            <h2 className="text-xl font-bold text-white">UGASS Data Science Club</h2>
          </div>
          <p className="max-w-md text-slate-400 mb-6 leading-relaxed">
            The Department of Statistics & Actuarial Science data community at the University of Ghana. 
            Dedicated to bridging the gap between theory and practical data application.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
            <li><Link to="/events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-yellow-400 shrink-0" />
              <span>University of Ghana<br/>Dept of Statistics & Actuarial Science</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-yellow-400" />
              <span>ugass.dsw@ug.edu.gh</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} UGASS Data Science Club. All rights reserved. Made with passion for the Data Science community.
      </div>
    </footer>
  );
};

export default Footer;