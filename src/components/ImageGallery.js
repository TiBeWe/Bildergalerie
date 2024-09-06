import React from 'react';

const ImageGallery = () => {
    const images = [
        '/images/Eins.jpg',
        '/images/Zwei.jpg',
        '/images/Drei.jpg',
        '/images/Vier.jpg',
        '/images/Fuenf.jpg'
    ];

    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div key={index} className="image-item">
                    <img
                        src={image}
                        alt={`Gallery Item ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
