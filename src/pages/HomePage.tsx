import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Calendar, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in">
      {/* Hero Section */}
      <section className="relative bg-ugass-green overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 data-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <span className="inline-block bg-white/10 text-ugass-gold text-xs font-bold tracking-widest uppercase py-2 px-4 rounded-full mb-6">
                Official Data Science Club of UGASS
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-8">
                Empowering Data <br/>Science Education & <br/><span className="text-ugass-gold italic">Research at UGASS</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-lg mb-10 leading-relaxed">
                We provide resources, mentorship, and community for the next generation of data scientists, statisticians, and researchers at the University of Ghana.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/join" 
                  className="bg-ugass-gold text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  Join Us <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/resources" 
                  className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  Explore Resources
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 rounded-3xl p-6 border border-white/10 shadow-2xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 rounded-2xl h-40 flex flex-col justify-end p-5">
                    <div className="text-ugass-gold font-black text-3xl">400+</div>
                    <div className="text-slate-400 text-sm">Active DataCamp Accounts</div>
                  </div>
                  <div className="bg-slate-800 rounded-2xl h-40 flex flex-col justify-end p-5">
                    <div className="text-blue-400 font-black text-3xl">10+</div>
                    <div className="text-slate-400 text-sm">Workshops</div>
                  </div>
                  <div className="bg-slate-800 rounded-2xl h-40 col-span-2 flex items-center justify-between p-6">
                    <div>
                      <div className="text-white font-black text-2xl">ML Bootcamp</div>
                      <div className="text-slate-400 text-sm italic underline decoration-ugass-gold">Starting June 12, 2025</div>
                    </div>
                    <div className="hidden sm:block">
                      <CountdownTimer targetDate="2025-06-12T09:00:00" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-ugass-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { Icon: Users, label: 'Active Members', value: '500+' },
            { Icon: BookOpen, label: 'Workshops', value: '10+' },
            { Icon: Award, label: 'Partners', value: '5+' },
            { Icon: Calendar, label: 'Major Events', value: '4' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center flex flex-col items-center">
              <div className="mb-2">
                <stat.Icon className="text-ugass-green" size={32} />
              </div>
              <div className="text-2xl font-black text-slate-800">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Event Feature */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="absolute top-0 right-0 p-8">
            <div className="bg-ugass-gold text-slate-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse uppercase">Featured Event</div>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4 text-ugass-gold">
              <Calendar size={18} />
              <span className="font-semibold tracking-wide">June 12, 2025</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Machine Learning <br/>Bootcamp 2025</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              Join our intensive 3-day bootcamp covering everything from Exploratory Data Analysis to advanced Predictive Modeling.
            </p>
            <Link 
              to="/events" 
              className="inline-block bg-ugass-green text-white px-10 py-4 rounded-xl font-bold hover:bg-green-800 transition-all"
            >
              Register Now
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="text-center">
              <div className="mb-4 text-slate-500 text-sm font-semibold uppercase tracking-widest">Time Remaining</div>
              <CountdownTimer targetDate="2025-06-12T09:00:00" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Join the Club?</h2>
            <div className="w-20 h-1 bg-ugass-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Free DataCamp Access', 
                desc: 'Get unlimited access to over 400 courses on DataCamp, from Python to SQL.', 
                Icon: CheckCircle2 
              },
              { 
                title: 'Mentorship', 
                desc: 'Connect with seniors and professionals currently working in the tech industry.', 
                Icon: Users 
              },
              { 
                title: 'Portfolio Projects', 
                desc: 'Collaborate on real-world datasets and build projects for your CV.', 
                Icon: BookOpen 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover-lift border border-slate-100">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  <item.Icon className="text-ugass-green" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;