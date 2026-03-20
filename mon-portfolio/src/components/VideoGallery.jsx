import '../index.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoGallery.css';

function VideoGallery() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { 
      src: '/videos/1.mp4', 
      titre: 'Video edit de The last of us'
    }
  ];

  return (
    <div className="video-gallery-container">
      <div className="video-gallery-content">
        <button className="back-btn" onClick={() => navigate('/')}>RETOUR</button>
        <div className="video-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-item" onClick={() => setSelectedVideo(video)}>
              <video src={video.src} preload="metadata" muted />
              <div className="play-overlay"><span className="play-icon">&#9658;</span></div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="lightbox-overlay" onClick={() => setSelectedVideo(null)}>
          <div 
            className={`lightbox-wrapper ${selectedVideo.description ? 'has-description' : ''} ${selectedVideo.titre && !selectedVideo.description ? 'title-only' : ''}`} 
            onClick={(e) => {
              if (selectedVideo.description) e.stopPropagation();
            }}
          >
            <div className="lightbox-media">
              <video src={selectedVideo.src} controls autoPlay />
            </div>

            {selectedVideo.description && (
              <div className="lightbox-info-panel">
                <div className="info-content">
                  <h2 className="info-title">{selectedVideo.titre}</h2>
                  <p className="info-text">{selectedVideo.description}</p>
                </div>
                <button className="close-info-btn" onClick={() => setSelectedVideo(null)}>FERMER</button>
              </div>
            )}

            {selectedVideo.titre && !selectedVideo.description && (
              <div className="lightbox-info-panel title-only-panel">
                <h2 className="info-title title-only-text">{selectedVideo.titre}</h2>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoGallery;