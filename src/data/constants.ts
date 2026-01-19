import { BookOpen, TrendingUp, Award } from 'lucide-react';
import { TeamMember, Program, Event, Resource, Stat, Colors } from '../types';
import jim from '../assets/team/jim.jpeg';
import elvis from '../assets/team/elvis.jpeg';
import bismark from '../assets/team/bismark.jpeg';

export const COLORS: Colors = {
  primary: '#004d26',
  gold: '#d4af37',
  secondary: '#2563eb',
  gray: '#64748b'
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Wonder Bediako',
    role: 'Team Lead',
    bio: 'Passionate about building communities and leveraging data for impactful decision-making.',
    linkedin: 'https://www.linkedin.com/in/wonder-bediako/',
    initials: 'WB',
    email: 'wonder.bediako@ug.edu.gh'
  },
  {
    name: 'Elvis Kwabena Asare Nkrumah',
    role: 'Technical Lead',
    bio: 'Expert in Python automation and Machine Learning frameworks.',
    linkedin: 'https://www.linkedin.com/in/elviskankrumah/',
    image: elvis,
    email: 'elvis.asare@ug.edu.gh'
  },
  {
    name: 'Wisdom Nana-Abena Ogbonna',
    role: 'Outreach Lead',
    bio: 'Leading communication strategies and building external relationships.',
    linkedin: 'https://www.linkedin.com/in/wnao/',
    initials: 'WN',
    email: 'wisdom.ogbonna@ug.edu.gh'
  },
  {
    name: 'Isaac Jim Awuah',
    role: 'Research Lead',
    bio: 'Focused on statistical inference and applying research to real-world scenarios.',
    linkedin: 'https://www.linkedin.com/in/isaac-jim-awuah/',
    image: jim,
    email: 'isaac.jim@ug.edu.gh'
  },
  {
    name: 'Bismark Bakomora',
    role: 'Partnerships Lead',
    bio: 'Developing strategic collaborations with industry giants and academia.',
    linkedin: 'https://www.linkedin.com/in/bismark-bakomora/',
    image: bismark,
    email: 'bismarkzebill@gmail.com'
  },
  {
    name: 'David Ampofo Quarcoo',
    role: 'Project Coordinator',
    bio: 'Coordinating data science projects and ensuring timely delivery of outcomes.',
    linkedin: 'https://www.linkedin.com/in/david-ampofo-quarcoo/',
    initials: 'DQ',
    email: 'david.quarcoo@ug.edu.gh'
  }
];

export const PROGRAMS: Program[] = [
  {
    title: 'Workshops',
    description: 'Hands-on sessions covering Python, R, machine learning, and statistical analysis.',
    icon: BookOpen,
    items: [
      { title: 'Statistical Inference with Python', desc: 'Foundational data analysis using Scipy and Pandas.' },
      { title: 'Beyond the Numbers Webinar', desc: 'A series focused on data storytelling and ethics.' },
      { title: 'SQL for Actuaries', desc: 'Leveraging database querying for risk assessment.' }
    ]
  },
  {
    title: 'Projects',
    description: 'Collaborative projects to apply data science skills to real-world challenges.',
    icon: TrendingUp,
    items: [
      { title: "Data Scientist's Nuggets", desc: 'Short, digestible insights shared weekly via our socials.' },
      { title: 'UGASS Data Science Nuggets', desc: 'In-depth case studies of Ghanaian market trends.' },
      { title: 'Open Source Research', desc: 'Contributing to local datasets for future academic research.' }
    ]
  },
  {
    title: 'Membership Benefits',
    description: 'Exclusive access to resources, mentorship, and networking opportunities.',
    icon: Award,
    items: [
      { title: 'Free DataCamp Access', desc: 'Get unlimited access to over 400 courses on DataCamp.' },
      { title: 'Expert Mentorship', desc: 'Connect with seniors and professionals in tech industry.' },
      { title: 'Portfolio Projects', desc: 'Collaborate on real-world datasets and build projects for your CV.' }
    ]
  }
];

export const EVENTS: Event[] = [
  {
    title: 'Machine Learning Bootcamp',
    date: 'June 12, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'UGASS Computer Lab',
    description: 'Intensive 3-day bootcamp covering everything from Exploratory Data Analysis to advanced Predictive Modeling.',
    status: 'upcoming',
    targetDate: '2025-06-12T09:00:00',
    type: 'Workshop',
    color: 'bg-green-700'
  },
  {
    title: 'Summer Datathon',
    date: 'July 20, 2025',
    time: '8:00 AM - 6:00 PM',
    location: 'Virtual',
    description: 'Compete with teams to solve real-world data challenges.',
    status: 'upcoming',
    targetDate: '2025-07-20T08:00:00',
    type: 'Hackathon',
    color: 'bg-blue-600'
  },
  {
    title: 'UGASS Week 2025 - Official Launch',
    date: 'August 4, 2025',
    time: '10:00 AM',
    location: 'UGASS Main Hall',
    description: 'Official launch of the UGASS Data Science Wing with keynote speakers and exhibitions.',
    status: 'upcoming',
    targetDate: '2025-08-04T10:00:00',
    type: 'Ceremony',
    color: 'bg-yellow-600'
  },
  {
    title: 'Intro to R Workshop',
    date: 'August 15, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Virtual',
    description: 'Introduction to statistical computing with R programming.',
    status: 'upcoming',
    type: 'Webinar',
    color: 'bg-slate-700'
  },
  {
    title: 'IndabaX Ghana Workshop',
    date: 'April 15, 2025',
    time: '2:00 PM - 4:00 PM',
    location: 'Virtual',
    description: 'Statistical Inference with Python workshop at IndabaX Ghana.',
    status: 'past',
    type: 'Workshop',
    color: 'bg-gray-500'
  }
];

export const RESOURCES: Resource[] = [
  {
    title: 'Python for Data Analysis',
    type: 'Video',
    link: '#',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop',
    meta: 'Playlist • 12 Videos'
  },
  {
    title: 'UGASS Project Templates',
    type: 'GitHub',
    link: '#',
    description: 'Code samples, datasets, and project templates for members.',
    meta: 'Repository • 45 Stars'
  },
  {
    title: 'Statistical Modeling in R',
    type: 'Video',
    link: '#',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
    meta: 'Playlist • 8 Videos'
  },
  {
    title: 'Statistics Cheat Sheet',
    type: 'File',
    link: '#',
    description: 'Comprehensive statistics reference guide.',
    meta: 'PDF • 2.4 MB'
  },
  {
    title: 'DataCamp Scholarship Hub',
    type: 'Link',
    link: '#',
    description: 'Access your free DataCamp account.',
    meta: 'External Link'
  },
  {
    title: 'Machine Learning Algorithms Guide',
    type: 'GitHub',
    link: '#',
    description: 'Comprehensive guide to ML algorithms with Python implementations.',
    meta: 'Repository • 89 Stars'
  }
];

export const STATS: Stat[] = [
  { icon: 'Users', label: 'Active Members', value: '500+' },
  { icon: 'BookOpen', label: 'Workshops', value: '10+' },
  { icon: 'Award', label: 'Partners', value: '5+' },
  { icon: 'Calendar', label: 'Major Events', value: '4' }
];