import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Flag } from 'lucide-react';

const AchievementCard = ({ item, index }) => {
    const year = item.period.split(' ')[1];
    
    return (
        <div className="relative flex flex-col items-center">
            {/* Timeline Icon */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-14 h-14 rounded-full bg-dark-bg border border-white/10 flex items-center justify-center z-10 mb-8 relative"
            >
                <item.icon size={24} className="text-primary-500" />
            </motion.div>

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="glass-card p-8 flex flex-col items-center text-center h-full w-full relative overflow-hidden"
            >
                {/* Background Year Watermark */}
                <div className="absolute top-4 right-4 text-5xl font-black text-white/5 select-none pointer-events-none uppercase">
                    {year}
                </div>

                <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-4 z-10 relative">{item.period}</span>
                <h4 className="text-lg font-bold text-white mb-4 z-10 relative">{item.title}</h4>
                <p className="text-sm text-dark-muted leading-relaxed z-10 relative">
                    {item.description}
                </p>
            </motion.div>
        </div>
    );
};

const Experience = () => {
    const items = [
        {
            title: "LeetCode 50 Days Streak",
            period: "MAR 2026",
            description: "Achieved by solving coding problems consistently, strengthening Data Structures and Algorithms skills.",
            icon: Star,
        },
        {
            title: "LeetCode Feb Badge",
            period: "FEB 2026",
            description: "Earned for consistent problem-solving on LeetCode during the month of February.",
            icon: Award,
        },
        {
            title: "100+ LeetCode Solved",
            period: "DEC 2025",
            description: "Solved around 100+ problems on Leetcode, which significantly improved problem-solving skills.",
            icon: Trophy,
        },
        {
            title: "Hackathon Top 10",
            period: "APR 2024",
            description: "Secured a Top 10 position in Hackathon Binary Blidz, demonstrating strong innovation.",
            icon: Flag,
        }
    ];

    return (
        <section id="achievements" className="section-padding bg-dark-surface/30">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-primary-500">
                                <Trophy size={20} />
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-primary-500">Milestones</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold">Key Achievements</h2>
                    </div>
                </div>

                <div className="relative mt-8 lg:mt-16">
                    {/* Horizontal Line Background (Desktop only) */}
                    <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent z-0"></div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-16 lg:gap-6 relative z-10">
                        {items.map((item, i) => (
                            <AchievementCard key={i} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

