import React, { useState } from 'react';

const VideoGallery = () => {
    const videos = [
        { title: 'Video 1', src: '/videos/Video1.mp4' },
        { title: 'Video 2', src: '/videos/Video2.mp4' },
        { title: 'Video 3', src: '/videos/Video3.mp4' }
        // Weitere Videos können hier hinzugefügt werden
    ];

    const [currentIndex, setCurrentIndex] = useState(0); // Aktueller Video-Index
    const [showThumbnails, setShowThumbnails] = useState(false); // Thumbnail-Ansicht anzeigen

    // Funktion zum nächsten Video
    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    // Funktion zum vorherigen Video
    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    // Funktion zum Auswählen eines bestimmten Videos
    const selectVideo = (index) => {
        setCurrentIndex(index);
        setShowThumbnails(false); // Schließe die Thumbnail-Ansicht
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
                    <h2 className="text-xl font-semibold mb-2 text-center">{videos[currentIndex].title}</h2>
                    <video controls className="w-full rounded-lg shadow-lg">
                        <source src={videos[currentIndex].src} type="video/mp4" />
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
                                <source src={video.src} type="video/mp4" />
                            </video>
                            <p className="text-center text-sm mt-1">{video.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VideoGallery;
