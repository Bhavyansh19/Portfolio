import React, { useState, useEffect } from 'react';
import '../index.css'; // Adjust the path as necessary

const Preloader = ({ logoSrc }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 3000); // Adjust timeout as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black transition-all duration-1000 ease-in-out z-50
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Video Overlay */}
                <video
                    src="/videos/hero-1.mp4"
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />

                {/* Logo Content with Animation */}
                <div className={`relative z-10 ${isVisible ? 'logo-zoom-in' : 'logo-zoom-out'}`}>
                    <img
                        src="img/logo.png"
                        alt="Logo"
                        className="max-w-xs" // Adjust the size of the logo as needed
                    />
                </div>
            </div>
        </div>
    );
};

export default Preloader;
