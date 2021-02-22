import {
  LEVEL_CHANGE,
  SIZE_CHANGE,
  TIMER_CHANGE,
} from '../actions/action-constant';
import { GameSettingsAction } from '../actions/game-settings-action';

const initialState: GameSettingsStateType = {
  level: '1',
  size: '10',
  timer: 'none',
};
export type LevelType = '1' | '2' | '3';

export type SizeType = '10' | '15' | '20';

export type TimerType = 'none' | '5' | '10' | '15';

export type GameSettingsStateType = {
  level: LevelType;
  size: SizeType;
  timer: TimerType;
};

const gameSettingsReducer = (
  state: GameSettingsStateType = initialState,
  action: GameSettingsAction,
) => {
  switch (action.type) {
    case LEVEL_CHANGE:
      return { ...state, level: action.payload };
    case SIZE_CHANGE:
      return { ...state, size: action.payload };
    case TIMER_CHANGE:
      return { ...state, timer: action.payload };
    default:
      return state;
  }
};

export default gameSettingsReducer;
