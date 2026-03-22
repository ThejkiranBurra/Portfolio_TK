import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Wrench, Database, Cpu, Layout, BarChart3, Terminal } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card p-6 flex flex-col h-full group"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary-600/10 flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} />
            </div>
            <h4 className="text-xl font-bold text-white">{title}</h4>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
            {skills.map((skill, i) => (
                <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-dark-muted hover:border-primary-500/50 hover:text-white hover:bg-primary-500/5 transition-all duration-300"
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
            title: "Programming",
            icon: Code2,
            skills: ["Python", "C++", "Java", "SQL", "JavaScript"]
        },
        {
            title: "Data Science",
            icon: BarChart3,
            skills: ["NumPy", "Pandas", "PyTorch", "Scikit-Learn", "Matplotlib", "Seaborn"]
        },
        {
            title: "Web Development",
            icon: Globe,
            skills: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "HTML5/CSS3", "Tailwind CSS"]
        },
        {
            title: "Tools & BI",
            icon: Terminal,
            skills: ["Power BI", "MS Excel", "GitHub", "VS Code", "Jupyter", "Colab"]
        }
    ];

    return (
        <section id="skills" className="section-padding bg-dark-surface/30">
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
                                <Wrench size={20} />
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-primary-500">My Toolkit</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold">Tech Stack & Expertise</h2>
                    </div>
                    <p className="text-dark-muted max-w-sm text-lg">
                        Continuously learning and exploring new technologies to build better solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <SkillCategory key={cat.title} {...cat} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

