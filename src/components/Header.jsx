import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-black text-white fixed w-full top-0 z-50 shadow-md transition duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-extrabold tracking-wide text-cyan-400 hover:scale-105 transform transition duration-300"
        >
          Profile
        </motion.h1>

        {/* Nav Menu */}
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
      </div>
    </motion.header>
  );
};

export default Header;
