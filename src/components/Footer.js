import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">Meine Galerie</h3>
                    <p>&copy; 2024 Alle Rechte vorbehalten</p>
                </div>
                <div className="space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        Facebook
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        Twitter
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
