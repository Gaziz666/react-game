import { GameSettingsStateType } from '../reducers/game-settings-reducer';

const createGame = ({ level, size, timer }: GameSettingsStateType) => {
  console.log(level, size, timer);
  type Element = {
    x: number;
    y: number;
  };

  type Row = typeof gameRow;

  let gameRow: Array<Element> = [];
  const gameArr: Array<Row> = [];

  const gameArrWithBomb: Array<Array<number>> = [];
  const row: Array<number> = [];
  const bombNumber = Number(size) * Number(level);

  for (let i = 0; i < Number(size); i += 1) {
    row[i] = 0;
  }

  for (let i = 0; i < Number(size); i += 1) {
    gameArrWithBomb.push([...row]);
  }

  for (let i = 0; i < bombNumber; i += 1) {
    const bombX = Math.floor(Math.random() * 10);
    const bombY = Math.floor(Math.random() * 10);

    if (gameArrWithBomb[bombX][bombY] === 0) {
      gameArrWithBomb[bombX][bombY] = 10;
    } else {
      i -= 1;
    }
  }

  for (let i = 0; i < Number(size); i += 1) {
    for (let j = 0; j < Number(size); j += 1) {
      if (gameArrWithBomb[i][j] !== 10) {
        let bombCount = 0;
        if (j !== Number(size) - 1) {
          if (gameArrWithBomb[i][j + 1] === 10) {
            bombCount += 1;
          }
          if (i > 0) {
            if (gameArrWithBomb[i - 1][j + 1] === 10) {
              bombCount += 1;
            }
          }
        }

        if (j > 0) {
          if (gameArrWithBomb[i][j - 1] === 10) {
            bombCount += 1;
          }
          if (i !== Number(size) - 1) {
            if (gameArrWithBomb[i + 1][j - 1] === 10) {
              bombCount += 1;
            }
          }
        }

        if (i !== Number(size) - 1) {
          if (gameArrWithBomb[i + 1][j] === 10) {
            bombCount += 1;
          }
          if (j !== Number(size) - 1) {
            if (gameArrWithBomb[i + 1][j + 1] === 10) {
              bombCount += 1;
            }
          }
        }

        if (i > 0) {
          if (gameArrWithBomb[i - 1][j] === 10) {
            bombCount += 1;
          }
          if (j > 0) {
            if (gameArrWithBomb[i - 1][j - 1] === 10) {
              bombCount += 1;
            }
          }
        }

        gameArrWithBomb[i][j] = bombCount;
      }
    }
  }

  for (let i = 0; i < Number(size); i += 1) {
    for (let j = 0; j < Number(size); j += 1) {
      if (gameArrWithBomb) gameRow.push({ x: i, y: j });
    }
    gameArr.push(gameRow);
    gameRow = [];
  }

  return { gameArr, gameArrWithBomb };
};

export default createGame;
