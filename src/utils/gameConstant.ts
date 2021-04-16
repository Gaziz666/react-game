import { GameStatusType } from '../reducers/game-status-reducer';

type status = {
  lose: GameStatusType;
  win: GameStatusType;
  play: GameStatusType;
  start: GameStatusType;
  pause: GameStatusType;
};

const GAME_STATUS: status = {
  lose: 'lose',
  win: 'win',
  play: 'play',
  start: 'start',
  pause: 'pause',
};

const SOME_CONST = 1;

export { GAME_STATUS, SOME_CONST };
