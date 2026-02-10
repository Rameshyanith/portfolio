import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { cvData } from '../data/cvData';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {cvData.projects.map((project, index) => (
                    <Card key={index} className="h-full flex flex-col group hover:border-cyan-500/50 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                            <div className="flex gap-4 text-gray-400">
                                {/* Placeholder links since CV didn't provide them, but good UI to have */}
                                <Github size={20} className="hover:text-white cursor-pointer" />
                                <ExternalLink size={20} className="hover:text-white cursor-pointer" />
                            </div>
                        </div>

                        <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                            {project.description}
                        </p>

                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Key Features</h4>
                            <ul className="space-y-2">
                                {project.details.map((detail, idx) => (
                                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                                        <span className="text-cyan-500 mr-2">•</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto pt-4 border-t border-gray-800">
                            <p className="text-xs text-gray-500 font-mono">
                                {project.tools}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
