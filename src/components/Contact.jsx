import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, value }) => (
    <div className="flex items-center gap-4 group">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-600/10 group-hover:border-primary-500/30 transition-all">
            <Icon className="text-primary-500" size={20} />
        </div>
        <div>
            <p className="text-dark-muted text-xs uppercase tracking-widest mb-1">{title}</p>
            <p className="text-white font-medium">{value}</p>
        </div>
    </div>
);

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: null, message: '' });

    // REPLACE THIS WITH YOUR ACTUAL FORMSPREE ID
    // Get one at https://formspree.io/
    const FORMSPREE_ID = "xbldqyzo"; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again later.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Could not connect to the server. Please check your internet.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-dark-surface/50">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-primary-500 font-medium uppercase tracking-tight mb-2">Get in Touch</h3>
                        <h2 className="text-4xl font-bold mb-6">Let's Build Something <span className="text-gradient">Great Together</span></h2>
                        <p className="text-dark-muted text-lg mb-10 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out through any of the following channels.
                        </p>

                        <div className="space-y-6">
                            <ContactInfo icon={Mail} title="Email Me" value="burrathejkiran28@gmail.com" />
                            <ContactInfo icon={Phone} title="Call Me" value="+91-9908933886" />
                            <ContactInfo icon={MapPin} title="Location" value="Phagwara, Punjab" />
                        </div>

                        <div className="flex gap-4 mt-12">
                            <a href="https://github.com/ThejkiranBurra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-dark-muted hover:text-white hover:border-primary-500 transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/burra-thejkiran-a20689278/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-dark-muted hover:text-white hover:border-primary-500 transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status.type && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className={`p-4 rounded-xl text-sm font-medium ${
                                        status.type === 'success' 
                                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                    }`}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-dark-muted">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-dark-muted">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-dark-muted">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                    placeholder="Hey, I'd like to talk about..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
