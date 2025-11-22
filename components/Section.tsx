import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 relative ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 inline-block mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full mt-2"></div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;