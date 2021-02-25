import { GAME_STATUS_CHANGE } from './action-constant';

const gameStatusChange = (value: string) => ({
  type: GAME_STATUS_CHANGE,
  payload: value,
});

export { gameStatusChange };

export type GameStatusActionType = { type: string; payload: string };
