import React from 'react';

const LandingPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#AA151B] via-[#F9B13D] to-[#FFFCFC] animate-gradientMove">
            <h1 className="text-[#FFFCFC] text-[10rem] md:text-[12rem] font-bold mb-16 drop-shadow-lg animate-pulse opacity-90">
                Spanien
            </h1>
            <div className="flex space-x-4 mt-[-4rem]">
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
            </div>
        </div>
    );
};

export default LandingPage;
