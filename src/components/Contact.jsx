import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
        const whatsappUrl = `https://wa.me/919665952003?text=${message}`;
        window.open(whatsappUrl, '_blank');
        setSent(true);
    };

    return (
        <section id="contact" className="pt-28 pb-20 bg-gray-800 text-white px-4 sm:px-6 md:px-8 min-h-screen">
            <div className="max-w-2xl md:max-w-4xl mx-auto">
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold mb-8 text-center text-cyan-400"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Get in Touch
                </motion.h2>
                <motion.div
                    className="flex flex-col lg:flex-row gap-10 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Contact Info */}
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 justify-start">
                                <FaEnvelope className="text-cyan-400 text-xl" />
                                <span className="text-gray-200 break-all text-left">lokeshkhadse19@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 justify-start">
                                <FaPhoneAlt className="text-cyan-400 text-xl" />
                                <span className="text-gray-200 text-left">+91 9665952003</span>
                            </div>
                            <div className="flex items-center gap-3 justify-start">
                                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                                <span className="text-gray-200 text-left">Pune, India</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mt-6 justify-start">
                            <a
                                href="https://www.linkedin.com/in/lokesh-khadse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-400 transition text-2xl"
                                title="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://wa.me/919665952003"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-green-400 transition text-2xl"
                                title="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href="https://github.com/Lokeshkhadse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-400 transition text-2xl"
                                title="GitHub"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <motion.form
                        className="flex-1 bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg space-y-5"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <label className="block text-left text-gray-300 mb-1">Name</label>
                            <input
                                type="text"
                                required
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                className="w-full px-4 py-2 rounded bg-gray-800 border border-cyan-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                required
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                className="w-full px-4 py-2 rounded bg-gray-800 border border-cyan-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-gray-300 mb-1">Message</label>
                            <textarea
                                required
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                className="w-full px-4 py-2 rounded bg-gray-800 border border-cyan-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                placeholder="Your Message"
                                rows={4}
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaPaperPlane /> Send Message
                        </motion.button>
                        {sent && (
                            <motion.p
                                className="text-green-400 mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                Thank you! Your message window has opened.
                            </motion.p>
                        )}
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
