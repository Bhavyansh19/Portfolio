"use client"

import { useState, useRef } from "react"
import { TiLocationArrow } from "react-icons/ti"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedTitle from "./AnimatedTitle";


const BentoTilt = ({ children, className }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 })
    const ref = useRef(null)

    const handleMouseMove = (e) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20

        setRotation({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 })
    }

    return (
        <motion.div
            ref={ref}
            className={`bento-tilt ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX: rotation.x,
                rotateY: rotation.y,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
            }}
        >
            {children}
        </motion.div>
    )
}

export const BentoCard = ({ src, title, description, technologies, isComingSoon, link }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const [hoverOpacity, setHoverOpacity] = useState(0)
    const [showDetails, setShowDetails] = useState(false)
    const hoverButtonRef = useRef(null)
    const cardRef = useRef(null)

    const handleMouseMove = (event) => {
        if (!hoverButtonRef.current) return
        const rect = hoverButtonRef.current.getBoundingClientRect()

        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        })
    }

    const handleMouseEnter = () => setHoverOpacity(1)
    const handleMouseLeave = () => setHoverOpacity(0)

    const handleExploreClick = (e) => {
        e.stopPropagation()
        if (link) {
            window.open(link, "_blank")
        }
    }

    return (
        <div className="relative size-full overflow-hidden" ref={cardRef}>
            {/* Background image with gradient overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={src || "/placeholder.svg"}
                    alt={title}
                    className="absolute left-0 top-0 size-full object-cover object-center opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>
            </div>

            {/* Content container */}
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>}

                    {/* Technologies used */}
                    {technologies && (
                        <div className="mt-4">
                            <div className="flex flex-wrap gap-2 mt-2">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="px-2 py-1 text-xs bg-black/50 rounded-full">
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Expanded details with animation */}
                    <AnimatePresence>
                        {showDetails && features && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-3 p-3 bg-black/50 backdrop-blur-sm rounded-md">
                                    <h3 className="text-sm font-bold mb-2">Key Features:</h3>
                                    <ul className="list-disc list-inside text-xs space-y-1">
                                        {features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {isComingSoon && (
                    <div
                        ref={hoverButtonRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
                        onClick={handleExploreClick}
                    >
                        {/* Radial gradient hover effect */}
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                            style={{
                                opacity: hoverOpacity,
                                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                            }}
                        />
                        <TiLocationArrow className="relative z-20" />
                        <p className="relative z-20">Explore</p>
                    </div>
                )}
            </div>
        </div>
    )
}

const Project = () => {
    return (
        <section className="bg-black pb-52" id="project">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <div className="relative size-full pt-10 z-10 text-center">
                    <AnimatedTitle
                        title="Project G<b>a</b>llery"
                        containerClass="special-font w-full font-zentry text-5xl !leading-[.9]"
                    />
                    <p className="text-blue-50 max-w-2xl mx-auto mt-6 px-4">
                        A showcase of my recent work, demonstrating my skills in web development, UI/UX design, and problem-solving.
                        Each project represents a unique challenge and solution.
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-3 md:px-10">
                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="img/GemmyWhy.png"
                        title={
                            <>
                                Gemm<b>y</b>Why
                            </>
                        }
                        description="Looks like Gemini, feels like Gemini, but has way more personality (and none of the guilt)!"
                        technologies={["React", "OpenAI API", "TailwindCSS", "Node.js"]}
                        isComingSoon
                        link="https://github.com/Bhavyansh19/GemmyWhy"
                    />
                </BentoTilt>

                <div className="grid h-auto md:h-[135vh] w-full grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 h-96 md:h-auto">
                        <BentoCard
                            src="img/sign.png"
                            title={
                                <>
                                    Sig<b>n</b>ature pad
                                </>
                            }
                            description="Signature Pad: Capture, save, and share your digital signature effortlessly! A sleek, responsive canvas to sign documents, create personalized signatures, or just doodle with style."
                            technologies={["HTML5 Canvas", "JavaScript", "CSS3"]}
                            isComingSoon
                            link="https://github.com/Bhavyansh19/Signature-Pad"
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 h-96 md:h-auto">
                        <BentoCard
                            src="img/MovieApp.png"
                            title={
                                <>
                                    Movi<b>e</b> App
                                </>
                            }
                            description="Users can explore Movies, mark favorites, and view them in a dedicated Favorites section"
                            technologies={["React", "TMDB API", "CSS3", "LocalStorage"]}
                            isComingSoon
                            link="https://github.com/Bhavyansh19/Movie-App"
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 h-96 md:h-auto">
                        <BentoCard
                            src="/img/Elysium.png"
                            title={
                                <>
                                    Elys<b>i</b>um
                                </>
                            }
                            description="A modern restaurant website for seamless table reservations and an admin panel for efficient management."
                            technologies={["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"]}
                            isComingSoon
                            link="https://github.com/Bhavyansh19/Elysium"
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_2 h-96 md:h-auto">
                        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black">
                                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
                            </h1>
                            <p className="text-black/70 mt-4 max-w-64">
                                I'm constantly working on new projects and experiments. Check back soon to see what I'm building next!
                            </p>
                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 h-96 md:h-auto">
                        <BentoCard
                            src="img/SpiderType.png"
                            title={
                                <>
                                    Spide<b>r</b> Type
                                </>
                            }
                            description=" A lightning-fast typing speed tester with a web twist! Test your accuracy, beat your high score, and get tangled in the challenge."
                            technologies={["JavaScript", "HTML5", "CSS3", "Web Audio API"]}
                            isComingSoon
                            link="https://github.com/Bhavyansh19/SpiderType"
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}

export default Project

