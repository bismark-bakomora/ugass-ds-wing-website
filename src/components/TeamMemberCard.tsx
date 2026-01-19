import React from 'react';
import { Linkedin } from 'lucide-react';
import { COLORS } from '../data/constants';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
      {member.image ? (
        <img
          src={member.image as string}
          alt={member.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
        />
      ) : (
        <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-4xl font-bold text-gray-600">
          {member.initials}
        </div>
      )}
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-sm mb-3" style={{ color: COLORS.gold }}>
        {member.role}
      </p>
      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
      <a
        href={member.linkedin}
        className="inline-flex items-center text-sm font-medium hover:underline"
        style={{ color: COLORS.primary }}
      >
        <Linkedin size={16} className="mr-1" />
        LinkedIn
      </a>
    </div>
  </div>
);

export default TeamMemberCard;
