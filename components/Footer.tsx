import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Hanine Boudour. All rights reserved.</p>
        <div className="flex items-center mt-4 md:mt-0">
          <span>Designed & Built with</span>
          <Heart className="h-4 w-4 text-purple-500 mx-1 fill-purple-500 animate-pulse" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;