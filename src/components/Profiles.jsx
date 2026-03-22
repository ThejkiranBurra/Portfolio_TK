import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Code2, Terminal, BarChart3, Globe2 } from 'lucide-react';

const ProfileCard = ({ name, icon: Icon, link, username, color, index }) => (
    <motion.a
        href={link}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card p-4 flex items-center gap-4 group hover:bg-white/5 transition-all"
    >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:scale-110 duration-300" style={{ backgroundColor: `${color}10` }}>
            <Icon size={24} style={{ color: color }} />
        </div>
        <div className="flex-1 overflow-hidden">
            <h4 className="font-bold text-white group-hover:text-primary-400 transition-colors truncate">{name}</h4>
            <p className="text-dark-muted text-xs truncate">{username}</p>
        </div>
        <ExternalLink size={14} className="text-dark-muted opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
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

    return (
        <section id="profiles" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-primary-500">
                                <Globe2 size={20} />
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-primary-500">Digital presence</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Where I <span className="text-primary-500">code & connect.</span></h2>
                        <p className="text-dark-muted text-lg mb-10 leading-relaxed max-w-lg">
                            Active across multiple platforms, constantly contributing to open-source and refining my problem-solving skills on various judges.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                            {profiles.map((p, i) => (
                                <ProfileCard key={p.name} {...p} index={i} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 relative"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Terminal size={24} className="text-primary-500" />
                                Focused Learning
                            </h3>
                            
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Data Structures & Algorithms",
                                        desc: "Advanced problem solving and complexity analysis.",
                                        icon: Code2,
                                    },
                                    {
                                        title: "Data Science & BI",
                                        desc: "Statistical modeling and insight discovery.",
                                        icon: BarChart3,
                                    },
                                    {
                                        title: "Fullstack Engineering",
                                        desc: "Modern web architectures and scalable systems.",
                                        icon: Terminal,
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="group bg-white/5 p-4 rounded-xl border border-white/5 hover:border-primary-500/30 transition-colors">
                                        <h4 className="font-bold text-white group-hover:text-primary-400 transition-colors flex items-center gap-2 mb-1">
                                            <item.icon size={18} className="text-primary-500" />
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-dark-muted ml-[26px]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Profiles;

