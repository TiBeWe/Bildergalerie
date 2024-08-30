import React from 'react';

const LandingPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url('path/to/your/image.jpg')` }}>
            <h1 className="text-white text-5xl md:text-8xl font-bold mb-6">
                Spanien
            </h1>
            <div className="flex space-x-4">
                <button className="bg-white text-black py-2 px-6 rounded-full shadow-lg hover:bg-gray-300 transition duration-300">
                    Bilder
                </button>
                <button className="bg-white text-black py-2 px-6 rounded-full shadow-lg hover:bg-gray-300 transition duration-300">
                    Videos
                </button>
                <button className="bg-white text-black py-2 px-6 rounded-full shadow-lg hover:bg-gray-300 transition duration-300">
                    Animationen
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
