import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

const EducationItem = ({ edu, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glass-card p-8 group relative overflow-hidden"
    >
        <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                {index === 0 ? <GraduationCap size={28} /> : <School size={28} />}
            </div>
            
            <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                        {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20 text-xs font-bold">
                        <Calendar size={12} />
                        {edu.period}
                    </div>
                </div>
                
                <p className="text-lg text-dark-text mb-4 font-medium opacity-90">
                    {edu.degree}
                </p>
                
                <div className="flex flex-wrap gap-4 items-center text-sm text-dark-muted">
                    <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary-500" />
                        {edu.location}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-white/20"></div>
                    <div className="flex items-center gap-1.5 text-primary-400 font-bold">
                        <Award size={14} />
                        {edu.gradeType}: {edu.grade}
                    </div>
                </div>
            </div>
        </div>
        
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 blur-3xl rounded-full -z-10"></div>
    </motion.div>
);

const Education = () => {
    const educationData = [
        {
            institution: "Lovely Professional University",
            location: "Phagwara, Punjab",
            degree: "Bachelor of Technology - Computer Science and Engineering",
            period: "2023 - Present",
            grade: "8.02",
            gradeType: "CGPA"
        },
        {
            institution: "Viswasai Junior College",
            location: "Tirupati, Andhra Pradesh",
            degree: "Intermediate (Class XII)",
            period: "2021 - 2023",
            grade: "93%",
            gradeType: "Score"
        },
        {
            institution: "Gautham Talent EM High School",
            location: "Tirupati, Andhra Pradesh",
            degree: "Matriculation (Class X)",
            period: "2011 - 2021",
            grade: "10",
            gradeType: "CGPA"
        }
    ];

    return (
        <section id="education" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-primary-500">
                            <BookOpen size={20} />
                        </div>
                        <span className="text-sm font-bold tracking-widest uppercase text-primary-500">Academic Background</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    {educationData.map((edu, index) => (
                        <EducationItem key={index} edu={edu} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

