import { GAME_STATUS_CHANGE } from '../actions/action-constant';
import { GameStatusActionType } from '../actions/game-status-action';

export type GameStatusType = 'play' | 'lose' | 'win' | 'start';
export type GameStatusStateType = {
  gameStatus: GameStatusType;
};

const initialState: GameStatusStateType = {
  gameStatus: 'play',
};

const gameStatusReducer = (
  state: GameStatusStateType = initialState,
  action: GameStatusActionType,
) => {
  switch (action.type) {
    case GAME_STATUS_CHANGE:
      return { ...state, gameStatus: action.payload };
    default:
      return state;
  }
};

export default gameStatusReducer;
