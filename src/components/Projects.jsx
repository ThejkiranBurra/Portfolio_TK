import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, FolderOpen, ArrowUpRight } from 'lucide-react';
import diabetesImg from '../assets/images/diabetes_project.png';
import powerbiImg from '../assets/images/powerbi_project.png';
import osImg from '../assets/images/OS_project.png';
import sketchcolabImg from '../assets/images/sketchcolab.png';

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glass-card group flex flex-col h-full overflow-hidden"
    >
        {/* Project Image Base */}
        <div className="relative aspect-video overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Quick Links Overlay (Only visible on hover) */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-primary-900/40">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-dark-bg rounded-full hover:bg-primary-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <Github size={20} />
                </a>
            </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-[10px] font-bold uppercase tracking-widest border border-primary-500/20">
                    {project.category}
                </span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
                {project.title}
            </h3>
            
            <p className="text-dark-muted text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
            </p>

            <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                        <span key={t} className="text-[10px] text-dark-muted font-medium px-2 py-1 rounded bg-white/5">
                            {t}
                        </span>
                    ))}
                </div>
                
                <div className="flex items-center justify-start">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white flex items-center gap-1 hover:text-primary-400 transition-colors">
                        View Code <Github size={14} />
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Global Electronics Retail Analytics",
            category: "Data Analytics",
            description: "Interactive Power BI dashboard with DAX-based KPIs to visualize sales performance and identify top-selling products and regions.",
            tech: ["Power BI", "Power Query", "DAX", "Excel"],
            image: powerbiImg,
            github: "https://github.com/ThejkiranBurra/Global_Electronics_Retail_Analytics",
            live: "#"
        },
        {
            title: "Diabetes Prediction System",
            category: "Machine Learning",
            description: "Machine learning-based prediction system using patient health datasets to identify potential diabetes risk, deployed as a Streamlit web app.",
            tech: ["Python", "Pandas", "Scikit", "Streamlit"],
            image: diabetesImg,
            github: "https://github.com/ThejkiranBurra/Predictive_Analytics_Diabetes",
            live: "#"
        },
        {
            title: "Intelligent CPU Scheduler",
            category: "Web Application",
            description: "Interactive simulator to demonstrate core CPU scheduling algorithms with dynamic visualizations and real-time performance metrics comparison.",
            tech: ["HTML/CSS", "JavaScript", "Bootstrap", "C++"],
            image: osImg,
            github: "https://github.com/tasish/Intelligent_CPU_Schedular",
            live: "#"
        },
        {
            title: "SketchColab",
            category: "Real-time Collaboration",
            description: "A high-performance, real-time collaborative whiteboard designed for remote brainstorming. Features instant stroke sync, screen sharing, and session recording.",
            tech: ["React 19", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Tailwind 4"],
            image: sketchcolabImg,
            github: "https://github.com/ThejkiranBurra/SketchColab",
            live: "#"
        }
    ];

    return (
        <section id="projects" className="section-padding relative">
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
                                <FolderOpen size={20} />
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-primary-500">Portfolio</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.title} project={p} index={i} />
                    ))}
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a href="https://github.com/ThejkiranBurra" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2 px-10">
                        View All on GitHub <Github size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

