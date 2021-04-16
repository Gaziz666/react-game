import { GameStatusType } from '../reducers/game-status-reducer';

import { GAME_STATISTIC_ADD } from './action-constant';

const gameStatisticAdd = (value: GameStatisticType[]) => ({
  type: GAME_STATISTIC_ADD,
  payload: value,
});

export { gameStatisticAdd };

export type GameStatisticActionType = {
  type: string;
  payload: GameStatisticType[];
};

type GameStatisticType = {
  id: number;
  level: string;
  size: string;
  timer: string;
  gameStatus: GameStatusType;
  time: string;
  stepCount: number;
};
