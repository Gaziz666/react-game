import React from 'react';
import { connect } from 'react-redux';
import './start-page.css';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as actionsSet from '../../../actions/game-settings-action';
import * as actionStatus from '../../../actions/game-status-action';
import * as actionCount from '../../../actions/game-count-actions';
import * as actionTable from '../../../actions/game-table-actions';
import {
  GameSettingsStateType,
  LevelType,
  SizeType,
  TimerType,
} from '../../../reducers/game-settings-reducer';
import { GameSettingsAction } from '../../../actions/game-settings-action';
import { RootStateType } from '../../../reducers/rootReducer';
import PlayButton from '../../play-button/play-button';
import createGame, { GameArrType } from './createGame';
import { GAME_STATUS } from '../../../utils/gameConstant';

type MapDispatchToPropsType = {
  // eslint-disable-next-line no-unused-vars
  levelChange: (value: LevelType) => GameSettingsAction;
  // eslint-disable-next-line no-unused-vars
  sizeChange: (value: SizeType) => GameSettingsAction;
  // eslint-disable-next-line no-unused-vars
  timerChange: (value: TimerType) => GameSettingsAction;
  // eslint-disable-next-line no-unused-vars
  gameBombStartCount: (value: number) => actionCount.GameCountActionType;
  gameStepCountStart: () => actionCount.GameCountActionType;
  gameStopWatchStart: () => actionCount.GameCountActionType;
  // eslint-disable-next-line no-unused-vars
  gameTimerStart: (value: number) => actionCount.GameCountActionType;
  // eslint-disable-next-line no-unused-vars
  gameStart: (value: GameArrType) => actionTable.GameTableType;
  // eslint-disable-next-line no-unused-vars
  gameStatusChange: (value: string) => actionStatus.GameStatusActionType;
};

type Props = GameSettingsStateType & MapDispatchToPropsType;

const StartPage: React.FC<Props> = ({
  // prettier-ignore
  level,
  size,
  timer,
  levelChange,
  sizeChange,
  timerChange,
  gameBombStartCount,
  gameStepCountStart,
  gameStopWatchStart,
  gameTimerStart,
  gameStart,
  gameStatusChange,
}: Props) => {
  const handleStartGame = (): void => {
    gameBombStartCount(Number(level) * Number(size));
    gameStepCountStart();
    gameStopWatchStart();
    gameTimerStart(Number(timer));
    const { gameArr } = createGame({ level, size, timer });
    gameStart(gameArr);
    gameStatusChange(GAME_STATUS.play);
  };

  return (
    <div className="start-page-wrapper">
      <div className="select-game">
        <h3>Select game settings</h3>
        <div className="select-wrapper">
          <FormControl variant="filled" className="select">
            <InputLabel htmlFor="filled-age-native-simple">Level</InputLabel>
            <Select
              native
              value={level}
              // prettier-ignore
              onChange={(
                ev: React.ChangeEvent<{ value: unknown }>,
              ): GameSettingsAction => levelChange(ev.target.value as LevelType)}
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
              onChange={(
                ev: React.ChangeEvent<{ value: unknown }>,
              ): GameSettingsAction => sizeChange(ev.target.value as SizeType)}
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
              // prettier-ignore
              onChange={(
                ev: React.ChangeEvent<{ value: unknown }>,
              ): GameSettingsAction => timerChange(ev.target.value as TimerType)}
            >
              <option value="none">none</option>
              <option value="1">1 min</option>
              <option value="3">3 min</option>
              <option value="5">5 min</option>
            </Select>
          </FormControl>
        </div>
      </div>
      <div onClick={() => handleStartGame()} aria-hidden="true">
        <PlayButton refTo="/game" buttonName="start" />
      </div>
    </div>
  );
};

const actions = {
  ...actionStatus,
  ...actionsSet,
  ...actionCount,
  ...actionTable,
};

const mapStateToProps = (state: RootStateType) => ({ ...state.gameSet });

export default connect(mapStateToProps, actions)(StartPage);
