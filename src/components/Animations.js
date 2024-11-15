import React from 'react';

const Animations = () => {
    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Animation 1: CSS3 Animation (Beispiel für eine schwebende Box) */}
            <div className="animation-item">
                <h2 className="text-xl font-semibold mb-2">Schwebende Box</h2>
                <div className="w-32 h-32 bg-blue-500 rounded-lg shadow-lg animate-bounce"></div>
            </div>

            {/* Animation 2: GIF Animation */}
            <div className="animation-item">
                <h2 className="text-xl font-semibold mb-2">GIF Animation</h2>
                <img src="path/to/your/animation.gif" alt="Animation" className="rounded-lg shadow-lg" />
            </div>

            {/* Animation 3: SVG Animation (Beispiel für ein animiertes Herz) */}
            <div className="animation-item">
                <h2 className="text-xl font-semibold mb-2">SVG Animation</h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-32 h-32"
                >
                    <path
                        d="M50,70 C30,60 10,40 10,25 C10,10 25,0 40,0 C50,0 60,10 70,25 C80,40 60,60 50,70"
                        fill="red"
                        className="animate-heart"
                    />
                </svg>
            </div>

            {/* Animation 4: CSS3 Keyframes Animation (Beispiel für eine rotierende Animation) */}
            <div className="animation-item">
                <h2 className="text-xl font-semibold mb-2">Rotierende Animation</h2>
                <div className="w-32 h-32 bg-green-500 rounded-full animate-spin"></div>
            </div>

            {/* Animation 5: CSS3 Animation mit Verzögerung (Beispiel für eine animierte Textfarbe) */}
            <div className="animation-item">
                <h2 className="text-xl font-semibold mb-2">Farbwechsel Text</h2>
                <p className="text-xl animate-pulse text-red-500">Dieser Text wechselt die Farbe!</p>
            </div>

            {/* Weitere Animationen oder Inhalte hier */}
        </div>
    );
};

export default Animations;
