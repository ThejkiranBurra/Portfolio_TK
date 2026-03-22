import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, BookOpen } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: Target,
            title: "Career Objective",
            content: "To leverage my expertise in Data Science and Machine Learning to build intelligent systems that solve complex real-world problems and drive innovation."
        },
        {
            icon: BookOpen,
            title: "Education Focus",
            content: "Currently pursuing B.Tech in CSE at LPU with a CGPA of 8.02. Specializing in predictive modeling and data analysis."
        }
    ];

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-primary-500">
                                <User size={20} />
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-primary-500">About Me</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Passionate Data Science <br />
                            <span className="text-gradient">& Software Developer</span>
                        </h2>
                        
                        <div className="space-y-6 text-dark-muted text-lg leading-relaxed">
                            <p>
                                I'm <span className="text-white font-medium">Thejkiran Burra</span>, a Computer Science student at Lovely Professional University. My journey is fueled by a deep curiosity for how data can be transformed into actionable intelligence.
                            </p>
                            <p>
                                I specialize in building end-to-end solutions, from data engineering and preprocessing to deploying sophisticated machine learning models.
                            </p>
                        </div>

                    </motion.div>

                    {/* Right: Visual/Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="glass-card p-8 md:p-12 relative z-10 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-blue/10 blur-3xl"></div>
                            
                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
                                    <div className="text-sm text-dark-muted uppercase tracking-widest font-semibold">Technical Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">8.02</div>
                                    <div className="text-sm text-dark-muted uppercase tracking-widest font-semibold">Current CGPA</div>
                                </div>
                            </div>

                            <div className="grid gap-6">
                                {cards.map((card, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1 + (i * 0.2) }}
                                        className="bg-white/5 border border-white/10 p-6 rounded-2xl transform-gpu hover:bg-white/10 transition-colors duration-300"
                                    >
                                        <card.icon className="text-primary-500 mb-4" size={28} />
                                        <h4 className="text-xl font-bold mb-2 text-white">{card.title}</h4>
                                        <p className="text-sm md:text-base text-dark-muted leading-relaxed">{card.content}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Background Blob */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-accent-blue/20 blur-2xl -z-10 rounded-3xl animate-pulse"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

