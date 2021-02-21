import { combineReducers } from 'redux';
import gameSettingsReducer, {
  GameSettingsStateType,
} from './game-settings-reducer';
import { soundReducer, SoundType } from './soundReducer';

const rootReducer = combineReducers({
  sounds: soundReducer,
  gameSet: gameSettingsReducer,
});

export default rootReducer;

export type RootStateType = {
  sounds: SoundType;
  gameSet: GameSettingsStateType;
};
