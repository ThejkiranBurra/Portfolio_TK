import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xl font-bold text-gradient">Portfolio.</div>

                    <div className="text-dark-muted text-sm flex items-center gap-1.5">
                        Designed & Built with <Heart size={14} className="text-red-500 fill-red-500" /> by <span className="text-white font-medium">Thej Kiran</span>
                    </div>

                    <div className="flex gap-8 text-sm text-dark-muted font-medium">
                        <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-dark-muted">
                    &copy; {new Date().getFullYear()} Thej Kiran. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
