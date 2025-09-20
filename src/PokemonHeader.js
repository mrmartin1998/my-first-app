import React from 'react';
import './PokemonHeader.css';

const PokemonHeader = () => {
  return (
    <header className="pokemon-header">
      <div className="pokemon-header-content">
        <div className="pokeball-container">
          <div className="pokeball bounce"></div>
        </div>
        <h1 className="welcome-message">
          ⚡ Welcome to Pokemon World! 🔴
        </h1>
        <p className="subtitle">
          Gotta code 'em all! 🎮✨
        </p>
        <div className="pokemon-emojis">
          <span className="pokemon-emoji float">🔴</span>
          <span className="pokemon-emoji float delay-1">⚡</span>
          <span className="pokemon-emoji float delay-2">🎮</span>
        </div>
      </div>
    </header>
  );
};

export default PokemonHeader;