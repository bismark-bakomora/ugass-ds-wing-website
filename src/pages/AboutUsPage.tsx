import React from 'react';
import { Target, Info, History } from 'lucide-react';

const AboutUsPage: React.FC = () => (
  <div className="animate-in slide-in-from-bottom">
    <section className="py-24 bg-ugass-green text-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-8">Bridging Theory & Data</h1>
        <p className="text-xl text-slate-300 leading-relaxed italic">
          "From the lecture rooms of Legon to the analytical hubs of the global economy."
        </p>
      </div>
    </section>

    <section className="py-24 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Target className="text-ugass-gold" size={32} />
          <h2 className="text-3xl font-bold">Our Mission</h2>
        </div>
        <p className="text-slate-600 leading-relaxed mb-12">
          To empower students of the Department of Statistics & Actuarial Science with cutting-edge data science skills, fostering a culture of innovation, research, and practical problem-solving.
        </p>

        <div className="flex items-center gap-3 mb-6">
          <Info className="text-ugass-gold" size={32} />
          <h2 className="text-3xl font-bold">Vision</h2>
        </div>
        <p className="text-slate-600 leading-relaxed mb-12">
          To become the leading hub for data science excellence in West Africa, producing world-class data professionals who use data for the public good.
        </p>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-ugass-green/10 font-black text-6xl">2025</div>
        <div className="flex items-center gap-3 mb-8">
          <History className="text-ugass-gold" size={32} />
          <h2 className="text-2xl font-bold">Our Journey</h2>
        </div>
        <div className="space-y-12">
          {[
            { date: 'August 4, 2025', event: 'Official Launch of the DS Wing' },
            { date: 'UGASS Week 2025', event: 'Founding during the annual celebration' },
            { date: 'May 2025', event: 'First DataCamp partnership secured' }
          ].map((item, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-slate-100 last:border-0 pb-2">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-ugass-gold border-2 border-white"></div>
              <div className="text-sm font-bold text-ugass-green mb-1">{item.date}</div>
              <div className="text-slate-600 font-medium">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutUsPage;