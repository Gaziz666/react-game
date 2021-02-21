import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainBody from '../pages/main-page/main-body/Main-body';
import Popup from '../popup/Popup';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import './main.css';
import StartPage from '../pages/start-page/Start-page';

const Main: React.FC = () => {
  const [about, setAbout] = useState({ open: false });
  const [settings, setSettings] = useState({ open: false });
  const popupType = { about: 'About', settings: 'Menu' };
  const open = { open: true };

  const closeAbout = () => {
    setAbout({ open: false });
  };

  const closeSettings = () => {
    setSettings({ open: false });
  };

  const openPopup = (type: string) => {
    switch (type) {
      case popupType.about:
        setAbout(open);
        break;
      case popupType.settings:
        setSettings(open);
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-container">
      <Header openPopup={openPopup} />
      <div className="page-wrapper">
        <Router>
          <Route path="/" component={MainBody} exact />
          <Route path="/start" component={StartPage} />
        </Router>
      </div>

      {about.open ? <Popup closePopup={closeAbout} type="about" /> : null}
      {settings.open ? (
        <Popup closePopup={closeSettings} type="settings" />
      ) : null}
      <Footer />
    </div>
  );
};

export default Main;