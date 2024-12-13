import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ImageGallery from './components/ImageGallery';
import VideoGallery from './components/VideoGallery';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/videos" element={<VideoGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
