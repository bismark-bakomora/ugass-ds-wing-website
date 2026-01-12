import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const EventsPage: React.FC = () => (
  <div className="animate-in fade-in py-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Calendar of Events</h1>
        <p className="text-slate-500">Hackathons, Webinars, and Workshops.</p>
      </div>

      <div className="space-y-6">
        {[
          { 
            title: 'Machine Learning Bootcamp', 
            date: 'June 12, 2025', 
            type: 'Workshop', 
            status: 'Upcoming', 
            color: 'bg-ugass-green',
            description: 'Intensive bootcamp covering supervised and unsupervised learning algorithms.'
          },
          { 
            title: 'Summer Datathon', 
            date: 'July 20, 2025', 
            type: 'Hackathon', 
            status: 'Registration Open', 
            color: 'bg-blue-600',
            description: 'Compete with teams to solve real-world data challenges.'
          },
          { 
            title: 'Official Wing Launch', 
            date: 'August 4, 2025', 
            type: 'Ceremony', 
            status: 'Invitation Only', 
            color: 'bg-ugass-gold',
            description: 'Official launch of the UGASS Data Science Wing with keynote speakers.'
          },
          { 
            title: 'Intro to R Workshop', 
            date: 'August 15, 2025', 
            type: 'Webinar', 
            status: 'Upcoming', 
            color: 'bg-slate-700',
            description: 'Introduction to statistical computing with R programming.'
          }
        ].map((event, i) => (
          <div 
            key={i} 
            className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-6">
              <div className={`w-14 h-14 ${event.color} rounded-2xl flex items-center justify-center text-white shrink-0`}>
                <Calendar size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{event.title}</h3>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm font-medium text-slate-500 flex items-center gap-1">
                    <Clock size={14}/> {event.date}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-ugass-gold">{event.type}</span>
                </div>
                <p className="text-sm text-slate-600 mt-2">{event.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase">{event.status}</span>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-ugass-green transition-colors">
                Get Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default EventsPage;