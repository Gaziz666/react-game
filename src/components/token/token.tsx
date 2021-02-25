import React from 'react';
import { connect } from 'react-redux';
import { GameTableStateType } from '../../reducers/game-table-reducer';
import { RootStateType } from '../../reducers/rootReducer';
import { GameArrType } from '../../services/createGame';
import * as tableActions from '../../actions/game-table-actions';
import * as statusAction from '../../actions/game-status-action';
import './token.css';
import {
  GameStatusStateType,
  GameStatusType,
} from '../../reducers/game-status-reducer';
import { GAME_STATUS } from '../../utils/gameConstant';
import openZeroToken from './openZeroToken';
import { GameSettingsStateType } from '../../reducers/game-settings-reducer';

type OwnProps = {
  x: number;
  y: number;
  size: string;
};

type MapDispatchToPropsType = {
  // eslint-disable-next-line no-unused-vars
  gameStart: (value: GameArrType) => tableActions.GameTableType;
  gameStatusChange: (
    // eslint-disable-next-line no-unused-vars
    value: GameStatusType,
  ) => statusAction.GameStatusActionType;
  gameOpenCountInc: () => statusAction.GameStatusActionType;
};

type Props = GameTableStateType &
  GameStatusStateType &
  MapDispatchToPropsType &
  GameSettingsStateType &
  OwnProps;

const Token: React.FC<Props> = ({
  gameStartArr,
  gameStatus,
  openCount,
  gameStatusChange,
  gameStart,
  gameOpenCountInc,
  x,
  y,
  size,
  level,
}: Props) => {
  const tokenHandleClick = () => {
    // prettier-ignore
    if (
      gameStatus === GAME_STATUS.lose
      || gameStatus === GAME_STATUS.win
      || gameStartArr[x][y].flag
      || gameStartArr[x][y].open
    ) {
      return;
    }

    if (gameStartArr[x][y].back === 10) {
      gameStatusChange(GAME_STATUS.lose);
    }

    const newStateArr = [...gameStartArr];
    let clickCount = 0;
    newStateArr[x][y].open = true;

    if (gameStartArr[x][y].back === 0) {
      openZeroToken(newStateArr, x, y, Number(size));
    }

    gameOpenCountInc();
    console.log(level, openCount, clickCount);

    gameStart(newStateArr);

    newStateArr.forEach((itemArr) => {
      itemArr.forEach((item) => {
        if (item.open) {
          clickCount += 1;
        }
      });
    });

    const totalSize = Number(size) * Number(size);
    const bombCount = Number(size) * Number(level);
    if (totalSize - bombCount === clickCount) {
      gameStatusChange(GAME_STATUS.win);
    }
    console.log(level, openCount, clickCount);
  };

  const flagHandleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (
      // prettier-ignore
      gameStartArr[x][y].open
      || gameStatus === GAME_STATUS.lose
      || gameStatus === GAME_STATUS.win
    ) {
      return;
    }

    const newStateArr = [...gameStartArr];

    newStateArr[x][y].flag = !newStateArr[x][y].flag;
    gameStart(newStateArr);
  };

  const innerElement = () => {
    if (gameStartArr[x][y].back === 10) {
      return <div className="bomb" />;
    }
    if (gameStartArr[x][y].back !== 0) {
      return (
        <span className={`open${gameStartArr[x][y].back}`}>
          {gameStartArr[x][y].back}
        </span>
      );
    }
    return null;
  };

  return (
    <div
      className={
        gameStartArr[x][y].open
          ? `open-button token-${size}`
          : `button token-${size}`
      }
      aria-hidden="true"
      onClick={() => tokenHandleClick()}
      onContextMenu={(event) => flagHandleClick(event)}
    >
      {gameStartArr[x][y].open ? innerElement() : null}
      {gameStartArr[x][y].flag ? <div className="flag-click" /> : null}
    </div>
  );
};

const actions = { ...tableActions, ...statusAction };

const mapStateToProps = (state: RootStateType) => ({
  ...state.gameTable,
  ...state.gameStatus,
  ...state.gameSet,
});

export default connect(mapStateToProps, actions)(Token);
