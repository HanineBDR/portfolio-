import React from 'react';
import Section from './Section';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's Connect" className="bg-gradient-to-b from-slate-950 to-purple-950/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="prose prose-invert">
            <h3 className="text-2xl font-bold text-white mb-4">Let's talk about your next project</h3>
            <p className="text-slate-400">
              I'm currently looking for new opportunities in Software Engineering. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-slate-800 rounded-lg text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-purple-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-slate-800 rounded-lg text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <p className="text-white">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-slate-800 rounded-lg text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Address</p>
                <p className="text-white">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800">
            <h4 className="text-white font-medium mb-4">Connect with me</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="p-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-purple-600/25"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>

      </div>
    </Section>
  );
};

export default Contact;