import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { cvData } from '../data/cvData';

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-gray-900/30">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cvData.skills.map((skill, index) => (
                    <Card key={index} className="h-full group hover:bg-gray-800 transition-colors">
                        <h3 className="text-xl font-bold mb-4 text-cyan-400 group-hover:text-cyan-300">{skill.name}</h3>
                        <p className="text-gray-300 leading-relaxed font-light">
                            {skill.details}
                        </p>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
