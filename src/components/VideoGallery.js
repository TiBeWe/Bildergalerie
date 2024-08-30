import React from 'react';

const VideoGallery = () => {
    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="video-item">
                <h2 className="text-xl font-semibold mb-2">Titel</h2>
                <video controls className="w-full rounded-lg shadow-lg">
                    <source src="path/to/your/video.mp4" type="video/mp4" />
                </video>
            </div>
            {/* Weitere Videos hier */}
        </div>
    );
};

export default VideoGallery;
