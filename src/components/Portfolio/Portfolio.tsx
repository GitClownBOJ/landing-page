import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    // Limit the parallax offset to create a subtle effect
    setOffsetX(Math.max(Math.min(deltaX * 0.05, 30), -30));
    setOffsetY(Math.max(Math.min(deltaY * 0.05, 30), -30));
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    // Smoothly return to center
    const interval = setInterval(() => {
      setOffsetX((prev) => {
        const newVal = prev * 0.9;
        return Math.abs(newVal) < 0.5 ? 0 : newVal;
      });
      setOffsetY((prev) => {
        const newVal = prev * 0.9;
        return Math.abs(newVal) < 0.5 ? 0 : newVal;
      });
    }, 16);

    setTimeout(() => clearInterval(interval), 500);
  };

  useEffect(() => {
    if (isMouseDown) {
      document.addEventListener('mousemove', handleMouseMove as any);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove as any);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMouseDown, startX, startY]);

  return (
    <div
      ref={containerRef}
      className="portfolio-container"
      onMouseDown={handleMouseDown}
      style={{ perspective: '1000px', cursor: isMouseDown ? 'grabbing' : 'grab' }}
    >
      <div
        className="portfolio-background"
        style={{
          transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotateX(${
            offsetY * 0.05
          }deg) rotateY(${offsetX * -0.05}deg)`,
        }}
      />

      <div className="portfolio-fog" />

      <div className="portfolio-content-wrapper">
        <Link to="/" className="back-button">
          ← Back to landing page
        </Link>
        
        <div className="portfolio-hero">
          <div className="hero-content">
            <h1>Inka Parviainen</h1>
            <p className="subtitle">Also know as IP, infra-inka or "Bit by Bit"</p>
            <a href="https://github.com/GitClownBOJ" target="_blank" rel="noopener noreferrer" className="github-link">
              <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="portfolio-content">
          <section className="portfolio-section">
            <h2>I am a web developer</h2>
            <p>Passionate about creative website designs, both traditional and modern</p>
          </section>

          <section className="portfolio-section">
            <h3>Projects</h3>
            <div className="projects-grid">
              <div className="project-card">
                <h4>WordPress</h4>
                <p>Small business websites with private hosting. Get a timeless, easily modifiable website with a customized theme.</p>
              </div>
              <div className="project-card">
                <h4>React & TS</h4>
                <p>Modern web applications, mobile-first UI. Scalable and safe solutions using React and TypeScript.
                </p>
              </div>
              <div className="project-card">
                <h4>Traditional web hotel</h4>
                <p>Super light websites with traditional web technologies. Fully customizable coded site with HTML/CSS/JS.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
