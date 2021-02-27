import { GameStatusActionType } from '../../actions/game-status-action';
import { GameArrType } from '../../services/createGame';

const openZeroToken = (
  stateArr: GameArrType,
  x: number,
  y: number,
  size: number,
  gameBombCountInc: () => GameStatusActionType,
) => {
  const newStateArr = [...stateArr];

  if (!isEndSide(x, size)) {
    if (newStateArr[x + 1][y].back === 0 && !newStateArr[x + 1][y].open) {
      newStateArr[x + 1][y].open = true;
      openZeroToken(stateArr, x + 1, y, size, gameBombCountInc);
    }
    newStateArr[x + 1][y].open = true;
    if (newStateArr[x + 1][y].flag) {
      newStateArr[x + 1][y].flag = false;
      gameBombCountInc();
    }
  }

  if (!isStartSide(x)) {
    if (newStateArr[x - 1][y].back === 0 && !newStateArr[x - 1][y].open) {
      newStateArr[x - 1][y].open = true;
      openZeroToken(stateArr, x - 1, y, size, gameBombCountInc);
    }
    newStateArr[x - 1][y].open = true;
    if (newStateArr[x - 1][y].flag) {
      newStateArr[x - 1][y].flag = false;
      gameBombCountInc();
    }
  }

  if (!isEndSide(y, size)) {
    if (newStateArr[x][y + 1].back === 0 && !newStateArr[x][y + 1].open) {
      newStateArr[x][y + 1].open = true;
      openZeroToken(stateArr, x, y + 1, size, gameBombCountInc);
    }
    newStateArr[x][y + 1].open = true;
    if (newStateArr[x][y + 1].flag) {
      newStateArr[x][y + 1].flag = false;
      gameBombCountInc();
    }
  }

  if (!isStartSide(y)) {
    if (newStateArr[x][y - 1].back === 0 && !newStateArr[x][y - 1].open) {
      newStateArr[x][y - 1].open = true;
      openZeroToken(stateArr, x, y - 1, size, gameBombCountInc);
    }
    newStateArr[x][y - 1].open = true;
    if (newStateArr[x][y - 1].flag) {
      newStateArr[x][y - 1].flag = false;
      gameBombCountInc();
    }
  }

  if (!isStartSide(x) && !isEndSide(y, size)) {
    if (
      // prettier-ignore
      newStateArr[x - 1][y + 1].back === 0
      && !newStateArr[x - 1][y + 1].open
    ) {
      newStateArr[x - 1][y + 1].open = true;
      openZeroToken(stateArr, x - 1, y + 1, size, gameBombCountInc);
    }
    newStateArr[x - 1][y + 1].open = true;
    if (newStateArr[x - 1][y + 1].flag) {
      newStateArr[x - 1][y + 1].flag = false;
      gameBombCountInc();
    }
  }

  if (!isEndSide(x, size) && !isEndSide(y, size)) {
    if (
      // prettier-ignore
      newStateArr[x + 1][y + 1].back === 0
      && !newStateArr[x + 1][y + 1].open
    ) {
      newStateArr[x + 1][y + 1].open = true;
      openZeroToken(stateArr, x + 1, y + 1, size, gameBombCountInc);
    }
    newStateArr[x + 1][y + 1].open = true;
    if (newStateArr[x + 1][y + 1].flag) {
      newStateArr[x + 1][y + 1].flag = false;
      gameBombCountInc();
    }
  }

  if (!isStartSide(x) && !isStartSide(y)) {
    if (
      // prettier-ignore
      newStateArr[x - 1][y - 1].back === 0
      && !newStateArr[x - 1][y - 1].open
    ) {
      newStateArr[x - 1][y - 1].open = true;
      openZeroToken(stateArr, x - 1, y - 1, size, gameBombCountInc);
    }
    newStateArr[x - 1][y - 1].open = true;
    if (newStateArr[x - 1][y - 1].flag) {
      newStateArr[x - 1][y - 1].flag = false;
      gameBombCountInc();
    }
  }

  if (!isEndSide(x, size) && !isStartSide(y)) {
    if (
      // prettier-ignore
      newStateArr[x + 1][y - 1].back === 0
      && !newStateArr[x + 1][y - 1].open
    ) {
      newStateArr[x + 1][y - 1].open = true;
      openZeroToken(stateArr, x + 1, y - 1, size, gameBombCountInc);
    }
    newStateArr[x + 1][y - 1].open = true;
    if (newStateArr[x + 1][y - 1].flag) {
      newStateArr[x + 1][y - 1].flag = false;
      gameBombCountInc();
    }
  }
};

const isEndSide = (side: number, size: number): boolean => {
  if (side === size - 1) {
    return true;
  }
  return false;
};

const isStartSide = (side: number): boolean => {
  if (side === 0) {
    return true;
  }
  return false;
};

export default openZeroToken;
