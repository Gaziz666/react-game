import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GameStatusStateType } from '../../reducers/game-status-reducer';
import { RootStateType } from '../../reducers/rootReducer';
import { GAME_STATUS } from '../../utils/gameConstant';
import './header.css';

type Props = GameStatusStateType;

const Header: React.FC<Props> = ({ gameStatus }: Props) => (
  <header className="header">
    <Link className="header-button" to="/about">
      About
    </Link>
    {gameStatus === GAME_STATUS.play ? <div className="flag" /> : null}
    {gameStatus === GAME_STATUS.pause ? <div className="flag" /> : null}
    {gameStatus === GAME_STATUS.start ? <div className="flag" /> : null}
    {gameStatus === GAME_STATUS.lose ? <div className="lose">lose</div> : null}
    {gameStatus === GAME_STATUS.win ? <div className="win">win</div> : null}
    <Link className="header-button" to="/menu">
      Menu
    </Link>
  </header>
);

const mapStateToProps = (state: RootStateType) => ({
  ...state.gameStatus,
});

export default connect(mapStateToProps, null)(Header);
