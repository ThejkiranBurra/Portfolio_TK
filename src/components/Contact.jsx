import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, value, href, index }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card p-6 flex items-center gap-4 group hover:bg-white/5 transition-all"
    >
        <div className="w-12 h-12 rounded-xl bg-primary-600/10 flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>
        <div>
            <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-1">{title}</p>
            <p className="text-white font-medium group-hover:text-primary-400 transition-colors">{value}</p>
        </div>
    </motion.a>
);

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: null, message: '' });

    // Web3Forms Access Key
    const WEB3FORMS_ACCESS_KEY = "e7952b1d-7798-4063-b5c0-92c083fe2476"; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
            setStatus({ type: 'error', message: 'Form is not configured. Please add your Web3Forms Access Key.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            const formData = new FormData(e.target);
            formData.append("access_key", WEB3FORMS_ACCESS_KEY);
            formData.append("subject", "New Contact from Portfolio!");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                e.target.reset();
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Could not connect to the server.' });
        } finally {
            setIsSubmitting(false);
        }
    };



    return (
        <section id="contact" className="section-padding relative">
            <div className="container-custom">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left Side: Info */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-primary-500">
                                    <MessageSquare size={20} />
                                </div>
                                <span className="text-sm font-bold tracking-widest uppercase text-primary-500">Get in Touch</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Let's connect and <span className="text-primary-500">collaborate.</span></h2>
                            <p className="text-dark-muted text-lg mb-12 leading-relaxed">
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="grid gap-4">
                                <ContactCard 
                                    icon={Mail} 
                                    title="Email" 
                                    value="burrathejkiran28@gmail.com" 
                                    href="mailto:burrathejkiran28@gmail.com"
                                    index={0}
                                />
                                <ContactCard 
                                    icon={Linkedin} 
                                    title="LinkedIn" 
                                    value="burra-thejkiran-a20689278" 
                                    href="https://www.linkedin.com/in/burra-thejkiran-a20689278/"
                                    index={1}
                                />
                                <ContactCard 
                                    icon={Github} 
                                    title="GitHub" 
                                    value="ThejkiranBurra" 
                                    href="https://github.com/ThejkiranBurra"
                                    index={2}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 md:p-12 relative overflow-hidden"
                        >
                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                {status.type && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                                            status.type === 'success' 
                                            ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                                            : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                        }`}
                                    >
                                        {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                                        {status.message}
                                    </motion.div>
                                )}
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-dark-muted uppercase tracking-widest ml-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all text-white placeholder:text-white/20"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-dark-muted uppercase tracking-widest ml-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all text-white placeholder:text-white/20"
                                            placeholder="hello@example.com"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-dark-muted uppercase tracking-widest ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all text-white resize-none placeholder:text-white/20"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary py-5 flex items-center justify-center gap-3 group disabled:opacity-50"
                                >
                                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                            </form>
                            
                            {/* Decorative blur */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/5 blur-[100px] rounded-full"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

