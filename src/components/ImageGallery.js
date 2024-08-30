import React from 'react';

const ImageGallery = () => {
    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="image-item">
                <h2 className="text-xl font-semibold mb-2">Titel</h2>
                <img src="path/to/your/image.jpg" alt="Gallery Item" className="rounded-lg shadow-lg" />
            </div>
            {/* Weitere Bilder hier */}
        </div>
    );
};

export default ImageGallery;
