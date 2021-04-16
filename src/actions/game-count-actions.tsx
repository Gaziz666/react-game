import {
  GAME_BOMB_DEC,
  GAME_BOMB_INC,
  GAME_BOMB_START_COUNT,
  GAME_STOPWATCH_MIN_INC,
  GAME_STOPWATCH_SEC_INC,
  GAME_STOPWATCH_START,
  GAME_TOKEN_CLICK,
  GAME_TOKEN_CLICK_START,
  GAME_TIMER_START,
  GAME_TIMER_MIN_DEC,
  GAME_TIMER_SEC_DEC,
} from './action-constant';

const gameStepCountInc = () => ({
  type: GAME_TOKEN_CLICK,
});

const gameStepCountStart = () => ({
  type: GAME_TOKEN_CLICK_START,
});

const gameBombCountInc = () => ({
  type: GAME_BOMB_INC,
});

const gameBombCountDec = () => ({
  type: GAME_BOMB_DEC,
});

const gameBombStartCount = (value: number) => ({
  type: GAME_BOMB_START_COUNT,
  payload: value,
});

const gameStopWatchStart = () => ({
  type: GAME_STOPWATCH_START,
});

const gameStopWatchMinInc = () => ({
  type: GAME_STOPWATCH_MIN_INC,
});

const gameStopWatchSecInc = () => ({
  type: GAME_STOPWATCH_SEC_INC,
});

const gameTimerStart = (value: number) => ({
  type: GAME_TIMER_START,
  payload: value,
});

const gameTimerMinDec = () => ({
  type: GAME_TIMER_MIN_DEC,
});

const gameTimerSecDec = () => ({
  type: GAME_TIMER_SEC_DEC,
});

export {
  gameStepCountInc,
  gameStepCountStart,
  gameBombCountInc,
  gameBombCountDec,
  gameBombStartCount,
  gameStopWatchStart,
  gameStopWatchMinInc,
  gameStopWatchSecInc,
  gameTimerStart,
  gameTimerMinDec,
  gameTimerSecDec,
};

export type GameCountActionType = { type: string; payload?: number };
