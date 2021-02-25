import React from 'react';
import { connect } from 'react-redux';
import { GameStatusStateType } from '../../reducers/game-status-reducer';
import { RootStateType } from '../../reducers/rootReducer';
import { GAME_STATUS } from '../../utils/gameConstant';
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
  return (
    <header className="header">
      <MenuButton value={about} click={() => openPopup(about)} />
      {gameStatus === GAME_STATUS.play ? <div className="flag" /> : null}
      {gameStatus === GAME_STATUS.lose ? (
        <div className="lose">lose</div>
      ) : null}
      {gameStatus === GAME_STATUS.win ? <div className="win">win</div> : null}
      <MenuButton value={settings} click={() => openPopup(settings)} />
    </header>
  );
};

const mapStateToProps = (state: RootStateType) => ({
  ...state.gameStatus,
});

export default connect(mapStateToProps, null)(Header);
