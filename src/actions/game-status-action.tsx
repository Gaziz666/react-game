import { GAME_STATUS_CHANGE, GAME_TOKEN_CLICK } from './action-constant';

const gameStatusChange = (value: string) => ({
  type: GAME_STATUS_CHANGE,
  payload: value,
});

const gameOpenCountInc = () => ({
  type: GAME_TOKEN_CLICK,
});

export { gameStatusChange, gameOpenCountInc };

export type GameStatusActionType = { type: string; payload?: string };
