import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoGallery = () => {
    const [videos, setVideos] = useState([]); // Dynamische Video-Liste
    const [currentIndex, setCurrentIndex] = useState(0); // Aktueller Video-Index
    const [showThumbnails, setShowThumbnails] = useState(false); // Thumbnail-Ansicht anzeigen
    const [loading, setLoading] = useState(true); // Ladezustand
    const [error, setError] = useState(null); // Fehlerzustand

    // Videos vom Server abrufen
    useEffect(() => {
        axios.get('http://localhost:5000/api/videos')
            .then(response => {
                setVideos(response.data); // Videos aktualisieren
                setLoading(false); // Ladeanzeige beenden
            })
            .catch(error => {
                setError("Fehler beim Laden der Videos. Bitte versuche es später noch einmal.");
                setLoading(false); // Ladeanzeige beenden
                console.error('Fehler beim Laden der Videos:', error);
            });
    }, []);

    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length); // Nächstes Video
    };

    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length); // Vorheriges Video
    };

    const selectVideo = (index) => {
        setCurrentIndex(index); // Video auswählen
        setShowThumbnails(false); // Thumbnails schließen
    };

    if (loading) {
        return <div className="text-center">Lade Videos...</div>; // Ladeanzeige
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>; // Fehleranzeige
    }

    return (
        <div className="container mx-auto p-6">
            {/* Großes Video */}
            <div className="relative flex justify-center items-center">
                {/* Linker Pfeil */}
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full"
                    onClick={prevVideo}
                >
                    ⬅️
                </button>

                {videos.length > 0 && (
                    <div className="relative w-full max-w-3xl mx-auto flex justify-center items-center">
                        <video
                            key={videos[currentIndex]} // Video-Element wird jedes Mal neu geladen
                            className="h-auto max-h-[74vh] object-contain rounded-lg"
                            controls
                            autoPlay // Automatische Wiedergabe des Videos
                        >
                            <source src={videos[currentIndex]} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}

                {/* Rechter Pfeil */}
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full"
                    onClick={nextVideo}
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
                    {showThumbnails ? "Thumbnails schließen" : "Alle Videos anzeigen"}
                </button>
            </div>

            {/* Thumbnails */}
            {showThumbnails && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className={`border-4 ${index === currentIndex ? "border-blue-500" : "border-transparent"} cursor-pointer`}
                            onClick={() => selectVideo(index)}
                        >
                            <div className="relative w-full h-32 flex justify-center items-center">
                                <video
                                    className="h-full object-contain rounded-lg"
                                    muted
                                >
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VideoGallery;
