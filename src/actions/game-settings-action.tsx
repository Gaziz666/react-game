import { LEVEL_CHANGE, SIZE_CHANGE, TIMER_CHANGE } from './action-constant';

const levelChange = (value: string) => ({
  type: LEVEL_CHANGE,
  payload: value,
});

const sizeChange = (value: string) => ({
  type: SIZE_CHANGE,
  payload: value,
});

const timerChange = (value: string) => ({
  type: TIMER_CHANGE,
  payload: value,
});

export { levelChange, sizeChange, timerChange };

export type GameSettingsAction = { type: string; payload: string };
