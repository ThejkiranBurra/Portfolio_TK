import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Code2, Terminal, BarChart3 } from 'lucide-react';

const ProfileCard = ({ name, icon: Icon, link, username, color }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5 }}
        className="glass-card p-6 flex items-center gap-6 group"
    >
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors`} style={{ backgroundColor: `${color}10` }}>
            <Icon size={28} style={{ color: color }} />
        </div>
        <div>
            <h4 className="font-bold text-lg group-hover:text-primary-500 transition-colors">{name}</h4>
            <p className="text-dark-muted text-sm">{username}</p>
        </div>
        <ExternalLink size={16} className="ml-auto text-dark-muted opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
);

const Profiles = () => {
    const profiles = [
        {
            name: "GitHub",
            username: "@ThejkiranBurra",
            icon: Github,
            link: "https://github.com/ThejkiranBurra",
            color: "#f0f6fc"
        },
        {
            name: "LinkedIn",
            username: "Thej Kiran Burra",
            icon: Linkedin,
            link: "https://www.linkedin.com/in/burra-thejkiran-a20689278/",
            color: "#0a66c2"
        },
        {
            name: "LeetCode",
            username: "@thejkiran",
            icon: Code2,
            link: "https://leetcode.com/u/thejkiran/",
            color: "#ffa116"
        },
        {
            name: "GeeksforGeeks",
            username: "@burrathejkiran",
            icon: Terminal,
            link: "https://www.geeksforgeeks.org/profile/burrathejo6mm",
            color: "#2f8d46"
        }
    ];

    // Dummy Contribution Graph Data
    const days = Array.from({ length: 50 }, (_, i) => ({
        level: Math.floor(Math.random() * 4)
    }));

    const getLevelColor = (level) => {
        switch (level) {
            case 0: return 'bg-white/5';
            case 1: return 'bg-primary-900/40';
            case 2: return 'bg-primary-700/60';
            case 3: return 'bg-primary-500/80';
            default: return 'bg-white/5';
        }
    };

    return (
        <section id="profiles" className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-primary-500 font-medium uppercase tracking-tight mb-2">Connect</h3>
                        <h2 className="text-4xl font-bold mb-8">Coding Profiles</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {profiles.map((p) => (
                                <ProfileCard key={p.name} {...p} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-6 text-primary-500">
                            <Terminal size={24} />
                            <h3 className="text-xl font-bold text-white">Technical Focus & Expertise</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-primary-500/30 transition-all">
                                <h4 className="font-bold mb-2 flex items-center gap-2">
                                    <Code2 size={16} className="text-primary-500" />
                                    Data Structures & Algorithms
                                </h4>
                                <p className="text-dark-muted text-sm leading-relaxed">
                                    Currently focused on mastering complex algorithms and solving challenging problems on LeetCode to build a solid problem-solving foundation.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-primary-500/30 transition-all">
                                <h4 className="font-bold mb-2 flex items-center gap-2">
                                    <BarChart3 size={16} className="text-primary-500" />
                                    Data Science & Analytics
                                </h4>
                                <p className="text-dark-muted text-sm leading-relaxed">
                                    Exploring data-driven insights through statistical modeling, data visualization, and predictive analytics to solve real-world problems.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-primary-500/30 transition-all">
                                <h4 className="font-bold mb-2 flex items-center gap-2">
                                    <Terminal size={16} className="text-primary-500" />
                                    Fullstack Development
                                    <span className="text-[10px] bg-primary-500/10 text-primary-500 px-2 py-0.5 rounded-full uppercase ml-auto">Learning</span>
                                </h4>
                                <p className="text-dark-muted text-sm leading-relaxed">
                                    Developing end-to-end web solutions with a focus on seamless user experiences and robust backend architectures.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Profiles;
