import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building2, Medal, Sparkles } from 'lucide-react';
import certGenAI from '../assets/cert_generative_ai.png';
import certSocialNetworks from '../assets/cert_social_networks.png';
import certComputerComm from '../assets/cert_computer_comm.jpg';
import certBusinessDev from '../assets/cert_business_dev.jpg';

const certificates = [
    {
        title: "Master Generative AI & Generative AI Tools (ChatGPT & more)",
        issuer: "Infosys Springboard",
        date: "Aug 2025",
        image: certGenAI,
        link: "https://drive.google.com/file/d/1Bjckjtf61RV3K_IRNrxeWzm2xtMkDnmW/view",
        description: "Comprehensive training on generative AI, including ChatGPT, prompt engineering, and real-world AI applications.",
        skills: ["Generative AI", "ChatGPT", "Prompt Engineering", "NLP"]
    },
    {
        title: "Social Networks",
        issuer: "NPTEL",
        date: "April 2025",
        image: certSocialNetworks,
        link: "https://drive.google.com/file/d/1XHF3sfhgr5cPETj7Wll9Rpn1jHC716x_/view",
        description: "In-depth study of social network analysis, graph theory, community detection, and influence propagation algorithms.",
        skills: ["Graph Theory", "Network Analysis", "Python", "Algorithms"]
    },
    {
        title: "Computer Communications Specialization Certificate",
        issuer: "Coursera",
        date: "November 2024",
        image: certComputerComm,
        link: "https://www.coursera.org/account/accomplishments/specialization/BD9QSPYTFDOZ",
        description: "Specialized training in computer networking, protocols, data communication, and network architecture.",
        skills: ["Networking", "TCP/IP", "Protocols", "Architecture"]
    },
    {
        title: "Business Development & Sales",
        issuer: "Udemy",
        date: "Oct 2023",
        image: certBusinessDev,
        link: "https://www.udemy.com/certificate/UC-190c8c8f-ef86-4742-8a54-d47faed8b345/",
        description: "Mastered fundamental concepts of business development, B2B sales strategies, and client relationship management.",
        skills: ["Sales", "B2B", "Communication", "Strategy"]
    },
];

const CertificateCard = ({ cert, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card group flex flex-col h-[460px] overflow-hidden relative"
    >
        {/* Normal State */}
        <div className="absolute inset-0 flex flex-col transition-opacity duration-500 group-hover:opacity-0 bg-dark-bg z-10 pointer-events-none group-hover:pointer-events-none">
            <div className="h-[45%] w-full overflow-hidden bg-white/5 relative">
                <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary-400 mb-3 line-clamp-2">
                    {cert.title}
                </h3>
                <p className="text-sm text-dark-muted line-clamp-3 mb-6">
                    {cert.description}
                </p>
                <div className="mt-auto flex justify-between items-center text-sm font-semibold mb-6">
                    <span className="text-dark-muted">{cert.issuer}</span>
                    <span className="text-primary-500">{cert.date}</span>
                </div>
                <div className="text-center text-xs text-dark-muted/50 pb-2">
                    Hover to view details
                </div>
            </div>
        </div>

        {/* Hover State */}
        <div className="absolute inset-0 bg-[#1a1c23]/95 backdrop-blur-sm p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <h3 className="text-2xl font-bold text-primary-400 mb-6 leading-tight line-clamp-3">
                {cert.title}
            </h3>
            
            <div className="space-y-4 mb-4">
                <div className="flex items-start gap-3">
                    <Building2 size={20} className="text-primary-500 mt-1 shrink-0" />
                    <div>
                        <div className="text-xs text-dark-muted uppercase tracking-widest mb-1">Issued By:</div>
                        <div className="font-bold text-white text-sm">{cert.issuer}</div>
                    </div>
                </div>
                
                <div className="flex items-start gap-3">
                    <Calendar size={20} className="text-primary-500 mt-1 shrink-0" />
                    <div>
                        <div className="text-xs text-dark-muted uppercase tracking-widest mb-1">Date:</div>
                        <div className="font-bold text-white text-sm">{cert.date}</div>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <Sparkles size={20} className="text-primary-500 mt-1 shrink-0" />
                    <div className="w-full">
                        <div className="text-xs text-dark-muted uppercase tracking-widest mb-2">Skills:</div>
                        <div className="flex flex-wrap gap-2">
                            {cert.skills?.map((skill, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] font-medium text-white/80 whitespace-nowrap">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto w-full py-3 rounded-xl border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 flex justify-center items-center font-bold text-sm"
            >
                View Certificate
            </a>
        </div>
    </motion.div>
);

const Certificates = () => {
    return (
        <section id="certificates" className="section-padding relative">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-primary-500">
                            <Medal size={20} />
                        </div>
                        <span className="text-sm font-bold tracking-widest uppercase text-primary-500">Credentials</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold">Certifications</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert, i) => (
                        <CertificateCard key={i} cert={cert} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;

