import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import PhotoGallery from './components/PhotoGallery';
import VideoGallery from './components/VideoGallery';
import ProjetPerso from './components/ProjetPerso';

function Header() {
  const location = useLocation();
  if (location.pathname !== "/") return null;
  return (
    <header className="header-signature">
      <h1>VEGA LALIBERTE</h1>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="background-overlay"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/photos" element={<PhotoGallery />} />
          <Route path="/videos" element={<VideoGallery />} />
          <Route path="/projets" element={<ProjetPerso />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;