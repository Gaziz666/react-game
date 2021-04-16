import React from 'react';
import { Link } from 'react-router-dom';
import './play-button.css';

const PlayButton: React.FC<{ refTo: string; buttonName: string }> = ({
  refTo,
  buttonName,
}: {
  refTo: string;
  buttonName: string;
}) => (
  <Link to={refTo}>
    <button type="button" className="play-button">
      {buttonName}
    </button>
  </Link>
);

export default PlayButton;
