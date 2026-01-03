import React from 'react';
import { motion } from 'framer-motion';
import HeroVisuals from './HeroVisuals';
import HeroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={HeroBg} alt="Background" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-white/30"></div> {/* Optional overlay for text readability if needed */}
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] text-gray-900 mb-6">
                        <span className="text-[#a05a2c]">AI-Powered</span> <br />
                        Document Automation <br />
                        & Fraud Detection
                    </h1>
                    <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                        Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[#4267B2] hover:bg-[#365899] text-white px-10 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30 text-lg">
                            Get a Demo
                        </button>
                        <button className="bg-[#4267B2] hover:bg-[#365899] text-white px-10 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30 text-lg">
                            Explore Solutions
                        </button>
                    </div>
                </motion.div>

                {/* Right Visuals */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-full flex items-center justify-center min-h-[500px]"
                >
                    <HeroVisuals />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
