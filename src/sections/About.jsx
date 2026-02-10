import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { cvData } from '../data/cvData';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';

const About = () => {
    const { summary, location, email, phone, linkedin } = cvData.personalInfo;

    return (
        <SectionWrapper id="about" className="bg-gray-900/30">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed font-light">
                        {summary}
                    </p>
                    <p className="text-gray-400">
                        I specialize in bridging the gap between development and operations through rigorous testing and automation.
                        My goal is to deliver bug-free, high-performance software that exceeds user expectations.
                    </p>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="bg-gray-800 p-3 rounded-full text-cyan-400">
                            <MapPin size={20} />
                        </div>
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="bg-gray-800 p-3 rounded-full text-cyan-400">
                            <Mail size={20} />
                        </div>
                        <a href={`mailto:${email}`} className="hover:text-cyan-400 transition-colors">{email}</a>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="bg-gray-800 p-3 rounded-full text-cyan-400">
                            <Phone size={20} />
                        </div>
                        <span>{phone}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="bg-gray-800 p-3 rounded-full text-cyan-400">
                            <Linkedin size={20} />
                        </div>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn Profile</a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
