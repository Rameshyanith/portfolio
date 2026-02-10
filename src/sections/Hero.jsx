import React from 'react';
import { cvData } from '../data/cvData';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    const { name, title, summary, linkedin, profileImage } = cvData.personalInfo;

    return (
        <SectionWrapper id="hero" className="min-h-screen flex items-center pt-20">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
                        {summary}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <Button variant="primary" onClick={() => document.getElementById('contact').scrollIntoView()}>
                            <span className="flex items-center gap-2">
                                Hire Me <ArrowRight size={18} />
                            </span>
                        </Button>
                        <Button variant="secondary" onClick={() => window.open(linkedin, '_blank')}>
                            <span className="flex items-center gap-2">
                                LinkedIn Profile
                            </span>
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <img
                            src={profileImage}
                            alt={name}
                            className="relative w-full h-full object-cover rounded-full border-4 border-gray-900 shadow-2xl z-10"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=0D8ABC&color=fff&size=512`;
                            }}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
