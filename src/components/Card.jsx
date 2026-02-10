import React from 'react';

const Card = ({ children, className = '', hoverEffect = true }) => {
    const hoverStyles = hoverEffect
        ? "hover:bg-gray-800 hover:border-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        : "";

    return (
        <div className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
