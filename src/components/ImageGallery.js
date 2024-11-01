import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = () => {
    const [images, setImages] = useState([]); // Dynamische Bildliste
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);

    useEffect(() => {
        // Bilderliste vom Server abrufen
        axios.get('http://localhost:5000/api/images')
            .then(response => {
                setImages(response.data); // Bildliste aktualisieren
                console.log(response.data); // Überprüfe, ob die Daten korrekt sind
            })
            .catch(error => {
                console.error("Fehler beim Laden der Bilder:", error);
            });
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const selectImage = (index) => {
        setCurrentIndex(index);
        setShowThumbnails(false);
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

                {images.length > 0 && (
                    <img
                        src={images[currentIndex]}
                        alt={`Bild ${currentIndex + 1}`} // Alternativ: alt="" für keine Warnung
                        className="w-full max-w-3xl h-128 rounded-lg shadow-lg object-cover"
                    />
                )}


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

            {/* Thumbnails */}
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
                                className="w-full h-32 object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
