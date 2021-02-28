import React from 'react';
import { connect } from 'react-redux';
import { GameTableStateType } from '../../reducers/game-table-reducer';
import { RootStateType } from '../../reducers/rootReducer';
import { GameArrType } from '../pages/start-page/createGame';
import * as tableActions from '../../actions/game-table-actions';
import * as statusAction from '../../actions/game-status-action';
import * as countAction from '../../actions/game-count-actions';
import './token.css';
import {
  GameStatusStateType,
  GameStatusType,
} from '../../reducers/game-status-reducer';
import { GAME_STATUS } from '../../utils/gameConstant';
import openZeroToken from './openZeroToken';
import { GameSettingsStateType } from '../../reducers/game-settings-reducer';
import { GameCountStateType } from '../../reducers/game-count-reducer';
import { SoundType } from '../../reducers/soundReducer';
import bombUrl from '../../assets/audio/bomb.mp3';
import winUrl from '../../assets/audio/win.mp3';
import clickUrl from '../../assets/audio/click.mp3';

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
  gameStepCountInc: () => countAction.GameCountActionType;
  gameBombCountInc: () => countAction.GameCountActionType;
  gameBombCountDec: () => countAction.GameCountActionType;
  // eslint-disable-next-line no-unused-vars
  gameBombStartCount: (value: number) => statusAction.GameStatusActionType;
};

type Props = GameTableStateType &
  GameStatusStateType &
  GameCountStateType &
  SoundType &
  MapDispatchToPropsType &
  GameSettingsStateType &
  OwnProps;

const clickAudio = new Audio(clickUrl);
const winAudio = new Audio(winUrl);
const loseAudio = new Audio(bombUrl);

const Token: React.FC<Props> = ({
  gameStartArr,
  gameStatus,
  sounds,
  gameStatusChange,
  gameStart,
  gameStepCountInc,
  gameBombCountInc,
  gameBombCountDec,
  gameBombStartCount,
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

    if (!sounds?.mute) {
      clickAudio.play();
    }

    if (gameStartArr[x][y].back === 10) {
      gameStatusChange(GAME_STATUS.lose);
      if (!sounds?.mute) {
        loseAudio.play();
      }
    }

    const newStateArr = [...gameStartArr];
    let clickCount = 0;
    newStateArr[x][y].open = true;

    if (gameStartArr[x][y].back === 0) {
      openZeroToken(newStateArr, x, y, Number(size), gameBombCountInc);
    }

    gameStepCountInc();
    gameStart(newStateArr);

    newStateArr.forEach((itemArr) => {
      itemArr.forEach((item) => {
        if (item.open) {
          clickCount += 1;
        }
      });
    });

    const totalSize = Number(size) * Number(size);
    const bombCountTotal = Number(size) * Number(level);

    if (totalSize - bombCountTotal === clickCount) {
      if (!sounds?.mute) {
        winAudio.play();
      }
      gameStatusChange(GAME_STATUS.win);
      gameBombStartCount(0);
      // prettier-ignore
      gameStart(newStateArr.map((itemArr) => itemArr.map((item) => {
        if (!item.open) {
          return { ...item, flag: true };
        }
        return item;
      })));
    }
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

    if (newStateArr[x][y].flag) {
      gameBombCountDec();
    } else {
      gameBombCountInc();
    }

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

const actions = { ...tableActions, ...statusAction, ...countAction };

const mapStateToProps = (state: RootStateType) => ({
  ...state.gameTable,
  ...state.gameStatus,
  ...state.gameSet,
  ...state.gameCount,
  ...state.sounds,
});

export default connect(mapStateToProps, actions)(Token);
