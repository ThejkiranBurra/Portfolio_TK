import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/images/profile.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-900/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start text-left"
                    >
                        <h2 className="text-primary-500 font-medium tracking-wider mb-4 uppercase text-sm md:text-base">
                            DATA SCIENCE STUDENT | MACHINE LEARNING ENTHUSIAST
                        </h2>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Hi, I'm <span className="text-gradient">Thejkiran.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-dark-muted mb-8 max-w-lg leading-relaxed">
                            I'm a Data Science student passionate about solving real-world problems using Machine Learning, Statistical Analysis, and Predictive Modeling. I build intelligent solutions and continuously improve my skills in AI and data engineering.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary flex items-center justify-center gap-2 rounded-full px-8 py-3"
                            >
                                View My Projects <ArrowRight size={20} />
                            </motion.a>
                            <motion.a
                                href="/resume.pdf"
                                download="Thejkiran_Burra_CV.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-outline flex items-center justify-center gap-2 rounded-full px-8 py-3"
                            >
                                Download Resume <Download size={20} />
                            </motion.a>
                        </div>

                        {/* Quick Highlights / Stats Section */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3 text-sm text-dark-muted border-t border-dark-card pt-6 w-full">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                                <span>Skilled in Python, SQL, Pandas, PyTorch</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                                <span>Proficient in Data Analysis & Power BI</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                                <span>Advanced Machine Learning Projects</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile Image / Illustration area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:flex justify-end relative w-full"
                    >
                        {/* Abstract decorative elements behind image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-full blur-3xl -z-10"></div>

                        {/* Main shape holding image */}
                        <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border border-dark-card bg-dark-card shadow-2xl flex items-center justify-center">
                            <img
                                src={profileImg}
                                alt="Thejkiran"
                                className="w-full h-full object-cover scale-110"
                            />
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-dark-muted uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
