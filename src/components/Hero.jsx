import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Database, ChevronRight } from 'lucide-react';
import profileImg from '../assets/images/profile.png';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/20 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-accent-blue/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] bg-accent-purple/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-7 flex flex-col items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            <span className="text-xs font-semibold tracking-wider uppercase text-primary-400">
                                Available for Opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]"
                        >
                            Building <span className="text-gradient">Intelligent</span> <br />
                            Solutions with Data.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-dark-muted mb-10 max-w-2xl leading-relaxed"
                        >
                            Hi, I'm <span className="text-white font-semibold">Thejkiran</span>. A Data Science student passionate about Machine Learning, Statistical Analysis, and building scalable software solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="#projects" className="btn-primary group">
                                View Projects
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </a>
                            <a href="/resume.pdf" download className="btn-outline">
                                <Download size={20} />
                                Download CV
                            </a>
                        </motion.div>
                    </div>

                    {/* Profile Image */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Decorative Rings */}
                            <div className="absolute inset-0 border-2 border-primary-500/20 rounded-[3rem] rotate-6 scale-105"></div>
                            <div className="absolute inset-0 border-2 border-accent-blue/20 rounded-[3rem] -rotate-3 scale-105"></div>
                            
                            <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden glass border-white/10 p-4">
                                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-dark-surface relative group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent z-10"></div>
                                    <img
                                        src={profileImg}
                                        alt="Thejkiran"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-primary-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

