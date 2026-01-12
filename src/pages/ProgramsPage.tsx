import React from 'react';
import { BookOpen, Award } from 'lucide-react';

const ProgramsPage: React.FC = () => (
  <div className="animate-in fade-in py-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Programs & Activities</h1>
        <p className="text-slate-500">Structured learning for every skill level.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="bg-ugass-green/10 text-ugass-green w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
            <BookOpen size={28} />
          </div>
          <h2 className="text-2xl font-bold mb-6">Workshops</h2>
          <ul className="space-y-6">
            {[
              { title: 'Statistical Inference with Python', desc: 'Foundational data analysis using Scipy and Pandas.' },
              { title: 'Beyond the Numbers Webinar', desc: 'A series focused on data storytelling and ethics.' },
              { title: 'SQL for Actuaries', desc: 'Leveraging database querying for risk assessment.' }
            ].map((workshop, i) => (
              <li key={i} className="group cursor-pointer">
                <div className="font-bold mb-1 group-hover:text-ugass-gold transition-colors">{workshop.title}</div>
                <div className="text-sm text-slate-500">{workshop.desc}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="bg-ugass-gold/10 text-ugass-gold w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
            <Award size={28} />
          </div>
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <ul className="space-y-6">
            {[
              { title: "Data Scientist's Nuggets", desc: 'Short, digestible insights shared weekly via our socials.' },
              { title: 'UGASS Data Science Nuggets', desc: 'In-depth case studies of Ghanaian market trends.' },
              { title: 'Open Source Research', desc: 'Contributing to local datasets for future academic research.' }
            ].map((project, i) => (
              <li key={i} className="group cursor-pointer">
                <div className="font-bold mb-1 group-hover:text-ugass-gold transition-colors">{project.title}</div>
                <div className="text-sm text-slate-500">{project.desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ProgramsPage;