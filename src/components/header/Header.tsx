import React from 'react';
import { connect } from 'react-redux';
import { GameStatusStateType } from '../../reducers/game-status-reducer';
import { RootStateType } from '../../reducers/rootReducer';
import MenuButton from '../menu-button/Menu-button';
import './header.css';

type HeaderProps = {
  // eslint-disable-next-line no-unused-vars
  openPopup: (type: string) => void;
};

type Props = GameStatusStateType & HeaderProps;

const Header: React.FC<Props> = ({ gameStatus, openPopup }: Props) => {
  const about = 'About';
  const settings = 'Menu';
  console.log(gameStatus);
  return (
    <header className="header">
      <MenuButton value={about} click={() => openPopup(about)} />
      {gameStatus === 'play' ? <div className="flag" /> : null}
      {gameStatus === 'lose' ? <div className="lose">lose</div> : null}
      <MenuButton value={settings} click={() => openPopup(settings)} />
    </header>
  );
};

const mapStateToProps = (state: RootStateType) => ({
  ...state.gameStatus,
});

export default connect(mapStateToProps, null)(Header);
