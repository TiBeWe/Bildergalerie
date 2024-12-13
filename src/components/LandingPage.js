'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.scss'; // Importiere deine SCSS-Datei für die Animation
import { opacity, slideUp } from './anim'; // Externe Animationsdatei

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

const LandingPage = () => {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [showLanding, setShowLanding] = useState(false);

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) {
            setTimeout(() => setShowLanding(true), 1000); // Zeige Landing Page nach der Animation
            return;
        }
        setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    };

    return (
        <>
            {!showLanding ? (
                <motion.div variants={slideUp} initial="initial" exit="exit" className="introduction">
                    {dimension.width > 0 && (
                        <>
                            <motion.p variants={opacity} initial="initial" animate="enter">
                                <span></span>
                                {words[index]}
                            </motion.p>
                            <svg>
                                <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                            </svg>
                        </>
                    )}
                </motion.div>
            ) : (
                <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] animate-gradientMove">
                    <h1 className="text-[#FFFCFC] text-[10rem] md:text-[12rem] font-bold mb-16 drop-shadow-lg animate-pulse opacity-90">
                        Spanien
                    </h1>
                    <div className="flex space-x-4 mt-[-4rem]">
                        <Link
                            to="/gallery"
                            className="relative bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] bg-[length:200%_200%] animate-gradientMove text-black py-4 px-12 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:text-[#FFFCFC]"
                        >
                            Galerie
                        </Link>
                        <Link
                            to="/videos"
                            className="relative bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] bg-[length:200%_200%] animate-gradientMove text-black py-4 px-12 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:text-[#FFFCFC]"
                        >
                            Videos
                        </Link>
                        {/* GitHub-Link */}
                        <a
                            href="https://github.com/TiBeWe/Bildergalerie/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] bg-[length:200%_200%] animate-gradientMove text-black py-4 px-12 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:text-[#FFFCFC]"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default LandingPage;
