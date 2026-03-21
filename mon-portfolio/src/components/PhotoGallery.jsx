import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PhotoGallery.css';

function PhotoGallery() {
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    { 
      src: '/images/photo/1.jpg', 
      titre: 'CONVERSE'
    },
    { 
      src: '/images/photo/2.jpg',
      titre: 'Orangina'
    },
    { 
      src: '/images/photo/3.jpg', 
      titre: 'A regular summer night in 2015' 
    },
    { 
      src: '/images/photo/4.jpg'
    },
    { 
      src: '/images/photo/5.jpg'
    },
    { 
      src: '/images/photo/6.jpg',
      titre: 'A regular summer night in 2015'
    },
    { 
      src: '/images/photo/7.jpg', 
      titre: 'Le croisement au-dessus'
    },
    { 
      src: '/images/photo/8.jpg',
      titre: 'Alien night'
    },
    { 
      src: '/images/photo/10.png',
      titre: 'Alien night hidden population'
    },
    { 
      src: '/images/photo/9.jpg'
    }
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <button className="back-btn" onClick={() => navigate('/')}>RETOUR</button>
        
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <img 
              key={index} 
              src={photo.src} 
              alt="" 
              onClick={() => setSelectedPhoto(photo)} 
            />
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div className="lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
          <div 
            className={`lightbox-wrapper ${selectedPhoto.description ? 'has-description' : ''} ${selectedPhoto.titre && !selectedPhoto.description ? 'title-only' : ''}`} 
            onClick={(e) => {
              if (selectedPhoto.description) {
                e.stopPropagation();
              }
            }}
          >
            <div className="lightbox-media">
              <img src={selectedPhoto.src} alt="" />
            </div>

            {selectedPhoto.description && (
              <div className="lightbox-info-panel">
                <div className="info-content">
                  <h2 className="info-title">{selectedPhoto.titre}</h2>
                  <p className="info-text">{selectedPhoto.description}</p>
                </div>
                <button className="close-info-btn" onClick={() => setSelectedPhoto(null)}>
                  FERMER
                </button>
              </div>
            )}

            {selectedPhoto.titre && !selectedPhoto.description && (
              <div className="lightbox-info-panel title-only-panel">
                <h2 className="info-title title-only-text">{selectedPhoto.titre}</h2>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;