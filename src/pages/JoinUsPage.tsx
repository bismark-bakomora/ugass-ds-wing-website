import React, { useState, FormEvent, ChangeEvent } from 'react';
import { BookOpen, Users, TrendingUp, Linkedin, CheckCircle2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  studentId: string;
  email: string;
  program: string;
  year: string;
  interest: string;
  reason: string;
}

const JoinUsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ 
    firstName: '',
    lastName: '',
    studentId: '',
    email: '', 
    program: '', 
    year: '', 
    interest: '',
    reason: '' 
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="animate-in zoom-in min-h-screen flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-ugass-green rounded-full mx-auto flex items-center justify-center text-white mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome to the Club!</h2>
          <p className="text-slate-500 mb-8">
            Your application has been received. Please check your email for the next steps and DataCamp access instructions.
          </p>
          <button 
            onClick={() => setSubmitted(false)} 
            className="bg-ugass-gold text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in slide-in-from-right py-16 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a Member</h1>
          <p className="text-slate-500">Join the community and start your data journey today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover-lift border border-slate-100">
            <BookOpen size={40} className="mx-auto mb-4 text-ugass-green" />
            <h3 className="font-bold mb-2">Free DataCamp</h3>
            <p className="text-gray-600 text-sm">Access 400+ premium learning accounts</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover-lift border border-slate-100">
            <Users size={40} className="mx-auto mb-4 text-ugass-gold" />
            <h3 className="font-bold mb-2">Mentorship</h3>
            <p className="text-gray-600 text-sm">Connect with industry experts</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover-lift border border-slate-100">
            <TrendingUp size={40} className="mx-auto mb-4 text-blue-600" />
            <h3 className="font-bold mb-2">Projects</h3>
            <p className="text-gray-600 text-sm">Work on real-world challenges</p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
          <h2 className="text-3xl font-bold mb-2">Membership Form</h2>
          <p className="text-slate-500 mb-8">Fill in your details to join our community.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">First Name</label>
                <input
                  required
                  type="text"
                  name="firstName"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold transition-all"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Last Name</label>
                <input
                  required
                  type="text"
                  name="lastName"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold transition-all"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Student ID</label>
              <input
                required
                type="text"
                name="studentId"
                placeholder="e.g., 10123456"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold transition-all"
                value={formData.studentId}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Email Address</label>
              <input
                required
                type="email"
                name="email"
                placeholder="e.g., example@st.ug.edu.gh"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold transition-all"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Program of Study</label>
                <select
                  required
                  name="program"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold transition-all"
                  value={formData.program}
                  onChange={handleChange}
                >
                  <option value="">Select Program</option>
                  <option value="statistics">Statistics</option>
                  <option value="actuarial">Actuarial Science</option>
                  <option value="computer science">Computer Science</option>
                  <option value="maths">Mathematics</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Year of Study</label>
                <select
                  required
                  name="year"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold transition-all"
                  value={formData.year}
                  onChange={handleChange}
                >
                  <option value="">Select Year</option>
                  <option value="1">Year 1</option>
                  <option value="2">Year 2</option>
                  <option value="3">Year 3</option>
                  <option value="4">Year 4</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Interest Area</label>
              <select 
                required
                name="interest"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold transition-all"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="">Select Interest</option>
                <option value="data-science">Data Science</option>
                <option value="actuarial">Data Analytics</option>
                <option value="statistics">Statistics</option>
                <option value="machine-learning">Machine Learning</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Why do you want to join?</label>
              <textarea
                required
                name="reason"
                rows={4}
                placeholder="Tell us about your interest in data science..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold resize-none transition-all"
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-ugass-green text-white py-4 rounded-xl font-bold shadow-lg hover:bg-green-800 transition-colors"
            >
              Register for Access
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/company/ugass-data-science-club" className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-md transition-all">
              <Linkedin size={24} />
            </a>
            <a
              href="https://t.me/ugassdsc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#229ED9] hover:shadow-md transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 240"
                className="w-6 h-6 fill-current"
              >
                <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm58.6 82.2-18.9 88.9c-1.4 6.3-5.1 7.8-10.3 4.9l-28.5-21-13.7 13.2c-1.5 1.5-2.8 2.8-5.7 2.8l2-29.1 52.9-47.8c2.3-2-0.5-3.1-3.6-1.1l-65.4 41.2-28.2-8.8c-6.1-1.9-6.2-6.1 1.3-9l110.2-42.5c5.1-1.9 9.6 1.2 7.9 9.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;