import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive?: boolean; isMobile?: boolean }> = ({ href, children, isActive = false, isMobile = false }) => {
  if (isMobile) {
    return (
      <a href={href} className="py-3 text-2xl text-gray-800 hover:bg-gray-100 w-full text-left px-4">
        {children}
      </a>
    );
  }
  
  return (
    <a 
      href={href} 
      className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
        isActive 
          ? 'bg-white/10 text-gray-100 border border-white/20' 
          : 'text-gray-400 hover:bg-white/5 hover:text-white'
      }`}
    >
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '#beatstore', text: 'Browse Beats', active: true },
    { href: '#licensing', text: 'Licensing' },
    { href: '/mixing-mastering', text: 'Mixing & Mastering' },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <header className="bg-[#0a0a0a] border-b border-[#171717] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Left Nav */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink href="#beatstore" isActive>Browse Beats</NavLink>
            <NavLink href="#licensing">Licensing</NavLink>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <a href="/">
              <img className="h-10 w-auto invert" src="https://framerusercontent.com/images/q1bHqeBsMReVOcaiovBQo6swfQ.png" alt="Mantra Beats" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <span className={`block absolute h-0.5 w-full bg-white rounded-sm transition-transform duration-300 ${isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-1/4'}`}></span>
                <span className={`block absolute h-0.5 w-full bg-white rounded-sm transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100 top-1/2 -translate-y-1/2'}`}></span>
                <span className={`block absolute h-0.5 w-full bg-white rounded-sm transition-transform duration-300 ${isOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-1/4'}`}></span>
              </div>
            </button>
          </div>

          {/* Desktop Right Nav */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink href="/mixing-mastering">Mixing & Mastering</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white z-50">
          <div className="flex flex-col items-start pt-4">
            {navLinks.map((link) => (
               <a key={link.text} href={link.href} className="py-3 text-2xl text-gray-800 hover:bg-gray-100 w-full text-left px-6" onClick={() => setIsOpen(false)}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
