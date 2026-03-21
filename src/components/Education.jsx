import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, MapPin, Calendar, Award } from 'lucide-react';

const EducationItem = ({ institution, location, degree, period, grade, gradeType, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card p-8 relative overflow-hidden group"
    >
        {/* Decorative background icon */}
        <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-primary-500/10 transition-colors duration-500">
            <GraduationCap size={120} />
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary-500 border border-primary-500/20 bg-dark-bg/50">
                        {index === 0 ? <GraduationCap size={24} /> : <School size={24} />}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                            {institution}
                        </h3>
                        <div className="flex items-center gap-2 text-dark-muted mt-1">
                            <MapPin size={14} className="text-primary-500/70" />
                            <span className="text-sm">{location}</span>
                        </div>
                    </div>
                </div>

                <p className="text-lg text-dark-text mb-6 font-medium leading-relaxed max-w-2xl">
                    {degree}
                </p>

                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                        <Calendar size={14} className="text-primary-500" />
                        <span className="text-sm font-medium text-dark-muted">{period}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500/10 border border-primary-500/20">
                        <Award size={14} className="text-primary-500" />
                        <span className="text-sm font-bold text-primary-400">
                            {gradeType}: {grade}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

const Education = () => {
    const educationData = [
        {
            institution: "Lovely Professional University",
            location: "Phagwara, Punjab",
            degree: "Bachelor of Technology - Computer Science and Engineering",
            period: "Since Aug' 23",
            grade: "8.02",
            gradeType: "CGPA"
        },
        {
            institution: "Viswasai Junior College",
            location: "Tirupati, Andhra Pradesh",
            degree: "Intermediate",
            period: "May' 21 – Mar' 23",
            grade: "93",
            gradeType: "Percentage"
        },
        {
            institution: "Gautham Talent EM High School",
            location: "Tirupati, Andhra Pradesh",
            degree: "Matriculation",
            period: "Jul' 11 – Mar' 21",
            grade: "10",
            gradeType: "CGPA"
        }
    ];

    return (
        <section id="education" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 blur-[120px] -z-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 blur-[120px] -z-10 rounded-full"></div>

            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-primary-500 font-medium uppercase tracking-widest mb-3">Academic Background</h3>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
                        <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col gap-8 text-left">
                    {educationData.map((edu, index) => (
                        <EducationItem key={index} {...edu} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
