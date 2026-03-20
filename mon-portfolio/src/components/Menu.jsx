import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuButton from './MenuButton';

function Menu() {
  const navigate = useNavigate();

  const handleAction = (title) => {
    if (title === 'PHOTO') {
      navigate('/photos');
    } else if (title === 'VIDEO') {
      navigate('/videos');
    } else if (title === 'PROJET PERSO') {
      navigate('/projets');
    } else if (title === 'ROCKTOCLIMB.COM') {
      window.open('https://rockstoclimb.com', '_blank');
    }
  };

  const sections = [
    { id: 1, title: 'PHOTO', imageUrl: '/images/photo.jpg' },
    { id: 2, title: 'VIDEO', imageUrl: '/images/video.png' },
    { id: 3, title: 'PROJET PERSO', imageUrl: '/images/projetperso.jpg' },
    { id: 4, title: 'ROCKTOCLIMB.COM', imageUrl: '/images/rockstoclimb.png' },
  ];

  return (
    <main className="portfolio-grid">
      {sections.map((section, index) => (
        <div 
          key={section.id} 
          className="item-wrapper" 
          onClick={() => handleAction(section.title)}
          style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
        >
          <MenuButton title={section.title} imageUrl={section.imageUrl} />
        </div>
      ))}
    </main>
  );
}

export default Menu;