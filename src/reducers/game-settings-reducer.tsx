import {
  LEVEL_CHANGE,
  SIZE_CHANGE,
  TIMER_CHANGE,
} from '../actions/action-constant';
import { GameSettingsAction } from '../actions/game-settings-action';

const initialState: GameSettingsStateType = {
  level: 'easy',
  size: 'small',
  timer: 'none',
};
export type LevelType = 'easy' | 'normal' | 'hard';

export type SizeType = 'small' | ' medium' | 'big';

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
