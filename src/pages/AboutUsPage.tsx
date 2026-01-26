import React from 'react';
import {
  Target,
  Info,
  History,
  Users,
  Code,
  Briefcase,
  Mic
} from 'lucide-react';

const AboutUsPage: React.FC = () => (
  <div className="animate-in slide-in-from-bottom">
    {/* Hero */}
    <section className="py-24 bg-ugass-green text-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-8">Bridging Theory & Data</h1>
        <p className="text-xl text-slate-300 leading-relaxed italic">
          "From the lecture rooms of Legon to the analytical hubs of the global economy."
        </p>
      </div>
    </section>

    {/* Main Content */}
    <section className="py-24 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
      {/* Left Column */}
      <div>
        {/* Who We Are */}
        <div className="flex items-center gap-3 mb-6">
          <Users className="text-ugass-gold" size={32} />
          <h2 className="text-3xl font-bold">Who We Are</h2>
        </div>
        <p className="text-slate-600 leading-relaxed mb-3">
          The UGASS Data Science Club is the official data community of the
          Department of Statistics & Actuarial Science, University of Ghana.
        </p>
        <p className="text-slate-600 leading-relaxed mb-12">
          Our members range from beginners to advanced learners, united by
          curiosity, collaboration, and impact-driven analytics.
        </p>

        {/* Mission */}
        <div className="flex items-center gap-3 mb-6">
          <Target className="text-ugass-gold" size={32} />
          <h2 className="text-3xl font-bold">Our Mission</h2>
        </div>
        <p className="text-slate-600 leading-relaxed mb-12">
          To empower students with cutting-edge data science skills, fostering
          innovation, research, and practical problem-solving.
        </p>

        {/* Vision */}
        <div className="flex items-center gap-3 mb-6">
          <Info className="text-ugass-gold" size={32} />
          <h2 className="text-3xl font-bold">Vision</h2>
        </div>
        <p className="text-slate-600 leading-relaxed">
          To become the leading hub for data science excellence in West Africa,
          producing world-class data professionals for the public good.
        </p>
      </div>

      {/* Right Column – Journey (content-sized) */}
      <div className="self-start bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 text-ugass-green/10 font-black text-5xl">
          2025
        </div>

        <div className="flex items-center gap-3 mb-6">
          <History className="text-ugass-gold" size={28} />
          <h2 className="text-xl font-bold">Our Journey</h2>
        </div>

        <div className="space-y-8">
          {[
            {
              date: 'May 2025',
              event: 'First DataCamp partnership secured'
            },
            {
              date: 'August 4, 2025',
              event:
                'Official launch of the UGASS Data Science Wing during UGASS Week'
            }
          ].map((item, i) => (
            <div key={i} className="relative pl-6 border-l border-slate-200">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-ugass-gold" />
              <div className="text-sm font-bold text-ugass-green">
                {item.date}
              </div>
              <div className="text-slate-600 text-sm">{item.event}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What We Do – Full Width */}
      <div className="md:col-span-2 mt-8">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="text-slate-600 max-w-3xl mb-12">
          We create opportunities for members to learn, build, and connect
          through hands-on programs and meaningful collaborations.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <Code className="text-ugass-gold mb-3" size={26} />
            <h3 className="font-bold mb-2">Skill Development</h3>
            <p className="text-slate-600 text-sm">
              Bootcamps, workshops, and reproducible research practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <Briefcase className="text-ugass-gold mb-3" size={26} />
            <h3 className="font-bold mb-2">Real-World Projects</h3>
            <p className="text-slate-600 text-sm">
              Industry-inspired projects and portfolio development.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <Mic className="text-ugass-gold mb-3" size={26} />
            <h3 className="font-bold mb-2">Speaker Series</h3>
            <p className="text-slate-600 text-sm">
              Talks from data scientists and professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <Users className="text-ugass-gold mb-3" size={26} />
            <h3 className="font-bold mb-2">Community</h3>
            <p className="text-slate-600 text-sm">
              Peer mentorship and strategic partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutUsPage;
