import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { COLORS } from '../data/constants';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
          {event.title}
        </h3>
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <Calendar size={16} className="mr-2" />
          {event.date} • {event.time}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-2" />
          {event.location}
        </div>
      </div>
      <span 
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          event.status === 'upcoming' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-600'
        }`}
      >
        {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
      </span>
    </div>
    <p className="text-gray-600 mb-4">{event.description}</p>
    {event.status === 'upcoming' && (
      <button 
        className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity" 
        style={{ backgroundColor: COLORS.primary }}
      >
        Register Now
      </button>
    )}
  </div>
);

export default EventCard;