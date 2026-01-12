import { LucideIcon } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  initials: string;
}

export interface ProgramItem {
  title: string;
  desc: string;
}

export interface Program {
  title: string;
  description: string;
  icon: LucideIcon;
  items: ProgramItem[];
}

export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: 'upcoming' | 'past';
  targetDate?: string;
  type: string;
  color: string;
}

export interface Resource {
  title: string;
  type: 'Video' | 'GitHub' | 'File' | 'Link';
  link: string;
  thumbnail?: string;
  description?: string;
  meta: string;
}

export interface Stat {
  icon: string;
  label: string;
  value: string;
}

export interface Colors {
  primary: string;
  gold: string;
  secondary: string;
  gray: string;
}