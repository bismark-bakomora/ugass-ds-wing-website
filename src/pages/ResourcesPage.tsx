import React from 'react';
import { Github, Youtube, BookOpen, ExternalLink, Search } from 'lucide-react';

const ResourcesPage: React.FC = () => (
  <div className="animate-in fade-in py-24 min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-2">Learning Resources</h1>
          <p className="text-slate-500">Your gateway to mastering data science.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-full w-full md:w-80 focus:ring-2 focus:ring-ugass-gold outline-none transition-all" 
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { type: 'youtube', title: 'Python for Data Analysis', meta: 'Playlist • 12 Videos' },
          { type: 'github', title: 'UGASS Project Templates', meta: 'Repository • 45 Stars' },
          { type: 'file', title: 'Statistics Cheat Sheet', meta: 'PDF • 2.4 MB' },
          { type: 'link', title: 'DataCamp Scholarship Hub', meta: 'External Link' }
        ].map((resource, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover-lift flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 shrink-0">
              {resource.type === 'youtube' && <Youtube size={24} className="text-red-500" />}
              {resource.type === 'github' && <Github size={24} className="text-slate-900" />}
              {resource.type === 'file' && <BookOpen size={24} className="text-blue-500" />}
              {resource.type === 'link' && <ExternalLink size={24} className="text-ugass-gold" />}
            </div>
            <div>
              <h3 className="font-bold text-slate-900">{resource.title}</h3>
              <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mt-1">{resource.meta}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-ugass-green rounded-[2.5rem] p-12 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:max-w-md">
            <h2 className="text-3xl font-bold mb-4">Access our GitHub Repositories</h2>
            <p className="text-white/70 mb-8">Access code, datasets, and collaborative tools used in our workshops.</p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-white text-ugass-green px-8 py-4 rounded-full font-bold shadow-lg hover:bg-ugass-gold hover:text-white transition-all"
            >
              <Github size={20} /> Browse GitHub
            </a>
          </div>
          <div className="hidden lg:block w-48 h-48 bg-white/5 rounded-full border border-white/10 p-4">
            <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
              <Github size={64} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResourcesPage;