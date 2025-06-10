import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <motion.footer
            className="bg-black text-white py-6 text-center flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            <div className="flex gap-6 mb-2">
                <a
                    href="https://github.com/Lokeshkhadse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition text-2xl"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/lokesh-khadse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition text-2xl"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:lokeshkhadse19@gmail.com"
                    className="text-gray-300 hover:text-cyan-400 transition text-2xl"
                >
                    <FaEnvelope />
                </a>
                <a
                    href="https://wa.me/919665952003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition text-2xl flex items-center gap-1"
                    title="WhatsApp"
                >
                    <FaWhatsapp />
                </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                Crafted with <FaHeart className="text-red-500 mx-1" /> by Lokesh Khadse
            </div>
            <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Lokesh Khadse. All rights reserved.
            </p>
        </motion.footer>
    );
};

export default Footer;
