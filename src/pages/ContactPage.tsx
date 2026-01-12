import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Send, Mail, MapPin, Linkedin, Youtube, Github } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="animate-in fade-in py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Have questions about our programs, partnerships, or memberships? Our team is here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Feel free to reach out to us through any of the following channels. We typically respond within 24-48 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-ugass-green shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1">Official Email</div>
                  <a href="mailto:ugass.dsw@ug.edu.gh" className="text-slate-500 hover:text-ugass-gold transition-colors">
                    ugass.dsw@ug.edu.gh
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-ugass-green shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1">Location</div>
                  <div className="text-slate-500">
                    Department of Statistics & Actuarial Science,<br/>
                    University of Ghana, Legon Campus<br/>
                    Accra, Ghana
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-bold text-slate-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity bg-ugass-green">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity bg-red-600">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity bg-gray-800">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="mt-12 h-64 bg-slate-200 rounded-3xl overflow-hidden relative border-4 border-white shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
                <MapPin size={48} className="text-ugass-green animate-bounce" />
                <div className="absolute bottom-4 bg-white/90 px-4 py-2 rounded-lg text-xs font-bold text-slate-800 shadow-sm">
                  University of Ghana, Legon
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold transition-all"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold transition-all"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold transition-all"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message here..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-ugass-gold resize-none transition-all"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-ugass-green transition-colors shadow-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;