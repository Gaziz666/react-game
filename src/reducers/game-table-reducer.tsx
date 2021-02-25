import { GAME_START } from '../actions/action-constant';
import { GameTableType } from '../actions/game-table-actions';
import { GameArrType } from '../services/createGame';
// prettier-ignore
const initialState = {
  gameStartArr: [
    [
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
    ],
    [
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
    ],
    [
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
    ],
    [
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
    ],
    [
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
    ],
    [
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
    ],
    [
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
    ],
    [
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
    ],
    [
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
    ],
    [
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
      {
        x: 0, y: 0, back: 0, flag: false, open: false,
      },
    ],
  ],
};

export type GameTableStateType = { gameStartArr: GameArrType };

const gameTableReducer = (
  state: GameTableStateType = initialState,
  action: GameTableType,
) => {
  switch (action.type) {
    case GAME_START:
      return { ...state, gameStartArr: action.payload };
    default:
      return state;
  }
};

export default gameTableReducer;
