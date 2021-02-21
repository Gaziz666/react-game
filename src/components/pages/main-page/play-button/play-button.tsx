import React from 'react';
import { Link } from 'react-router-dom';
import './play-button.css';

const PlayButton: React.FC = () => (
  <Link to="/start">
    <button type="button" className="play-button">
      play
    </button>
  </Link>
);

export default PlayButton;
