import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePic from '../assets/profilePic.jpg'; // Correct import (no curly braces)

const titles = [
    "Java Full Stack Developer",
    "Software Engineer",
    "Programmer",
    "Coder",
    "Tech Enthusiast"
];

// Typewriter effect hook
function useTypewriter(words, delay = 2000, typingSpeed = 80) {
    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout;
        if (typing) {
            if (displayed.length < words[index].length) {
                timeout = setTimeout(() => {
                    setDisplayed(words[index].slice(0, displayed.length + 1));
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => setTyping(false), delay);
            }
        } else {
            timeout = setTimeout(() => {
                setTyping(true);
                setDisplayed('');
                setIndex((prev) => (prev + 1) % words.length);
            }, 600);
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, index, words, delay, typingSpeed]);

    return displayed;
}

const Hero = () => {
    const typedTitle = useTypewriter(titles);

    return (
        <section
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-800 text-white px-4 pt-28 sm:pt-32"
            id="hero"
        >
            <div className="text-center flex flex-col items-center w-full">
                {/* Profile Picture */}
                <motion.img
                    src={profilePic}
                    alt="Lokesh Khadse"
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                />
                <motion.h1
                    className="text-3xl sm:text-5xl md:text-6xl font-bold"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi, I'm <span className="text-cyan-400">LOKESH KHADSE</span>
                </motion.h1>
                <motion.p
                    className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300 min-h-[2.5rem]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {typedTitle}
                    <span className="animate-pulse">|</span>
                </motion.p>
                <motion.p
                    className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    I'm a passionate Java Full Stack Developer who loves crafting scalable, secure, and high-performance web applications using Java, Spring Boot, Microservices, React, Docker, and Kubernetes. Always eager to solve complex problems and explore new technologies.
                </motion.p>
                <motion.a
                    href="#projects"
                    className="inline-flex items-center mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-semibold transition text-base sm:text-lg"
                    whileHover={{ scale: 1.07 }}
                >
                    View My Work <FaArrowRight className="ml-2" />
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
