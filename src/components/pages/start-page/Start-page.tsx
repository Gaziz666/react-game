import React from 'react';
import { connect } from 'react-redux';
import './start-page.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
          <InputLabel id="demo-simple-select-filled-label">Level</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={level}
            onChange={
              (ev: React.ChangeEvent<{value: unknown}>): GameSettingsAction => (
                levelChange(ev.target.value as LevelType)
              )
            }
          >
            <MenuItem value="1">
              <em>Level</em>
            </MenuItem>
            <MenuItem value="1">easy</MenuItem>
            <MenuItem value="2">normal</MenuItem>
            <MenuItem value="3">hard</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="select-wrapper">
        <FormControl variant="filled" className="select">
          <InputLabel id="demo-simple-select-filled-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={size}
            onChange={
              (ev: React.ChangeEvent<{value: unknown}>): GameSettingsAction => (
                sizeChange(ev.target.value as SizeType)
              )
            }
          >
            <MenuItem value="small">
              <em>Size</em>
            </MenuItem>
            <MenuItem value="10">small</MenuItem>
            <MenuItem value="15">medium</MenuItem>
            <MenuItem value="20">big</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="select-wrapper">
        <FormControl variant="filled" className="select">
          <InputLabel id="demo-simple-select-filled-label">Timer</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={timer}
            onChange={
              (ev: React.ChangeEvent<{value: unknown}>): GameSettingsAction => (
                timerChange(ev.target.value as TimerType)
              )
            }
          >
            <MenuItem value="none">
              <em>Timer</em>
            </MenuItem>
            <MenuItem value="none">none</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="15">15</MenuItem>
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
