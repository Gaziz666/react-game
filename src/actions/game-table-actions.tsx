import { GameArrType } from '../services/createGame';
import { GAME_START } from './action-constant';

const gameStart = (value: GameArrType) => ({
  type: GAME_START,
  payload: value,
});

const gameChange = (value: GameArrType) => ({
  type: GAME_START,
  payload: value,
});

export { gameStart, gameChange };

export type GameTableType = { type: string; payload: GameArrType };
