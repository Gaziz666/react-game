import {
  GAME_STATUS_CHANGE,
  GAME_TOKEN_CLICK,
} from '../actions/action-constant';
import { GameStatusActionType } from '../actions/game-status-action';

export type GameStatusType = 'play' | 'lose' | 'win' | 'start';
export type GameStatusStateType = {
  gameStatus: GameStatusType;
  openCount?: number;
};

const initialState: GameStatusStateType = {
  gameStatus: 'play',
  openCount: 0,
};

const gameStatusReducer = (
  state: GameStatusStateType = initialState,
  action: GameStatusActionType,
) => {
  switch (action.type) {
    case GAME_STATUS_CHANGE:
      return { ...state, gameStatus: action.payload };
    case GAME_TOKEN_CLICK:
      return { ...state, openCount: state.openCount ? state.openCount + 1 : 1 };
    default:
      return state;
  }
};

export default gameStatusReducer;
