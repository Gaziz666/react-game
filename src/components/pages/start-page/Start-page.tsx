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

// prettier-ignore
const StartPage: React.FC<Props> = ({
  level,
  size,
  timer,
  levelChange,
  sizeChange,
  timerChange,
}: Props) => (
  <div className="starr-page-wrapper">
    <FormControl variant="filled">
      <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
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
        <MenuItem value="easy">
          <em>Level</em>
        </MenuItem>
        <MenuItem value="easy">easy</MenuItem>
        <MenuItem value="normal">normal</MenuItem>
        <MenuItem value="hard">hard</MenuItem>
      </Select>
    </FormControl>
    <FormControl variant="filled">
      <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
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
        <MenuItem value="small">small</MenuItem>
        <MenuItem value="medium">medium</MenuItem>
        <MenuItem value="big">big</MenuItem>
      </Select>
    </FormControl>
    <FormControl variant="filled">
      <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
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
