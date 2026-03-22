import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="container-custom">
                <div className={`relative flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled ? 'glass shadow-2xl shadow-primary-500/10' : 'bg-transparent'}`}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold tracking-tighter"
                    >
                        <a href="#" className="flex items-center gap-2 group">
                            <span className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white text-sm group-hover:rotate-12 transition-transform duration-300">T</span>
                            <span className="text-gradient">Thejkiran.</span>
                        </a>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-sm font-medium text-dark-muted hover:text-white transition-all relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                                </motion.a>
                            ))}
                        </div>
                        
                        <div className="h-6 w-px bg-dark-border"></div>
                        
                        <div className="flex items-center gap-4">
                            <motion.a 
                                href="https://github.com/ThejkiranBurra" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ y: -2 }}
                                className="text-dark-muted hover:text-white transition-colors"
                            >
                                <Github size={20} />
                            </motion.a>
                            <motion.a 
                                href="https://www.linkedin.com/in/burra-thejkiran-a20689278/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ y: -2 }}
                                className="text-dark-muted hover:text-white transition-colors"
                            >
                                <Linkedin size={20} />
                            </motion.a>
                            <motion.a 
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary py-2 px-6 text-sm"
                            >
                                Hire Me
                            </motion.a>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <motion.button 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)} 
                            className="p-2 rounded-xl glass text-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-6 top-24 md:hidden z-40"
                    >
                        <div className="glass p-6 rounded-3xl shadow-2xl border border-white/5 flex flex-col gap-4">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-dark-text hover:text-primary-500 transition-colors p-2"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="h-px w-full bg-white/5 my-2"></div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-4">
                                    <Github className="text-dark-muted" />
                                    <Linkedin className="text-dark-muted" />
                                    <Mail className="text-dark-muted" />
                                </div>
                                <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary py-2 px-6 text-sm">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

