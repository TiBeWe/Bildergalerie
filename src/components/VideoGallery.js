import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoGallery = () => {
    const [videos, setVideos] = useState([]); // Dynamische Videoliste
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);

    useEffect(() => {
        // Videoliste vom Server abrufen
        axios.get('http://localhost:5000/api/videos')
            .then(response => {
                setVideos(response.data); // Videoliste aktualisieren
                console.log(response.data); // Überprüfen, ob die Daten korrekt sind
            })
            .catch(error => {
                console.error("Fehler beim Laden der Videos:", error);
            });
    }, []);

    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    const selectVideo = (index) => {
        setCurrentIndex(index);
        setShowThumbnails(false);
    };

    return (
        <div className="container mx-auto p-6">
            {/* Großes Video */}
            <div className="relative flex justify-center items-center">
                <button
                    className="absolute left-0 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full"
                    onClick={prevVideo}
                >
                    ⬅️
                </button>

                {videos.length > 0 && (
                    <video controls className="w-full max-w-3xl h-128 rounded-lg shadow-lg object-cover">
                        <source src={videos[currentIndex]} type="video/mp4" />
                        Ihr Browser unterstützt das Video-Tag nicht.
                    </video>
                )}

                <button
                    className="absolute right-0 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full"
                    onClick={nextVideo}
                >
                    ➡️
                </button>
            </div>

            {/* Button zum Anzeigen aller Videos */}
            <div className="text-center mt-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                    onClick={() => setShowThumbnails(!showThumbnails)}
                >
                    {showThumbnails ? "Thumbnails schließen" : "Alle Videos anzeigen"}
                </button>
            </div>

            {/* Thumbnail-Ansicht */}
            {showThumbnails && (
                <div className="grid grid-cols-3 gap-4 mt-6">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className={`border-4 ${index === currentIndex ? "border-blue-500" : "border-transparent"} cursor-pointer`}
                            onClick={() => selectVideo(index)}
                        >
                            <video className="w-full h-24 object-cover rounded-lg" muted>
                                <source src={video} type="video/mp4" />
                            </video>
                            <p className="text-center text-sm mt-1">Video {index + 1}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VideoGallery;
