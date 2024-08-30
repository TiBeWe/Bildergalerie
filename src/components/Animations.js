import React from 'react';

const Animations = () => {
    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="animation-item">
                <h2 className="text-xl font-semibold mb-2">Animationen</h2>
                <img src="path/to/your/animation.gif" alt="Animation" className="rounded-lg shadow-lg" />
            </div>
            {/* Weitere Animationen hier */}
        </div>
    );
};

export default Animations;
