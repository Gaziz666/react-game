import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainBody from '../pages/main-page/main-body/Main-body';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './main.css';
import StartPage from '../pages/start-page/Start-page';
import GamePage from '../pages/game-page/game-page';
import Statistic from '../pages/statistic-page/Statistic';
import AboutPage from '../pages/about-page/About-page';
import MenuPage from '../pages/menu-page/MenuPage';

const Main: React.FC = () => (
  <div className="main-container">
    <Router>
      <Header gameStatus="play" />
      <div className="page-wrapper">
        <Route path="/react-game" component={MainBody} exact />
        <Route path="/start" component={StartPage} />
        <Route path="/game" component={GamePage} />
        <Route path="/statistic" component={Statistic} />
        <Route path="/about" component={AboutPage} />
        <Route path="/menu" component={MenuPage} />
      </div>
    </Router>
    <Footer />
  </div>
);

export default Main;
