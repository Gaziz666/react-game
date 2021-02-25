import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import { SoundType } from '../../reducers/soundReducer';
import * as soundActions from '../../actions/actions';
import * as statusAction from '../../actions/game-status-action';
import { MusicAction } from '../../actions/actions';
import { AudioOff, AudioOn, Close } from '../icons/Icons';
import './settings-menu.css';
import { GAME_STATUS } from '../../utils/gameConstant';

type OwnProps = {
  closePopup: () => void;
};

type MapStateToPropsType = {
  sound: { mute: boolean };
  music: { mute: boolean };
};

type MapDispatchToPropsType = {
  soundMute: () => MusicAction;
  musicMute: () => MusicAction;
  soundUnMute: () => MusicAction;
  musicUnMute: () => MusicAction;
  // eslint-disable-next-line no-unused-vars
  gameStatusChange: (value: string) => statusAction.GameStatusActionType;
};

type Props = OwnProps & MapDispatchToPropsType & MapStateToPropsType;

const actions = { ...statusAction, ...soundActions };

const SettingsMenu: React.FC<Props> = ({
  closePopup,
  soundMute,
  musicMute,
  soundUnMute,
  musicUnMute,
  gameStatusChange,
  sound,
  music,
}: Props) => {
  const fullScreen = () => {
    const fullElement = document.querySelector('.app-wrapper');
    fullElement?.requestFullscreen();

    if (document.fullscreenEnabled) {
      document
        .exitFullscreen()
        .then(() => console.log('Document Exited from Full screen mode'))
        .catch((err) => console.error(err));
    }
  };

  const newGameStart = () => {
    gameStatusChange(GAME_STATUS.play);
    closePopup();
  };
  return (
    <>
      <h3 className="menu-text">menu</h3>
      <div className="list-wrapper">
        <ul className="list">
          <li className="list-item menu-text">Best score</li>
          <li className="list-item menu-text">statistics</li>
          <li className="list-item menu-text">resume</li>
          <li
            className="list-item menu-text"
            onClick={fullScreen}
            aria-hidden="true"
          >
            full screen
          </li>
          <li className="list-item menu-text">
            <Link to="/start" onClick={newGameStart}>
              new game
            </Link>
          </li>
        </ul>
      </div>
      <div className="audio-wrapper">
        <div className="audio-button-container">
          <div className="menu-text margin-bottom">sound</div>
          <div onClick={() => soundMute()} aria-hidden="true">
            {sound.mute ? null : <AudioOn width="24px" height="24px" />}
          </div>
          <div onClick={soundUnMute} aria-hidden="true">
            {sound.mute ? <AudioOff width="24px" height="24px" /> : null}
          </div>
        </div>
        <div className="audio-button-container">
          <div className="menu-text margin-bottom">music</div>
          <div onClick={musicMute} aria-hidden="true">
            {music.mute ? null : <AudioOn width="24px" height="24px" />}
          </div>
          <div onClick={musicUnMute} aria-hidden="true">
            {music.mute ? <AudioOff width="24px" height="24px" /> : null}
          </div>
        </div>
      </div>
      <div
        className="close-icon-wrapper"
        onClick={() => closePopup()}
        aria-hidden="true"
      >
        <Close width="30px" height="30px" />
      </div>
    </>
  );
};

type soundState = {
  sounds: SoundType;
};

const mapStateToProps = ({ sounds }: soundState): MapStateToPropsType => sounds;
// prettier-ignore
// const mapDispatchToProps = (
//   dispatch: Dispatch<MusicAction>,
// ): MapDispatchToPropsType => {
//   const {
//     soundMute,
//     musicMute,
//     soundUnMute,
//     musicUnMute,
//   } = bindActionCreators(
//     actions,
//     dispatch,
//   );
//   return {
//     soundMute,
//     musicMute,
//     soundUnMute,
//     musicUnMute,
//   };
// };

export default connect(mapStateToProps, actions)(SettingsMenu);
