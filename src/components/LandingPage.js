import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 6fb85b6947f3cbcd51a6b25f926991fd78b38d48

const LandingPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] animate-gradientMove">
            <h1 className="text-[#FFFCFC] text-[10rem] md:text-[12rem] font-bold mb-16 drop-shadow-lg animate-pulse opacity-90">
                Spanien
            </h1>
            <div className="flex space-x-4 mt-[-4rem]">
<<<<<<< HEAD
                <Link to="/gallery" className="relative bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] bg-[length:200%_200%] animate-gradientMove text-black py-4 px-12 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:text-[#FFFCFC]">
                    Galerie
                </Link>

                <Link to="/videos" className="relative bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] bg-[length:200%_200%] animate-gradientMove text-black py-4 px-12 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:text-[#FFFCFC]">
                    Videos
                </Link>

                <Link to="/animations" className="relative bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] bg-[length:200%_200%] animate-gradientMove text-black py-4 px-12 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:text-[#FFFCFC]">
                    Animationen
                </Link>
=======
                {/* Alle Buttons doppelt so groß */}
                <button className="relative bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] bg-[length:200%_200%] animate-gradientMove text-black py-4 px-12 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:text-[#FFFCFC]">
                    Bilder
                </button>

                <button className="relative bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] bg-[length:200%_200%] animate-gradientMove text-black py-4 px-12 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:text-[#FFFCFC]">
                    Videos
                </button>

                <button className="relative bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] bg-[length:200%_200%] animate-gradientMove text-black py-4 px-12 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:text-[#FFFCFC]">
                    Animationen
                </button>
>>>>>>> 6fb85b6947f3cbcd51a6b25f926991fd78b38d48
            </div>
        </div>
    );
};

export default LandingPage;
