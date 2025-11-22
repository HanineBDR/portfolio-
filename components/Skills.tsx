import React from 'react';
import Section from './Section';
import { SKILLS, CATEGORY_ICONS } from '../constants';
import { Skill } from '../types';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <Section id="skills" title="Technical Skills" subtitle="My Arsenal">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => {
          const Icon = CATEGORY_ICONS[category];
          const categorySkills = SKILLS.filter(s => s.category === category);

          return (
            <div key={category} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/10 group">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-purple-900/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-white">{category}</h3>
              </div>

              <div className="space-y-4">
                {categorySkills.map((skill: Skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-medium text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(124,58,237,0.5)]" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;