import { GameArrType } from '../../services/createGame';

const openZeroToken = (
  stateArr: GameArrType,
  x: number,
  y: number,
  size: number,
) => {
  const newStateArr = [...stateArr];

  if (!isEndSide(x, size)) {
    if (newStateArr[x + 1][y].back === 0 && !newStateArr[x + 1][y].open) {
      newStateArr[x + 1][y].open = true;
      openZeroToken(stateArr, x + 1, y, size);
    }
    newStateArr[x + 1][y].open = true;
  }

  if (!isStartSide(x)) {
    if (newStateArr[x - 1][y].back === 0 && !newStateArr[x - 1][y].open) {
      newStateArr[x - 1][y].open = true;
      openZeroToken(stateArr, x - 1, y, size);
    }
    newStateArr[x - 1][y].open = true;
  }

  if (!isEndSide(y, size)) {
    if (newStateArr[x][y + 1].back === 0 && !newStateArr[x][y + 1].open) {
      newStateArr[x][y + 1].open = true;
      openZeroToken(stateArr, x, y + 1, size);
    }
    newStateArr[x][y + 1].open = true;
  }

  if (!isStartSide(y)) {
    if (newStateArr[x][y - 1].back === 0 && !newStateArr[x][y - 1].open) {
      newStateArr[x][y - 1].open = true;
      openZeroToken(stateArr, x, y - 1, size);
    }
    newStateArr[x][y - 1].open = true;
  }

  if (!isStartSide(x) && !isEndSide(y, size)) {
    if (
      // prettier-ignore
      newStateArr[x - 1][y + 1].back === 0
      && !newStateArr[x - 1][y + 1].open
    ) {
      newStateArr[x - 1][y + 1].open = true;
      openZeroToken(stateArr, x - 1, y + 1, size);
    }
    newStateArr[x - 1][y + 1].open = true;
  }

  if (!isEndSide(x, size) && !isEndSide(y, size)) {
    if (
      // prettier-ignore
      newStateArr[x + 1][y + 1].back === 0
      && !newStateArr[x + 1][y + 1].open
    ) {
      newStateArr[x + 1][y + 1].open = true;
      openZeroToken(stateArr, x + 1, y + 1, size);
    }
    newStateArr[x + 1][y + 1].open = true;
  }

  if (!isStartSide(x) && !isStartSide(y)) {
    if (
      // prettier-ignore
      newStateArr[x - 1][y - 1].back === 0
      && !newStateArr[x - 1][y - 1].open
    ) {
      newStateArr[x - 1][y - 1].open = true;
      openZeroToken(stateArr, x - 1, y - 1, size);
    }
    newStateArr[x - 1][y - 1].open = true;
  }

  if (!isEndSide(x, size) && !isStartSide(y)) {
    if (
      // prettier-ignore
      newStateArr[x + 1][y - 1].back === 0
      && !newStateArr[x + 1][y - 1].open
    ) {
      newStateArr[x + 1][y - 1].open = true;
      openZeroToken(stateArr, x + 1, y - 1, size);
    }
    newStateArr[x + 1][y - 1].open = true;
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
