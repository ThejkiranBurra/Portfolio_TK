import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import diabetesImg from '../assets/images/diabetes_project.png';
import powerbiImg from '../assets/images/powerbi_project.png';
import osImg from '../assets/images/OS_project.png';
import sketchcolabImg from '../assets/images/sketchcolab.png';

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card overflow-hidden flex flex-col h-full group"
    >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden block">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent z-10"></div>
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-bg/50 backdrop-blur-md rounded-full text-white hover:bg-primary-600 transition-colors">
                    <Github size={18} />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-bg/50 backdrop-blur-md rounded-full text-white hover:bg-primary-600 transition-colors">
                    <ExternalLink size={18} />
                </a>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-2 text-primary-500 text-xs font-bold uppercase mb-2">
                <Code size={14} />
                {project.category}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">{project.title}</h3>
            <p className="text-dark-muted text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-primary-500/10 text-primary-400 border border-primary-500/20">
                        {t}
                    </span>
                ))}
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
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h3 className="text-primary-500 font-medium uppercase tracking-tight mb-2">Featured Work</h3>
                        <h2 className="text-4xl font-bold">Showcasing My Best Projects</h2>
                    </div>
                    <a href="#" className="btn-outline flex items-center gap-2">
                        View All Projects <Github size={18} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.title} project={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
