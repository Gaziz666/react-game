import React from 'react';
import { connect } from 'react-redux';
import './start-page.css';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as actions from '../../../actions/game-settings-action';
import {
  GameSettingsStateType,
  LevelType,
  SizeType,
  TimerType,
} from '../../../reducers/game-settings-reducer';
import { GameSettingsAction } from '../../../actions/game-settings-action';
import { RootStateType } from '../../../reducers/rootReducer';
import PlayButton from '../../play-button/play-button';

// prettier-ignore
const StartPage: React.FC<Props> = ({
  level,
  size,
  timer,
  levelChange,
  sizeChange,
  timerChange,
}: Props) => (
  <div className="start-page-wrapper">
    <div className="select-game">
      <h3>Select game settings</h3>
      <div className="select-wrapper">
        <FormControl variant="filled" className="select">
          <InputLabel htmlFor="filled-age-native-simple">Level</InputLabel>
          <Select
            native
            value={level}
            onChange={
              (ev: React.ChangeEvent<{value: unknown}>): GameSettingsAction => (
                levelChange(ev.target.value as LevelType)
              )
            }
          >
            <option value="1">easy</option>
            <option value="2">normal</option>
            <option value="3">hard</option>
          </Select>
        </FormControl>
      </div>
      <div className="select-wrapper">
        <FormControl variant="filled" className="select">
          <InputLabel htmlFor="filled-age-native-simple">Size</InputLabel>
          <Select
            native
            value={size}
            onChange={
              (ev: React.ChangeEvent<{value: unknown}>): GameSettingsAction => (
                sizeChange(ev.target.value as SizeType)
              )
            }
          >
            <option value="10">small</option>
            <option value="15">medium</option>
            <option value="20">big</option>
          </Select>
        </FormControl>
      </div>
      <div className="select-wrapper">
        <FormControl variant="filled" className="select">
          <InputLabel htmlFor="filled-age-native-simple">Timer</InputLabel>
          <Select
            native
            value={timer}
            onChange={
              (ev: React.ChangeEvent<{value: unknown}>): GameSettingsAction => (
                timerChange(ev.target.value as TimerType)
              )
            }
          >
            <option value="none">none</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </Select>
        </FormControl>
      </div>
    </div>
    <div className="start-game">
      <PlayButton refTo="/game" buttonName="start" />
    </div>
  </div>
);

type MapDispatchToPropsType = {
  // eslint-disable-next-line no-unused-vars
  levelChange: (value: LevelType) => GameSettingsAction;
  // eslint-disable-next-line no-unused-vars
  sizeChange: (value: SizeType) => GameSettingsAction;
  // eslint-disable-next-line no-unused-vars
  timerChange: (value: TimerType) => GameSettingsAction;
};

type Props = GameSettingsStateType & MapDispatchToPropsType;

const mapStateToProps = (state: RootStateType) => ({ ...state.gameSet });

export default connect(mapStateToProps, actions)(StartPage);
