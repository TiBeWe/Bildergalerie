import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoGallery = () => {
    const [videos, setVideos] = useState([]); // Dynamische Video-Liste
    const [currentIndex, setCurrentIndex] = useState(0); // Aktueller Video-Index
    const [showThumbnails, setShowThumbnails] = useState(false); // Thumbnail-Ansicht anzeigen

    // Videos vom Server abrufen
    useEffect(() => {
        axios.get('http://localhost:5000/api/videos')
            .then(response => {
                setVideos(response.data); // Videos aktualisieren
                console.log(response.data); // Überprüfen der geladenen Videos
            })
            .catch(error => {
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

    return (
        <div className="container mx-auto p-6">
            {/* Großes Video */}
            <div className="relative flex justify-center items-center max-w-3xl mx-auto">
                {/* Linker Pfeil */}
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full z-10"
                    onClick={prevVideo}
                >
                    ⬅️
                </button>

                {/* Video-Player */}
                <div className="w-full">
                    <h2 className="text-xl font-semibold mb-2 text-center">{videos[currentIndex]}</h2>
                    <video
                        key={videos[currentIndex]} // Schlüssel verwenden, um das Video neu zu laden
                        controls
                        className="w-full rounded-lg shadow-lg"
                    >
                        <source src={videos[currentIndex]} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Rechter Pfeil */}
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full z-10"
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
