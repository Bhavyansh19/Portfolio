"use client"

import { useRef, useLayoutEffect, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import AnimatedTitle from "./AnimatedTitle.jsx"

gsap.registerPlugin(ScrollTrigger)

const Marquee = () => {
    const component = useRef()
    const slider = useRef()
    const [activeTab, setActiveTab] = useState("skills")

    // Tech logos
    const logosSet1 = [
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946554/bootstrap.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946554/dart.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946555/docker.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946555/excel.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946556/figma.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946556/flutter.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946556/git.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946557/github.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946557/go.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946558/java.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946558/js.png" }
    ]

    const logosSet2 = [
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946559/kali.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946560/mongodb.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946561/node.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946561/photoshop.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946563/postman.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946562/psql.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946564/python.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946563/react.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946565/typescript.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946566/VScode.png" },
        { src: "https://res.cloudinary.com/dyptshrbj/image/upload/v1745946564/Tailwind.svg" }
    ]

    // Category colors
    const categoryColors = {
        Frontend: "#3B82F6", // blue
        Backend: "#10B981", // green
        Mobile: "#8B5CF6", // purple
        Database: "#F59E0B", // amber
        DevOps: "#EF4444", // red
        Design: "#EC4899", // pink
        Tools: "#6366F1", // indigo
    }

    // Personal info tabs
    const personalInfo = {
        skills: {
            title: "Technical Skills",
            content: [
                { icon: "💻", label: "Full-Stack Development", details: "Java, React, Node.js, MongoDB" },
                { icon: "📱", label: "App Development", details: "Flutter, Dart" },
                { icon: "☁️", label: "Cloud & DevOps", details: "AWS, Docker" },
            ],
        },
        education: {
            title: "Education",
            content: [
                { year: "2022-2026", degree: "B.Tech in Computer Science", institution: "Vellore Institute of Technology Bhopal" },
            ],
        },
        interests: {
            title: "Personal Interests",
            content: [
                { icon: "🏋️", label: "Fitness", details: "Strength training & running" },
                { icon: "🎮", label: "Gaming", details: "Strategy & RPG games" },
                { icon: "⚽", label: "Football", details: "Playing & watching matches" },
                { icon: "🚴", label: "Cycling", details: "Exploring new trails" },
                { icon: "⛰️", label: "Adventures", details: "Hiking & exploring nature" },
            ],
        },
    };


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".panel", {
                xPercent: -100 * (gsap.utils.toArray(".panel").length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (gsap.utils.toArray(".panel").length - 1),
                    end: () => "+=" + slider.current.offsetWidth,
                },
            })
        }, component)

        return () => ctx.revert()
    }, [])

    const renderLogo = (logo, index, direction) => (
        <motion.div
            key={`${direction}-${index}`}
            className="relative group"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
            <div className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 bg-transparent">
                <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    className="h-16 w-16 object-contain transition-all duration-300"
                />
            </div>
        </motion.div>
    )

    return (
        <div className="relative" ref={component}>
            <div ref={slider} className="flex h-screen w-[300vw]">
                {/* Enhanced About Me Section */}
                <div className="panel relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
                    {/* Background with subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white"></div>

                    {/* Animated shapes */}
                    <div className="absolute inset-0 overflow-hidden">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full opacity-20"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    width: `${Math.random() * 200 + 50}px`,
                                    height: `${Math.random() * 200 + 50}px`,
                                    background: `radial-gradient(circle, ${
                                        Object.values(categoryColors)[Math.floor(Math.random() * Object.values(categoryColors).length)]
                                    } 0%, rgba(255,255,255,0) 70%)`,
                                }}
                                animate={{
                                    x: [0, Math.random() * 100 - 50],
                                    y: [0, Math.random() * 100 - 50],
                                    opacity: [0.1, 0.3, 0.1],
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 15,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>

                    {/* Content container */}
                    <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <AnimatedTitle
                                title="Abou<b>t<b/> Me"
                                containerClass="special-font w-full font-zentry text-6xl !leading-[.9] mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                            />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                            {/* Left column - Profile */}
                            <motion.div
                                className="flex flex-col items-center md:items-start"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="relative mb-6">
                                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                        {/* Replace with actual profile image */}
                                        <div
                                            className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                                            <img
                                                src="https://res.cloudinary.com/dyptshrbj/image/upload/v1745946534/bj1.jpg"/>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, 0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatDelay: 3,
                                        }}
                                    >
                                        <span className="text-2xl">👍</span>
                                    </motion.div>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center md:text-left">
                                    Hi, I'm{" "}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Bhavyansh Jain
                  </span>
                                    !
                                </h1>

                                <p className="text-xl text-gray-600 mb-6 text-center md:text-left">
                                    A passionate Full-Stack & App Developer with expertise in Java, Python, and React. I love crafting
                                    interactive experiences and solving challenging problems.
                                </p>
                            </motion.div>

                            {/* Right column - Info tabs */}
                            <motion.div
                                className="bg-white rounded-2xl shadow-xl p-6 overflow-hidden"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="flex border-b border-gray-200 mb-6">
                                    {Object.keys(personalInfo).map((tab) => (
                                        <button
                                            key={tab}
                                            className={`px-4 py-2 font-medium text-sm transition-all relative ${
                                                activeTab === tab ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
                                            }`}
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {personalInfo[tab].title}
                                            {activeTab === tab && (
                                                <motion.div
                                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                                                    layoutId="activeTab"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <div className="min-h-[250px]">
                                    {activeTab === "skills" && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        >
                                            {personalInfo.skills.content.map((skill, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    <span className="text-2xl mr-3">{skill.icon}</span>
                                                    <div>
                                                        <h3 className="font-medium text-gray-800">{skill.label}</h3>
                                                        <p className="text-sm text-gray-600">{skill.details}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {activeTab === "education" && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            {personalInfo.education.content.map((edu, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="mb-4 pb-4 border-b border-gray-100 last:border-0"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <div className="flex justify-between items-center mb-1">
                                                        <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                                                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{edu.year}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600">{edu.institution}</p>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {activeTab === "interests" && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        >
                                            {personalInfo.interests.content.map((interest, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    <span className="text-2xl mr-3">{interest.icon}</span>
                                                    <div>
                                                        <h3 className="font-medium text-gray-800">{interest.label}</h3>
                                                        <p className="text-sm text-gray-600">{interest.details}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Skillverse Section - Keeping as is from previous update */}
                <div className="panel flex flex-col items-center justify-center w-screen h-screen p-12 relative overflow-hidden">
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black"></div>

                    {/* Animated particles background */}
                    <div className="absolute inset-0 opacity-20">
                        {Array.from({ length: 50 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-white"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    width: `${Math.random() * 4 + 1}px`,
                                    height: `${Math.random() * 4 + 1}px`,
                                    opacity: Math.random() * 0.5 + 0.3,
                                    animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
                                }}
                            />
                        ))}
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center w-full text-white">
                        <AnimatedTitle title="Skill<b>v<b/>erse" containerClass="text-6xl font-bold mb-8" />

                        <p className="text-xl text-gray-300 max-w-2xl text-center mb-12">
                            My technical toolkit spans across multiple domains, from frontend and backend development to mobile apps
                            and DevOps. Each icon represents a technology in my arsenal.
                        </p>

                        {/* Category legend */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {Object.entries(categoryColors).map(([category, color]) => (
                                <div key={category} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                                    <span className="text-sm text-gray-300">{category}</span>
                                </div>
                            ))}
                        </div>

                        {/* First carousel row - left to right */}
                        <div className="relative w-full overflow-hidden mb-12">
                            <motion.div
                                className="flex gap-12 items-center"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                }}
                                style={{ width: "calc(200% + 100px)" }}
                            >
                                {[...logosSet1, ...logosSet1].map((logo, index) => renderLogo(logo, index, "top"))}
                            </motion.div>
                        </div>

                        {/* Second carousel row - right to left */}
                        <div className="relative w-full overflow-hidden">
                            <motion.div
                                className="flex gap-12 items-center"
                                animate={{ x: ["-50%", "0%"] }}
                                transition={{
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                }}
                                style={{ width: "calc(200% + 100px)" }}
                            >
                                {[...logosSet2, ...logosSet2].map((logo, index) => renderLogo(logo, index, "bottom"))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for the twinkling animation */}
            <style jsx>{`
                @keyframes twinkle {
                    0% { opacity: 0.3; transform: scale(1); }
                    100% { opacity: 0.8; transform: scale(1.5); }
                }
            `}</style>
        </div>
    )
}

export default Marquee