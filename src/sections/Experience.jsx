import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { cvData } from '../data/cvData';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <SectionWrapper id="experience">
            <h2 className="text-4xl font-bold mb-16 text-center">Professional Experience</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                {cvData.experience.map((job, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        {/* Timeline Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2 md:translate-x-0 z-10">
                            <Briefcase size={16} className="text-gray-400 group-hover:text-white" />
                        </div>

                        {/* Content Card */}
                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-16 md:ml-0 p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{job.role}</h3>
                                    <h4 className="text-lg text-gray-400">{job.company}</h4>
                                </div>
                                <div className="flex items-center text-sm text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full w-fit">
                                    <Calendar size={14} className="mr-2" />
                                    {job.duration}
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{job.description}</p>

                            {/* Projects Sub-section if exists */}
                            {job.projects && (
                                <div className="mb-4">
                                    <h5 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Key Projects:</h5>
                                    <ul className="space-y-2">
                                        {job.projects.map((proj, idx) => (
                                            <li key={idx} className="text-sm text-gray-400">
                                                <span className="text-cyan-400 font-medium">{proj.name}:</span> {proj.details}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Highlights/Key Contributions */}
                            {(job.highlights || job.keyContributions) && (
                                <div>
                                    <h5 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Key Contributions:</h5>
                                    <ul className="list-disc list-outside ml-4 space-y-1">
                                        {(job.highlights || job.keyContributions).map((item, idx) => (
                                            <li key={idx} className="text-sm text-gray-400 pl-1">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </Card>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
