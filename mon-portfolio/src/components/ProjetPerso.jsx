import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoGallery.css'; 

function ProjetPerso() {
  const navigate = useNavigate();
  const [selectedProjet, setSelectedProjet] = useState(null);

  const projets = [
    { 
      src: '/projetperso/1.mp4', 
      titre: 'Monster Hunter Board Game', 
      description: 'DÉVELOPPEMENT D’UNE APPLICATION MOBILE ANDROID, PERMETTANT D’ENREGISTRER LA FICHE D’UN PERSONNAGE, À LA MANIÈRE DE DONJONS ET DRAGONS.' 
    }
  ];

  return (
    <div className="video-gallery-container">
      <div className="video-gallery-content">
        <button className="back-btn" onClick={() => navigate('/')}>RETOUR</button>
        <div className="video-grid">
          {projets.map((projet, index) => (
            <div key={index} className="video-item" onClick={() => setSelectedProjet(projet)}>
              <video src={projet.src} preload="metadata" muted />
              <div className="play-overlay"><span className="play-icon">&#9658;</span></div>
            </div>
          ))}
        </div>
      </div>

      {selectedProjet && (
        <div className="lightbox-overlay" onClick={() => setSelectedProjet(null)}>
          <div 
            className={`lightbox-wrapper ${selectedProjet.description ? 'has-description' : ''} ${selectedProjet.titre && !selectedProjet.description ? 'title-only' : ''}`} 
            onClick={(e) => {
              if (selectedProjet.description) e.stopPropagation();
            }}
          >
            <div className="lightbox-media">
              <video src={selectedProjet.src} controls autoPlay />
            </div>

            {selectedProjet.description && (
              <div className="lightbox-info-panel">
                <div className="info-content">
                  <h2 className="info-title">{selectedProjet.titre}</h2>
                  <p className="info-text">{selectedProjet.description}</p>
                </div>
                <button className="close-info-btn" onClick={() => setSelectedProjet(null)}>FERMER</button>
              </div>
            )}

            {selectedProjet.titre && !selectedProjet.description && (
              <div className="lightbox-info-panel title-only-panel">
                <h2 className="info-title title-only-text">{selectedProjet.titre}</h2>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjetPerso;