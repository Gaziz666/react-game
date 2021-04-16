import {
  GAME_BOMB_DEC,
  GAME_BOMB_INC,
  GAME_BOMB_START_COUNT,
  GAME_STOPWATCH_MIN_INC,
  GAME_STOPWATCH_SEC_INC,
  GAME_STOPWATCH_START,
  GAME_TIMER_MIN_DEC,
  GAME_TIMER_SEC_DEC,
  GAME_TIMER_START,
  GAME_TOKEN_CLICK,
  GAME_TOKEN_CLICK_START,
} from '../actions/action-constant';
import { GameCountActionType } from '../actions/game-count-actions';

export type GameCountStateType = {
  stepCount?: number;
  bombCount?: number;
  stopWatch?: {
    min: number;
    sec: number;
  };
  timerCounter?: {
    min: number;
    sec: number;
  };
};

const initialState: GameCountStateType = {
  stepCount: 0,
  bombCount: 0,
  stopWatch: {
    min: 0,
    sec: 0,
  },
  timerCounter: {
    min: 0,
    sec: 0,
  },
};

const gameCountReducer = (
  state: GameCountStateType = initialState,
  action: GameCountActionType,
) => {
  switch (action.type) {
    case GAME_TOKEN_CLICK:
      return { ...state, stepCount: state.stepCount ? state.stepCount + 1 : 1 };
    case GAME_TOKEN_CLICK_START:
      return { ...state, stepCount: 0 };
    case GAME_BOMB_START_COUNT:
      return { ...state, bombCount: action.payload };
    case GAME_BOMB_INC:
      return { ...state, bombCount: state.bombCount! + 1 };
    case GAME_BOMB_DEC:
      return { ...state, bombCount: state.bombCount! - 1 };
    case GAME_STOPWATCH_START:
      return { ...state, stopWatch: { min: 0, sec: 0 } };
    case GAME_STOPWATCH_MIN_INC:
      return {
        ...state,
        stopWatch: { min: state.stopWatch!.min + 1, sec: 0 },
      };
    case GAME_STOPWATCH_SEC_INC:
      return {
        ...state,
        stopWatch: { min: state.stopWatch!.min, sec: state.stopWatch!.sec + 1 },
      };
    case GAME_TIMER_START:
      return { ...state, timerCounter: { min: action.payload, sec: 0 } };
    case GAME_TIMER_MIN_DEC:
      return {
        ...state,
        timerCounter: { min: state.timerCounter!.min - 1, sec: 59 },
      };
    case GAME_TIMER_SEC_DEC:
      return {
        ...state,
        timerCounter: {
          min: state.timerCounter!.min,
          sec: state.timerCounter!.sec - 1,
        },
      };
    default:
      return state;
  }
};

export default gameCountReducer;
