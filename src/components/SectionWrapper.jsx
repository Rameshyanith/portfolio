import React from 'react';

const SectionWrapper = ({ children, id, className = '' }) => {
    return (
        <section id={id} className={`py-20 ${className}`}>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
