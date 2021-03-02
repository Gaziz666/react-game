import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SoundType } from '../../reducers/soundReducer';
import * as soundActions from '../../actions/actions';
import * as statusAction from '../../actions/game-status-action';
import { MusicAction } from '../../actions/actions';
import { AudioOff, AudioOn, Close } from '../icons/Icons';
import './settings-menu.css';
import { GAME_STATUS } from '../../utils/gameConstant';
import { RootStateType } from '../../reducers/rootReducer';
import musicUrl from '../../assets/audio/music.mp3';
import { GameStatusStateType } from '../../reducers/game-status-reducer';

type OwnProps = {
  closePopup: () => void;
};

type MapDispatchToPropsType = {
  soundMute: () => MusicAction;
  musicMute: () => MusicAction;
  soundUnMute: () => MusicAction;
  musicUnMute: () => MusicAction;
  // eslint-disable-next-line no-unused-vars
  gameStatusChange: (value: string) => statusAction.GameStatusActionType;
};

type Props = OwnProps &
  MapDispatchToPropsType &
  SoundType &
  GameStatusStateType;

const actions = { ...statusAction, ...soundActions };

const audioMusic = new Audio(musicUrl);
audioMusic.loop = true;

const SettingsMenu: React.FC<Props> = ({
  closePopup,
  soundMute,
  musicMute,
  soundUnMute,
  musicUnMute,
  gameStatusChange,
  gameStatus,
  sounds,
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

  useEffect(() => {
    if (music?.mute) {
      audioMusic.pause();
    } else {
      audioMusic.play();
    }
  }, [music]);

  useEffect(() => {
    if (gameStatus === GAME_STATUS.play) {
      gameStatusChange(GAME_STATUS.pause);
    }
    console.log(gameStatus);
  }, [gameStatus]);

  const newGameStart = () => {
    gameStatusChange(GAME_STATUS.play);
    closePopup();
  };

  const resumeGame = () => {
    if (gameStatus === GAME_STATUS.pause) {
      gameStatusChange(GAME_STATUS.play);
      console.log('resume pause');
    }
    closePopup();
  };

  return (
    <>
      <h3 className="menu-text">menu</h3>
      <div className="list-wrapper">
        <ul className="list">
          <li className="list-item menu-text">Best score</li>
          <li className="list-item menu-text">
            <Link to="/statistic" onClick={closePopup}>
              statistics
            </Link>
          </li>
          <li
            className="list-item menu-text"
            onClick={resumeGame}
            aria-hidden="true"
          >
            resume
          </li>
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
            {sounds!.mute ? null : <AudioOn width="24px" height="24px" />}
          </div>
          <div onClick={soundUnMute} aria-hidden="true">
            {sounds!.mute ? <AudioOff width="24px" height="24px" /> : null}
          </div>
        </div>
        <div className="audio-button-container">
          <div className="menu-text margin-bottom">music</div>
          <div onClick={musicMute} aria-hidden="true">
            {music!.mute ? null : <AudioOn width="24px" height="24px" />}
          </div>
          <div onClick={musicUnMute} aria-hidden="true">
            {music!.mute ? <AudioOff width="24px" height="24px" /> : null}
          </div>
        </div>
      </div>
      <div
        className="close-icon-wrapper"
        onClick={resumeGame}
        aria-hidden="true"
      >
        <Close width="30px" height="30px" />
      </div>
    </>
  );
};

const mapStateToProps = (state: RootStateType) => ({
  ...state.sounds,
  ...state.gameStatus,
});

export default connect(mapStateToProps, actions)(SettingsMenu);
