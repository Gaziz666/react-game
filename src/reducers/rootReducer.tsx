import { combineReducers } from 'redux';
import gameCountReducer, { GameCountStateType } from './game-count-reducer';
import gameSettingsReducer, {
  GameSettingsStateType,
} from './game-settings-reducer';
import gameStatisticReducer, {
  GameStatisticStateType,
} from './game-statistic-reducer';
import gameStatusReducer, { GameStatusStateType } from './game-status-reducer';
import gameTableReducer, { GameTableStateType } from './game-table-reducer';
import { soundReducer, SoundType } from './soundReducer';

const rootReducer = combineReducers({
  sounds: soundReducer,
  gameSet: gameSettingsReducer,
  gameTable: gameTableReducer,
  gameStatus: gameStatusReducer,
  gameCount: gameCountReducer,
  gameStat: gameStatisticReducer,
});

export default rootReducer;

export type RootStateType = {
  sounds: SoundType;
  gameSet: GameSettingsStateType;
  gameTable: GameTableStateType;
  gameStatus: GameStatusStateType;
  gameCount: GameCountStateType;
  gameStat: GameStatisticStateType;
};
