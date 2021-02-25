import { combineReducers } from 'redux';
import gameSettingsReducer, {
  GameSettingsStateType,
} from './game-settings-reducer';
import gameStatusReducer, { GameStatusStateType } from './game-status-reducer';
import gameTableReducer, { GameTableStateType } from './game-table-reducer';
import { soundReducer, SoundType } from './soundReducer';

const rootReducer = combineReducers({
  sounds: soundReducer,
  gameSet: gameSettingsReducer,
  gameTable: gameTableReducer,
  gameStatus: gameStatusReducer,
});

export default rootReducer;

export type RootStateType = {
  sounds: SoundType;
  gameSet: GameSettingsStateType;
  gameTable: GameTableStateType;
  gameStatus: GameStatusStateType;
};
