import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h3 className="text-primary-500 font-medium mb-2 uppercase tracking-tight">About Me</h3>
                        <h2 className="text-4xl font-bold mb-6">Passionate Data Science Student & Developer</h2>
                        <div className="space-y-4 text-dark-muted leading-relaxed text-lg max-w-3xl mx-auto">
                            <p>
                                Hello! I'm Thejkiran Burra, a pursuing B.Tech in Computer Science and Engineering at Lovely Professional University. My journey in tech started with a strong curiosity for algorithms, which evolved into a deep passion for Data Science and Machine Learning.
                            </p>
                            <p>
                                I specialize in building efficient and scalable applications with a specific focus on predictive modeling, data analysis, and resolving complex problems. I've consistently challenged my problem-solving skills, completing over 100+ problems on LeetCode.
                            </p>
                            <p>
                                When I'm not coding or training machine learning models, you can find me participating in competitive programming contests and hackathons, where I enjoy collaborating and innovating with teams.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12 max-w-md mx-auto">
                            <div className="glass-card p-4">
                                <h4 className="text-white font-bold text-2xl mb-1">4+</h4>
                                <p className="text-sm text-dark-muted">Technical Projects</p>
                            </div>
                            <div className="glass-card p-4">
                                <h4 className="text-white font-bold text-2xl mb-1">8.02</h4>
                                <p className="text-sm text-dark-muted">Current CGPA</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
