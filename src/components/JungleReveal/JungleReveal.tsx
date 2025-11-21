import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './JungleReveal.css'; 

const JungleReveal: React.FC = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnterJungle = () => {
    navigate('/portfolio');
  };

  const handleLeafClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      
      if (!isAnimating && !isRevealed) {
        setIsAnimating(true);
        setIsRevealed(true); // Make button clickable immediately
        
        // Faster animation timeout for mobile (matches CSS animation time)
        setTimeout(() => {
          setIsAnimating(false);
        }, 600); // Mobile-only faster timeout
      }
    }
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
  // Allow clicks to pass through to leaves and button
    if (target.classList.contains('leaf')) {
      handleLeafClick(e as React.MouseEvent<HTMLImageElement>);
    }
  };

  return (
    <div 
      className={`jungle-container ${isRevealed ? 'revealed' : ''}`}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className={`content ${isAnimating ? 'animating' : ''}`}>
        <button
          className="reveal-button"
          onClick={handleEnterJungle}
        >
          Enter The Jungle!
        </button>
      </div>

      <img
        src="/amgk_simx_210722.png"
        className="leaf top-left"
        alt="Top-left jungle leaves"
        onClick={(e) => handleLeafClick(e)}
      />
      <img
        src="/leaves.png"
        className="leaf top-right"
        alt="Top-right jungle leaves"
        onClick={(e) => handleLeafClick(e)}
      />
      <img
        src="/mid-leaf.webp"
        className="leaf middle-left"
        alt="Middle-left jungle leaves"
        onClick={(e) => handleLeafClick(e)}
      />
      <img
        src="/mid-leaf-r.webp"
        className="leaf middle-right"
        alt="Middle-right jungle leaves"
        onClick={(e) => handleLeafClick(e)}
      />
      <img
        src="/amgk_simx_210722.png"
        className="leaf bottom-left"
        alt="Bottom-left jungle leaves"
        onClick={(e) => handleLeafClick(e)}
      />
      <img
        src="/leaves.png"
        className="leaf bottom-right"
        alt="Bottom-right jungle leaves"
        onClick={(e) => handleLeafClick(e)}
      />
    </div>
  );
};

export default JungleReveal;