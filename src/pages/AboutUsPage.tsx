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
          We bring together students with a shared passion for data, statistics,
          machine learning, and real-world problem solving.
        </p>
        <p className="text-slate-600 leading-relaxed mb-16">
          Our members range from absolute beginners to advanced learners,
          united by curiosity, collaboration, and impact-driven analytics.
        </p>

        {/* Mission */}
        <div className="flex items-center gap-3 mb-6">
          <Target className="text-ugass-gold" size={32} />
          <h2 className="text-3xl font-bold">Our Mission</h2>
        </div>
        <p className="text-slate-600 leading-relaxed mb-12">
          To empower students of the Department of Statistics & Actuarial Science
          with cutting-edge data science skills, fostering a culture of innovation,
          research, and practical problem-solving.
        </p>

        {/* Vision */}
        <div className="flex items-center gap-3 mb-6">
          <Info className="text-ugass-gold" size={32} />
          <h2 className="text-3xl font-bold">Vision</h2>
        </div>
        <p className="text-slate-600 leading-relaxed mb-12">
          To become the leading hub for data science excellence in West Africa,
          producing world-class data professionals who use data for the public good.
        </p>

        {/* What We Do */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            We create opportunities for members to learn, build, and connect
            through hands-on programs and collaborations.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <Code className="text-ugass-gold mb-3" size={28} />
              <h3 className="font-bold text-lg mb-2">Skill Development</h3>
              <ul className="text-slate-600 text-sm space-y-1 leading-relaxed">
                <li>Python & R bootcamps</li>
                <li>Data analysis, machine learning, and visualization workshops</li>
                <li>Version control and reproducible research practices</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <Briefcase className="text-ugass-gold mb-3" size={28} />
              <h3 className="font-bold text-lg mb-2">Real-World Projects</h3>
              <ul className="text-slate-600 text-sm space-y-1 leading-relaxed">
                <li>Team-based data science projects</li>
                <li>Research-driven and industry-inspired problem solving</li>
                <li>Portfolio development for careers and graduate study</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <Mic className="text-ugass-gold mb-3" size={28} />
              <h3 className="font-bold text-lg mb-2">Speaker & Industry Series</h3>
              <ul className="text-slate-600 text-sm space-y-1 leading-relaxed">
                <li>Talks from data scientists, researchers, and professionals</li>
                <li>Exposure to real applications of data science in Africa and beyond</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <Users className="text-ugass-gold mb-3" size={28} />
              <h3 className="font-bold text-lg mb-2">Community & Collaboration</h3>
              <ul className="text-slate-600 text-sm space-y-1 leading-relaxed">
                <li>Peer learning and mentorship</li>
                <li>Partnerships with platforms, institutions, and organizations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column – Journey */}
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-ugass-green/10 font-black text-6xl">
          2025
        </div>
        <div className="flex items-center gap-3 mb-8">
          <History className="text-ugass-gold" size={32} />
          <h2 className="text-2xl font-bold">Our Journey</h2>
        </div>

        <div className="space-y-12">
          {[
            { date: 'May 2025', event: 'First DataCamp partnership secured' },
            { date: 'August 4, 2025', event: 'Official launch of the UGASS Data Science Wing during UGASS Week 2025' },
          ].map((item, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-slate-100 last:border-0 pb-2"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-ugass-gold border-2 border-white" />
              <div className="text-sm font-bold text-ugass-green mb-1">
                {item.date}
              </div>
              <div className="text-slate-600 font-medium">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutUsPage;
