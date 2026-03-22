import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Award, Briefcase, Star, Flag } from 'lucide-react';

const AchievementCard = ({ period, title, description, icon: Icon, color, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative flex flex-col items-center text-center group"
    >
        {/* Connection Line (Desktop) */}
        {index !== 3 && (
            <div className="absolute top-[2.5rem] left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent hidden lg:block"></div>
        )}

        <div className={`w-20 h-20 rounded-3xl glass border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary-500/30 transition-all duration-500 relative z-10`}>
            <div className="absolute inset-0 bg-primary-500/5 blur-xl group-hover:bg-primary-500/10 transition-all"></div>
            <Icon className="text-primary-500" size={32} />
        </div>

        <div className="glass-card p-6 w-full max-w-[280px] relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 p-3 text-white/5 font-black text-4xl -mr-2 -mt-2 group-hover:text-primary-500/10 transition-colors">
                {period.split("' ").length > 1 ? period.split("' ")[1] : period.split(" ").slice(-1)[0]}
            </div>
            <span className="text-primary-500 font-bold text-sm mb-2 block uppercase tracking-widest">{period}</span>
            <h4 className="text-xl font-bold mb-3">{title}</h4>
            <p className="text-dark-muted text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </motion.div>
);

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
        },        {
            title: "Hackathon Top 10",
            period: "APR 2024",
            description: "Secured a Top 10 position in Hackathon Binary Blidz, demonstrating strong innovation.",
            icon: Flag,
        }
    ];

    return (
        <section id="achievements" className="py-24 bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-primary-500 font-medium uppercase tracking-[0.2em] mb-4 text-sm">Professional Journey</h3>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tight uppercase">Achievements</h2>
                        <div className="w-24 h-2 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {items.map((item, i) => (
                        <AchievementCard key={i} {...item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
