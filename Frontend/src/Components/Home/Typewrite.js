import React, { useEffect } from 'react';

const Typewriter = ({ text }) => {
    useEffect(() => {
        const spans = document.querySelectorAll('.typewriter span');
        spans.forEach((span, index) => {
            span.style.animationDelay = `${index * 0.5}s`;
        });
    }, []);

    return (
        <div className="typewriter">
            {Array.from(text).map((letter, index) => (
                <span key={index}>{letter}</span>
            ))}
        </div>
    );
};

export default Typewriter

// Use it in your component
// Replace <span className="tshirt">...</span> with <Typewriter text=" T-shirt" />
