import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = () => {
    const [images, setImages] = useState([]); // Dynamische Bildliste
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);
    const [loading, setLoading] = useState(true); // Ladezustand
    const [error, setError] = useState(null); // Fehlerzustand

    useEffect(() => {
        // Bilderliste vom Server abrufen
        axios.get('http://localhost:5000/api/images')
            .then(response => {
                setImages(response.data); // Bildliste aktualisieren
                setLoading(false); // Laden beendet
                console.log(response.data); // Überprüfe, ob die Daten korrekt sind
            })
            .catch(error => {
                setError("Fehler beim Laden der Bilder. Bitte versuche es später noch einmal.");
                setLoading(false); // Ladeanzeige beenden
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

    if (loading) {
        return <div className="text-center">Lade Bilder...</div>; // Ladeanzeige
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>; // Fehleranzeige
    }

    return (
        <div className="container mx-auto p-6">
            {/* Großes Bild */}
            <div className="relative flex justify-center items-center">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full"
                    onClick={prevImage}
                >
                    ⬅️
                </button>

                {images.length > 0 && (
                    <div className="relative w-full max-w-3xl mx-auto">
                        {/* Bild mit flexibler Höhe, das Seitenverhältnis wird beibehalten */}
                        <img
                            src={images[currentIndex]}
                            alt={`Bild ${currentIndex + 1}`}
                            className="w-full h-auto max-h-[74vh] object-contain rounded-lg img-zoom" // Zoom-Funktion
                        />
                    </div>
                )}

                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full"
                    onClick={nextImage}
                >
                    ➡️
                </button>
            </div>

            {/* Button zum Anzeigen aller Thumbnails */}
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
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`border-4 ${index === currentIndex ? "border-blue-500" : "border-transparent"} cursor-pointer`}
                            onClick={() => selectImage(index)}
                        >
                            <div className="relative w-full h-32">
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-contain rounded-lg img-zoom" // Zoom für Thumbnails
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
