import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { SoundType } from '../../reducers/soundReducer';
import * as actions from '../../actions/actions';
import { MusicAction } from '../../actions/actions';

import { AudioOff, AudioOn, Close } from '../icons/Icons';
import './settings-menu.css';

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
};

type Props = OwnProps & MapDispatchToPropsType & MapStateToPropsType;

const SettingsMenu: React.FC<Props> = ({
  closePopup,
  soundMute,
  musicMute,
  soundUnMute,
  musicUnMute,
  sound,
  music,
}: Props) => (
  <>
    <h3 className="menu-text">menu</h3>
    <div className="list-wrapper">
      <ul className="list">
        <li className="list-item menu-text">Best score</li>
        <li className="list-item menu-text">statistics</li>
        <li className="list-item menu-text">resume</li>
        <li className="list-item menu-text">new game</li>
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

type soundState = {
  sounds: SoundType;
};

const mapStateToProps = ({ sounds }: soundState): MapStateToPropsType => sounds;
// prettier-ignore
const mapDispatchToProps = (
  dispatch: Dispatch<MusicAction>,
): MapDispatchToPropsType => {
  const {
    soundMute,
    musicMute,
    soundUnMute,
    musicUnMute,
  } = bindActionCreators(
    actions,
    dispatch,
  );
  return {
    soundMute,
    musicMute,
    soundUnMute,
    musicUnMute,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenu);
