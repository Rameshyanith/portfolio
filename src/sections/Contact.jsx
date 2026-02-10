import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { cvData } from '../data/cvData';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
    const { email, phone, linkedin } = cvData.personalInfo;

    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900" id="contact">
            <SectionWrapper className="py-0">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together.</h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-md">
                            I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <Button variant="primary" onClick={() => window.location.href = `mailto:${email}`}>
                            Say Hello
                        </Button>
                    </div>

                    <div className="grid gap-6">
                        <a
                            href={`mailto:${email}`}
                            className="group flex items-center gap-6 p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-700"
                        >
                            <div className="bg-gray-800 group-hover:bg-cyan-500/20 p-4 rounded-full text-cyan-400 transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Email Me</p>
                                <p className="text-lg font-medium group-hover:text-cyan-400 transition-colors">{email}</p>
                            </div>
                        </a>

                        <a
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="group flex items-center gap-6 p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-700"
                        >
                            <div className="bg-gray-800 group-hover:bg-cyan-500/20 p-4 rounded-full text-cyan-400 transition-colors">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Call Me</p>
                                <p className="text-lg font-medium group-hover:text-cyan-400 transition-colors">{phone}</p>
                            </div>
                        </a>

                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-6 p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-700"
                        >
                            <div className="bg-gray-800 group-hover:bg-cyan-500/20 p-4 rounded-full text-cyan-400 transition-colors">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Connect on LinkedIn</p>
                                <p className="text-lg font-medium group-hover:text-cyan-400 transition-colors">Ramesh Yanith</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="text-center text-gray-600 pt-10 border-t border-gray-900">
                    <p>&copy; {new Date().getFullYear()} Ramesh Yanith. All rights reserved.</p>
                </div>
            </SectionWrapper>
        </footer>
    );
};

export default Contact;
