import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

import Button from "./Button";

const navItems = ["Home", "About", "Project", "Contact"];

const NavBar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);

    const audioElementRef = useRef(null);
    const navContainerRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(false); // Initially hidden
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);

    useEffect(() => {
        // Show/hide navbar on scroll
        if (currentScrollY === 0) {
            setIsNavVisible(true); // Hide when at the top
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false); // Show when scrolling down
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true); // Hide when scrolling up
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100, // Moves navbar up/out of view when hidden
            opacity: isNavVisible ? 1 : 0, // Fades it in/out
            duration: 0.3,
        });
    }, [isNavVisible]);

    return (
        <div
            ref={navContainerRef}
            className={clsx(
                "fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6",
                "backdrop-blur-lg bg-black/40 border border-black/30 shadow-md rounded-xl", // Black glass effect
                {
                    "opacity-100": isNavVisible, // Visible when scrolling down
                    "opacity-0": !isNavVisible, // Hidden when scrolling up
                }
            )}
        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-5">
                        <img src="https://res.cloudinary.com/dyptshrbj/image/upload/v1745946523/logo.png" alt="logo" className="w-10"/>

                        <Button
                            id="product-button"
                            title="Github"
                            rightIcon={<FaGithub/>}
                            containerClass="bg-blue-50 hidden md:flex items-center justify-center gap-1"
                            onClick={() => window.open('https://github.com/Bhavyansh19', '_blank')}
                        />
                    </div>

                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn text-white px-4 py-2 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={toggleAudioIndicator}
                            className="ml-10 flex items-center space-x-0.5"
                        >
                            <audio
                                ref={audioElementRef}
                                className="hidden"
                                src="/audio/loop.mp3"
                                loop
                            />
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={clsx("indicator-line", {
                                        active: isIndicatorActive,
                                    })}
                                    style={{
                                        animationDelay: `${bar * 0.1}s`,
                                    }}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;
