<<<<<<< HEAD
import React, { useState } from 'react';

const ImageGallery = () => {
    const images = [
        '/images/eins.jpg',
        '/images/zwei.jpg',
        '/images/drei.jpg',
        '/images/vier.jpg',
        '/images/fuenf.jpg',
        '/images/Sechs.bmp'
    ];

    const [currentIndex, setCurrentIndex] = useState(0); // State für das aktuelle Bild
    const [showThumbnails, setShowThumbnails] = useState(false); // State für das Anzeigen der Thumbnails

    // Funktion zum nächsten Bild
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Funktion zum vorherigen Bild
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Funktion zum Wechsel auf ein bestimmtes Bild
    const selectImage = (index) => {
        setCurrentIndex(index);
        setShowThumbnails(false); // Schließe die Thumbnail-Ansicht
    };

    return (
        <div className="container mx-auto p-6">
            {/* Großes Bild */}
            <div className="relative flex justify-center items-center">
                <button
                    className="absolute left-0 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full"
                    onClick={prevImage}
                >
                    ⬅️
                </button>

                <img
                    src={images[currentIndex]}
                    alt={`Gallery Image ${currentIndex + 1}`}
                    className="w-full max-w-3xl h-auto rounded-lg shadow-lg object-cover"
                />

                <button
                    className="absolute right-0 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full"
                    onClick={nextImage}
                >
                    ➡️
                </button>
            </div>

            {/* Button zum Anzeigen aller Bilder */}
            <div className="text-center mt-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                    onClick={() => setShowThumbnails(!showThumbnails)}
                >
                    {showThumbnails ? "Thumbnails schließen" : "Alle Bilder anzeigen"}
                </button>
            </div>

            {/* Thumbnail-Ansicht */}
            {showThumbnails && (
                <div className="grid grid-cols-3 gap-4 mt-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`border-4 ${index === currentIndex ? "border-blue-500" : "border-transparent"} cursor-pointer`}
                            onClick={() => selectImage(index)}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            )}
=======
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
>>>>>>> 6fb85b6947f3cbcd51a6b25f926991fd78b38d48
        </div>
    );
};

export default ImageGallery;
