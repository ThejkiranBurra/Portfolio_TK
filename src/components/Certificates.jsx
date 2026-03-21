import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, CalendarDays, Sparkles } from 'lucide-react';
import certGenAI from '../assets/cert_generative_ai.png';
import certSocialNetworks from '../assets/cert_social_networks.png';
import certComputerComm from '../assets/cert_computer_comm.jpg';
import certBusinessDev from '../assets/cert_business_dev.jpg';

const certificates = [
    {
        title: "Master Generative AI & Generative AI Tools (ChatGPT & more)",
        description: "Comprehensive training on Generative AI concepts, tools, and real-world applications including ChatGPT and more.",
        issuer: "Infosys Springboard",
        date: "Aug 2025",
        color: "#0ea5e9",
        skills: ["Generative AI", "ChatGPT", "Prompt Engineering", "NLP"],
        image: certGenAI,
        link: "https://drive.google.com/file/d/1Bjckjtf61RV3K_IRNrxeWzm2xtMkDnmW/view",
    },
    {
        title: "Social Networks",
        description: "In-depth study of social network analysis, graph theory, community detection, and influence propagation.",
        issuer: "NPTEL",
        date: "April 2025",
        color: "#22d3ee",
        skills: ["Graph Theory", "Network Analysis", "Data Science"],
        image: certSocialNetworks,
        link: "https://drive.google.com/file/d/1XHF3sfhgr5cPETj7Wll9Rpn1jHC716x_/view",
    },
    {
        title: "Computer Communications Specialization Certificate",
        description: "Specialized training in computer networking, protocols, data communication, and network architecture fundamentals.",
        issuer: "Coursera",
        date: "November 2024",
        color: "#6366f1",
        skills: ["Networking", "TCP/IP", "Protocols", "OSI Model"],
        image: certComputerComm,
        link: "https://www.coursera.org/account/accomplishments/specialization/BD9QSPYTFDOZ",
    },
    {
        title: "Business Development and Sales Processes – A Bird's Eye View",
        description: "Overview of business development strategies, sales pipelines, customer acquisition, and market analysis techniques.",
        issuer: "Udemy",
        date: "October 2023",
        color: "#a855f7",
        skills: ["Sales Strategy", "Business Dev", "Marketing"],
        image: certBusinessDev,
        link: "https://www.udemy.com/certificate/UC-190c8c8f-ef86-4742-8a54-d47faed8b345/",
    },
];

const CertificateCard = ({ title, description, issuer, date, color, skills, image, link, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            style={{ minHeight: '380px' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* ===== DEFAULT FACE ===== */}
            <div
                className="flex flex-col h-full transition-opacity duration-400"
                style={{ opacity: hovered ? 0 : 1, pointerEvents: hovered ? 'none' : 'auto' }}
            >
                {/* Certificate visual area */}
                <div className="relative h-48 overflow-hidden" style={{ background: `linear-gradient(135deg, ${color}15, ${color}08)` }}>
                    {image ? (
                        <>
                            <img src={image} alt={title} className="w-full h-full object-cover object-top" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
                            <span
                                className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md text-white z-10"
                                style={{ backgroundColor: color }}
                            >
                                {issuer}
                            </span>
                            <span className="absolute top-3 right-3 text-[10px] font-medium text-white/80 z-10">
                                {date}
                            </span>
                        </>
                    ) : (
                        <>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-[85%] h-[80%] rounded-lg border border-white/10 bg-dark-surface/60 backdrop-blur-sm flex flex-col items-center justify-center p-4 overflow-hidden">
                                    <span
                                        className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md text-white"
                                        style={{ backgroundColor: color }}
                                    >
                                        {issuer}
                                    </span>
                                    <span className="absolute top-3 right-3 text-[10px] font-medium text-dark-muted">
                                        {date}
                                    </span>
                                    <Award size={32} style={{ color }} className="mb-2 mt-4 opacity-60" />
                                    <p className="text-[11px] text-center text-dark-muted/70 leading-snug max-w-[80%]">
                                        Certificate of Completion
                                    </p>
                                    <p className="text-[10px] text-center text-white/40 mt-1 font-medium truncate max-w-[90%]">
                                        {title}
                                    </p>
                                    <div className="absolute bottom-3 left-4 right-4 border-t border-white/5" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent" />
                        </>
                    )}
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-5">
                    <h3 className="text-lg font-semibold leading-snug mb-2" style={{ color }}>
                        {title}
                    </h3>
                    <p className="text-dark-muted text-sm leading-relaxed mb-4 flex-1">
                        {description.length > 100 ? description.slice(0, 100) + '...' : description}
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-dark-muted font-medium">{issuer}</span>
                        <span className="text-sm font-medium" style={{ color }}>{date}</span>
                    </div>
                </div>

                {/* Hover hint */}
                <div className="px-5 pb-4 pt-0">
                    <p className="text-xs text-center text-dark-muted/50">Hover to view details</p>
                </div>
            </div>

            {/* ===== HOVER FACE (overlay) ===== */}
            <div
                className="absolute inset-0 flex flex-col p-6 transition-opacity duration-400 rounded-2xl"
                style={{
                    opacity: hovered ? 1 : 0,
                    pointerEvents: hovered ? 'auto' : 'none',
                    background: `linear-gradient(160deg, ${color}18, ${color}08, transparent)`,
                }}
            >
                {/* Title */}
                <h3 className="text-xl font-bold leading-snug mb-6" style={{ color }}>
                    {title}
                </h3>

                {/* Issued by */}
                <div className="flex items-start gap-3 mb-4">
                    <Building2 size={18} style={{ color }} className="mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-xs text-dark-muted uppercase tracking-wide mb-0.5">Issued by:</p>
                        <p className="text-sm font-semibold text-white">{issuer}</p>
                    </div>
                </div>

                {/* Date */}
                <div className="flex items-start gap-3 mb-4">
                    <CalendarDays size={18} style={{ color }} className="mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-xs text-dark-muted uppercase tracking-wide mb-0.5">Date:</p>
                        <p className="text-sm font-semibold text-white">{date}</p>
                    </div>
                </div>

                {/* Skills */}
                <div className="flex items-start gap-3 mb-auto">
                    <Sparkles size={18} style={{ color }} className="mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-xs text-dark-muted uppercase tracking-wide mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="text-xs font-medium px-3 py-1 rounded-full border text-white/90"
                                    style={{ borderColor: `${color}40`, backgroundColor: `${color}15` }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* View Certificate button */}
                <a
                    href={link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-5 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-300 cursor-pointer text-center no-underline"
                    style={{
                        borderColor: color,
                        color: color,
                        backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = color;
                        e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = color;
                    }}
                >
                    View Certificate
                </a>
            </div>
        </motion.div>
    );
};

const Certificates = () => {
    return (
        <section id="certificates" className="py-24 bg-dark-surface/30">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-500 font-medium uppercase tracking-tight mb-2"
                    >
                        Credentials
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold"
                    >
                        Certificates
                    </motion.h2>
                </div>

                {/* Certificate grid */}
                <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert, i) => (
                        <CertificateCard key={i} {...cert} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
