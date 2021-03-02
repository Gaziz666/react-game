import { GAME_STATISTIC_ADD } from '../actions/action-constant';
import { GameStatisticActionType } from '../actions/game-statistic-action';
import { GameStatusType } from './game-status-reducer';

export type GameStatisticType = {
  id: number;
  level: string;
  size: string;
  timer: string;
  gameStatus: GameStatusType;
  time: string;
  stepCount: number;
};

export type GameStatisticStateType = {
  statistics: Array<GameStatisticType>;
};

const initialState: GameStatisticStateType = {
  statistics: [],
};

const gameStatisticReducer = (
  state: GameStatisticStateType = initialState,
  action: GameStatisticActionType,
) => {
  switch (action.type) {
    case GAME_STATISTIC_ADD:
      console.log(action.payload, state);
      return { ...state, statistics: action.payload };
    default:
      return state;
  }
};

export default gameStatisticReducer;
