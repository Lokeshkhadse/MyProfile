import React, { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-black text-white fixed w-full top-0 z-50 shadow-md transition duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-extrabold tracking-wide text-cyan-400 hover:scale-105 transform transition duration-300"
        >
          Profile
        </motion.h1>

        {/* Desktop Nav Menu */}
        <nav className="hidden sm:flex space-x-6 text-sm md:text-base font-medium">
          {navLinks.map(link => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 px-1"
              whileHover={{ scale: 1.08 }}
            >
              {link.label}
              <motion.span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400 rounded origin-left scale-x-0"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'block' }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Hamburger Button for Mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ position: 'relative' }}
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden fixed top-0 right-0 h-full w-2/3 max-w-xs bg-black shadow-lg z-50 flex flex-col pt-24 px-8 space-y-8"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
