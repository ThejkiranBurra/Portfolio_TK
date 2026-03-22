import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="pt-20 pb-10 border-t border-white/5 relative overflow-hidden bg-dark-bg">
            {/* Background Blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-500/5 blur-[120px] rounded-full -z-10"></div>

            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="max-w-xs">
                        <div className="text-3xl font-black italic text-white mb-6">
                            TK<span className="text-primary-500">.</span>
                        </div>
                        <p className="text-dark-muted leading-relaxed">
                            Crafting digital experiences with code and creativity. Building the future, one pixel at a time.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-white font-bold mb-6">Explore</h4>
                            <ul className="space-y-4 text-dark-muted text-sm">
                                <li><a href="#about" className="hover:text-primary-400 transition-colors">About</a></li>
                                <li><a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a></li>
                                <li><a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6">Credentials</h4>
                            <ul className="space-y-4 text-dark-muted text-sm">
                                <li><a href="#certificates" className="hover:text-primary-400 transition-colors">Certificates</a></li>
                                <li><a href="#achievements" className="hover:text-primary-400 transition-colors">Milestones</a></li>
                                <li><a href="#education" className="hover:text-primary-400 transition-colors">Education</a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="text-white font-bold mb-6">Social</h4>
                            <div className="flex gap-4">
                                <a href="https://github.com/ThejkiranBurra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-muted hover:text-primary-500 hover:border-primary-500/50 transition-all">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/burra-thejkiran-a20689278/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-muted hover:text-primary-500 hover:border-primary-500/50 transition-all">
                                    <Linkedin size={18} />
                                </a>
                                <a href="mailto:burrathejkiran28@gmail.com" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-muted hover:text-primary-500 hover:border-primary-500/50 transition-all">
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
                    <p className="text-dark-muted text-xs">
                        &copy; {new Date().getFullYear()} Thej Kiran. All rights reserved.
                    </p>
                    
                    <div className="flex items-center gap-2 text-dark-muted text-xs">
                        Built with <Heart size={12} className="text-primary-500 fill-primary-500" /> by <span className="text-white font-medium">Thej Kiran</span>
                    </div>

                    <button 
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all shadow-lg"
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

