import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import AnimatedTitle from './AnimatedTitle'; // Make sure you have this component created and imported.

const skills = [
    { name: 'React', position: [5, 0, 2] },
    { name: 'JavaScript', position: [-4, 2, 3] },
    { name: 'Python', position: [2, 4, -5] },
    { name: 'HTML', position: [-3, -2, 4] },
    { name: 'CSS', position: [4, -3, -4] },
    { name: 'Git', position: [-2, -5, -3] },
    { name: 'Flutter', position: [5, -2, 2] },
];

const Planet = ({ name, position }) => {
    return (
        <mesh position={position}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="blue" />
            <Html center>
                <div
                    style={{
                        color: 'white',
                        fontSize: '12px',
                        textAlign: 'center',
                        background: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '5px',
                        padding: '5px',
                    }}
                >
                    {name}
                </div>
            </Html>
        </mesh>
    );
};

const SkillGalaxy = () => {
    const scrollToNextPage = () => {
        window.scrollTo({
            bottom: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative bg-black w-screen h-screen overflow-hidden">
            {/* Animated Title */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20 text-white text-center">
                <AnimatedTitle
                    title="The Cre<b>a</b>tion Zone"
                    containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                />
            </div>

            {/* Galaxy */}
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars
                    radius={200} // Increase the size of the stars to make the galaxy bigger.
                    depth={50}
                    count={5000}
                    factor={7}
                    saturation={0.5}
                    fade
                />
                {skills.map((skill) => (
                    <Planet key={skill.name} name={skill.name} position={skill.position} />
                ))}
                <OrbitControls />
            </Canvas>

            {/* Scroll Button */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                <button
                    onClick={scrollToNextPage}
                    className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                >
                    Scroll to Next Page
                </button>
            </div>
        </div>
    );
};

export default SkillGalaxy;
