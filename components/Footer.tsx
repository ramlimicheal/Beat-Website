import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { YoutubeIcon } from './icons/YoutubeIcon';


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left opacity-60">
          <p className="text-sm text-gray-400">© 2024 Mantra Beats. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400 opacity-60">
          <a href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</a>
          <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a>
          <a href="/terms-of-service" className="hover:text-white transition-colors">Terms Of Service</a>
        </nav>
        <div className="flex items-center space-x-4">
           <a href="https://instagram.com/beatsbymantra" target="_blank" rel="noopener noreferrer" className="block w-10 h-10 p-2 rounded-lg bg-[#fff45c] text-black hover:opacity-80 transition-opacity">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com/@beatsbymantra" target="_blank" rel="noopener noreferrer" className="block w-10 h-10 p-2 rounded-lg bg-[#fff45c] text-black hover:opacity-80 transition-opacity">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
