const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // CORS-Paket importieren

const app = express();
const PORT = 5000; // Port für das Backend

app.use(cors()); // CORS aktivieren
app.use(express.static(path.join(__dirname, 'public'))); // Statisches Verzeichnis für Bilder

// API-Route, um Bilder aus dem Verzeichnis "public/images" abzurufen
app.get('/api/images', (req, res) => {
    const imagesDir = path.join(__dirname, 'public', 'images');

    // Lesen des Verzeichnisses
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            console.error('Fehler beim Lesen des Verzeichnisses:', err);
            return res.status(500).json({ error: 'Fehler beim Laden der Bilder' });
        }

        // Nur Bilddateien filtern (jpg, png, bmp, etc.)
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|bmp)$/i.test(file));
        const imagePaths = imageFiles.map(file => `/images/${file}`); // Bildpfade erstellen
        res.json(imagePaths); // Liste der Bilder zurücksenden
    });
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
