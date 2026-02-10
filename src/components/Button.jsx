import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-block text-center cursor-pointer";

    const variants = {
        primary: "bg-cyan-500 hover:bg-cyan-600 text-black shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40",
        secondary: "bg-transparent border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white",
        outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
