import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Wrench, Database } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="glass-card p-8 group"
    >
        <div className="w-12 h-12 rounded-xl bg-primary-600/10 flex items-center justify-center mb-6 group-hover:bg-primary-600/20 transition-colors">
            <Icon className="text-primary-500" size={24} />
        </div>
        <h4 className="text-xl font-bold mb-4">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-dark-muted hover:border-primary-500/50 hover:text-white transition-all"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: "Languages",
            icon: Code2,
            skills: ["C", "C++", "Java", "Python", "SQL"]
        },
        {
            title: "Frameworks & Libs",
            icon: Globe,
            skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "ReactJS", "NodeJS", "ExpressJS", "HTML/CSS"]
        },
        {
            title: "Tools & Platforms",
            icon: Database,
            skills: ["MS Excel", "PowerBI", "Jupyter", "Google Colab", "GitHub", "VS Code"]
        },
        {
            title: "Soft Skills",
            icon: Wrench,
            skills: ["Problem-Solving", "Time Management", "Adaptability", "Teamwork"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-dark-surface/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h3 className="text-primary-500 font-medium uppercase tracking-tight mb-2">My Toolkit</h3>
                    <h2 className="text-4xl font-bold">Tech Stack & Tools</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <SkillCategory key={cat.title} {...cat} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
