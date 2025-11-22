import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { RESUME_URL } from '@/constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/10 text-purple-300 text-sm font-medium mb-4">
              Available for opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Hanine Boudour</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              Software Engineering Student
            </p>
            
            <p className="text-slate-400 max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed">
              Highly motivated computer science student ranked top of my cohort. 
              Specializing in full-stack development, Java ecosystem, and AI technologies. 
              Passionate about applying innovative technologies to solve real-world problems.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#projects"
                className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-600/30 flex items-center group"
              >
                View Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
<a 
  href={RESUME_URL}
  download="Hanine_Boudour_CV.pdf"
  className="px-8 py-3 rounded-full bg-slate-800 text-white font-semibold hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 flex items-center"
>
  Download CV
  <Download className="ml-2 h-4 w-4" />
</a>
            </div>
          </div>
          
          {/* Profile Image / Visual */}
          <div className="flex-1 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-slate-900 overflow-hidden shadow-2xl">
<img 
  src="/portfolio-/images/profile.jpg"
  alt="Hanine Boudour" 
  className="w-full h-full object-cover"
/>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-700 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-2xl">👩‍💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-700 animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-2xl">🎓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;