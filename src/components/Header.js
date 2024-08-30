import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-5">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-wide animate-bounce">
                    Willkommen in der Bildergalerie
                </h1>
                <p className="mt-4 text-lg md:text-2xl animate-pulse">
                    Erkunde die schönsten Bilder, Videos und Animationen
                </p>
            </div>
        </header>
    );
};

export default Header;
