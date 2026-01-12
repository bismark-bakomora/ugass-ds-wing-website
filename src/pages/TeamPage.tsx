import React from 'react';
import { Users, Linkedin, Mail } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/constants';

const TeamPage: React.FC = () => {
  return (
    <div className="animate-in fade-in py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">Meet the Leadership</h1>
          <p className="text-slate-500">The visionaries steering the UGASS Data Science Wing.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-white group p-8 rounded-3xl shadow-sm border border-slate-100 hover-lift text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden ring-4 ring-slate-50 ring-offset-2">
                <div className="text-4xl font-bold text-slate-600">{member.initials}</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-ugass-green transition-colors">{member.name}</h3>
              <div className="text-ugass-gold text-sm font-bold uppercase tracking-wider mb-4">{member.role}</div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{member.bio}</p>
              <div className="flex justify-center gap-4 text-slate-400">
                <a href={member.linkedin} className="hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-slate-600 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;