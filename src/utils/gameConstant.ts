import { GameStatusType } from '../reducers/game-status-reducer';

type status = {
  lose: GameStatusType;
  win: GameStatusType;
  play: GameStatusType;
};

const GAME_STATUS: status = {
  lose: 'lose',
  win: 'win',
  play: 'play',
};

const SOME_CONST = 0;

export { GAME_STATUS, SOME_CONST };
