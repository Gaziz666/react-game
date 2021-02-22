import React from 'react';
import PlayButton from '../../../play-button/play-button';
import './main-footer.css';

const MainFooter: React.FC = () => (
  <div className="main-footer">
    <PlayButton refTo="/start" buttonName="play" />
  </div>
);

export default MainFooter;
