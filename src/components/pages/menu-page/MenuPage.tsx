import React, { ChangeEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { SoundType } from '../../../reducers/soundReducer';
import * as soundActions from '../../../actions/actions';
import * as statusAction from '../../../actions/game-status-action';
import { MusicAction } from '../../../actions/actions';
import { AudioOff, AudioOn, Close } from '../../icons/Icons';
import './menuPage.css';
import { GAME_STATUS } from '../../../utils/gameConstant';
import { RootStateType } from '../../../reducers/rootReducer';
import musicUrl from '../../../assets/audio/music.mp3';
import { GameStatusStateType } from '../../../reducers/game-status-reducer';

type MapDispatchToPropsType = {
  soundMute: () => MusicAction;
  musicMute: () => MusicAction;
  soundUnMute: () => MusicAction;
  musicUnMute: () => MusicAction;
  // eslint-disable-next-line no-unused-vars
  gameStatusChange: (value: string) => statusAction.GameStatusActionType;
  // eslint-disable-next-line no-unused-vars
  musicVolumeChange: (value: number) => MusicAction;
  // eslint-disable-next-line no-unused-vars
  soundVolumeChange: (value: number) => MusicAction;
};

type Props = MapDispatchToPropsType & SoundType & GameStatusStateType;

const actions = { ...statusAction, ...soundActions };

const audioMusic = new Audio(musicUrl);
audioMusic.loop = true;

const MenuPage: React.FC<Props> = ({
  soundMute,
  musicMute,
  soundUnMute,
  musicUnMute,
  gameStatusChange,
  soundVolumeChange,
  musicVolumeChange,
  gameStatus,
  sounds,
  music,
}: Props) => {
  const history = useHistory();
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

  const goBack = () => {
    checkStatus();
    history.goBack();
  };

  const checkStatus = () => {
    if (gameStatus === GAME_STATUS.pause) {
      gameStatusChange(GAME_STATUS.play);
    } else {
      gameStatusChange(GAME_STATUS.start);
    }
  };

  useEffect(() => {
    if (music?.mute) {
      audioMusic.pause();
    } else {
      audioMusic.play();
    }
    audioMusic.volume = music!.volume;
  }, [music]);

  useEffect(() => {
    if (gameStatus === GAME_STATUS.play) {
      gameStatusChange(GAME_STATUS.pause);
    }
  }, []);

  return (
    <div className="menu-container">
      <h3 className="menu-text">menu</h3>
      <div className="list-wrapper">
        <ul className="list">
          <li className="list-item menu-text">
            <Link to="/react-game">main</Link>
          </li>
          <li className="list-item menu-text">
            <Link to="/statistic">statistics</Link>
          </li>
          <li
            className="list-item menu-text"
            onClick={checkStatus}
            aria-hidden="true"
          >
            <Link to="/game">resume</Link>
          </li>
          <li
            className="list-item menu-text"
            onClick={fullScreen}
            aria-hidden="true"
          >
            full screen
          </li>
          <li className="list-item menu-text">
            <Link to="/start">new game</Link>
          </li>
        </ul>
      </div>
      <div className="audio-wrapper">
        <div className="audio-button-container">
          <div className="menu-text margin-bottom">sound</div>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={sounds!.volume}
            // prettier-ignore
            onChange={
              (event: ChangeEvent<HTMLInputElement>) => soundVolumeChange(
                Number(event.target.value),
              )
            }
          />
          <div onClick={() => soundMute()} aria-hidden="true">
            {sounds!.mute ? null : <AudioOn width="24px" height="24px" />}
          </div>
          <div onClick={soundUnMute} aria-hidden="true">
            {sounds!.mute ? <AudioOff width="24px" height="24px" /> : null}
          </div>
        </div>
        <div className="audio-button-container">
          <div className="menu-text margin-bottom">music</div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={music!.volume}
            // prettier-ignore
            onChange={
              (event: ChangeEvent<HTMLInputElement>) => musicVolumeChange(
                Number(event.target.value),
              )
            }
          />
          <div onClick={musicMute} aria-hidden="true">
            {music!.mute ? null : <AudioOn width="24px" height="24px" />}
          </div>
          <div onClick={musicUnMute} aria-hidden="true">
            {music!.mute ? <AudioOff width="24px" height="24px" /> : null}
          </div>
        </div>
      </div>
      <div className="close-icon-wrapper" onClick={goBack} aria-hidden="true">
        <Close width="30px" height="30px" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => ({
  ...state.sounds,
  ...state.gameStatus,
});

export default connect(mapStateToProps, actions)(MenuPage);
