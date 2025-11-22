import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Academic Journey" subtitle="Education">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
          {EDUCATION.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] md:-left-[11px] top-0 h-5 w-5 md:h-6 md:w-6 rounded-full border-4 border-slate-950 bg-purple-600 shadow-[0_0_10px_rgba(124,58,237,0.5)]"></div>
              
              <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-900/20 rounded-lg text-purple-400">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                      <p className="text-purple-400 font-medium">{item.institution}</p>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700">
                      {item.period}
                    </span>
                    <p className="text-slate-500 text-sm mt-1">{item.location}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-300 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;