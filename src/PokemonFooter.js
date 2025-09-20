import React from 'react';
import './PokemonFooter.css';

const PokemonFooter = () => {
  return (
    <footer className="pokemon-footer">
      <div className="pokemon-footer-content">
        <div className="footer-section">
          <div className="trainer-info">
            <div className="pokeball-small bounce-small"></div>
            <span className="trainer-text">Coded by Martin - Pokemon Trainer & Developer</span>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="social-badges">
            <a href="https://github.com/mrmartin1998" target="_blank" rel="noopener noreferrer" className="badge-link github-badge">
              <span className="badge-emoji">🐙</span>
              <span className="badge-text">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="badge-link linkedin-badge">
              <span className="badge-emoji">💼</span>
              <span className="badge-text">LinkedIn</span>
            </a>
            <a href="mailto:your.email@example.com" className="badge-link email-badge">
              <span className="badge-emoji">📧</span>
              <span className="badge-text">Email</span>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="copyright-info">
            <p>© 2025 My First Pokemon App</p>
            <p className="subtitle">Gotta code 'em all! 🎮✨</p>
          </div>
        </div>
        
        <div className="pokemon-sprites">
          <span className="sprite float-sprite">🔴</span>
          <span className="sprite float-sprite delay-1">⚡</span>
          <span className="sprite float-sprite delay-2">🎮</span>
        </div>
      </div>
    </footer>
  );
};

export default PokemonFooter;