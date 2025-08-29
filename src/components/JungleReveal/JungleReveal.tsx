import React from 'react';
import './JungleReveal.css'; 

const JungleReveal: React.FC = () => {
  return (
    <div className="jungle-container">
      <div className="content">
        <button
          className="reveal-button"
          onClick={() => alert('Button Clicked!')}
        >
          Enter The Jungle!
        </button>
      </div>

      <img
        src="/amgk_simx_210722.png"
        className="leaf top-left"
        alt="Top-left jungle leaves"
      />
      <img
        src="/leaves.png"
        className="leaf top-right"
        alt="Top-right jungle leaves"
      />
      <img
        src="/amgk_simx_210722.png"
        className="leaf bottom-left"
        alt="Bottom-left jungle leaves"
      />
      <img
        src="/leaves.png"
        className="leaf bottom-right"
        alt="Bottom-right jungle leaves"
      />
    </div>
  );
};

export default JungleReveal;