import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GameSettingsStateType } from '../../../reducers/game-settings-reducer';
import { GameTableStateType } from '../../../reducers/game-table-reducer';
import { RootStateType } from '../../../reducers/rootReducer';
import Token from '../../token/token';
import * as actionsTable from '../../../actions/game-table-actions';
import * as actionStatus from '../../../actions/game-status-action';
import * as actionStat from '../../../actions/game-statistic-action';
import './game-page.css';
import { BombCountIcon, StepsIcon, TimerIcon } from '../../icons/Icons';
import Steps from '../../steps/Steps';
import BombCount from '../../bombCount/BombCount';
import Timer from '../../timer/Timer';
import {
  GameStatisticStateType,
  GameStatisticType,
} from '../../../reducers/game-statistic-reducer';
import { GameCountStateType } from '../../../reducers/game-count-reducer';
import { GAME_STATUS } from '../../../utils/gameConstant';
import { GameStatusStateType } from '../../../reducers/game-status-reducer';

type MapDispatchToProps = {
  gameStatisticAdd: (
    // eslint-disable-next-line no-unused-vars
    value: GameStatisticType[],
  ) => actionStat.GameStatisticActionType;
};

type Props = GameSettingsStateType &
  GameTableStateType &
  GameCountStateType &
  GameStatisticStateType &
  GameStatusStateType &
  MapDispatchToProps;

const GamePage: React.FC<Props> = ({
  level,
  size,
  timer,
  gameStartArr,
  gameStatus,
  statistics,
  stopWatch,
  stepCount,
  gameStatisticAdd,
}: Props) => {
  const style = {
    gridTemplateColumns: `repeat(${size}, 1fr)`,
    gridTemplateRows: `repeat(${size}, 1fr)`,
  };

  useEffect(() => {
    if (gameStatus === GAME_STATUS.lose || gameStatus === GAME_STATUS.win) {
      let levelType = 'easy';
      if (level === '2') {
        levelType = 'normal';
      } else if (level === '3') {
        levelType = 'hard';
      }

      let gameMin = '00';
      let gameSec = '00';
      if (stopWatch!.min < 10) {
        gameMin = `0${stopWatch!.min}`;
      } else {
        gameMin = stopWatch!.min.toString();
      }

      if (stopWatch!.sec < 10) {
        gameSec = `0${stopWatch?.sec}`;
      } else {
        gameSec = stopWatch!.sec.toString();
      }

      statistics?.push({
        id: statistics.length + 1,
        level: levelType,
        size: `${size} * ${size}`,
        timer: timer! === 'none' ? 'none' : `${timer} min`,
        gameStatus: gameStatus!,
        time: `${gameMin}:${gameSec}`,
        stepCount: stepCount!,
      });
      gameStatisticAdd(statistics);
    }
  }, [gameStatus!]);

  // prettier-ignore
  const renderGame = () => [...gameStartArr].flat().map((item, index) => {
    const key = index + 1;
    return (
      <Token
        x={item.x}
        y={item.y}
        key={key}
      />
    );
  });

  return (
    <>
      <div
        className="game-container"
        onContextMenu={(event) => event.preventDefault()}
      >
        <div className="game" style={style}>
          {renderGame()}
        </div>
        <div className="game-footer">
          <div className="status-container">
            <div className="status-info">
              <Steps />
            </div>
            <div className="status-icon">
              <StepsIcon width="44px" height="44px" />
            </div>
          </div>
          <div className="status-container">
            <div className="status-info">
              <BombCount />
            </div>
            <div className="status-icon">
              <BombCountIcon width="44px" height="44px" />
            </div>
          </div>
          <div className="status-container">
            <div className="status-info">
              <Timer />
            </div>
            <div className="status-icon">
              <TimerIcon width="42px" height="44px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootStateType) => ({
  ...state.gameSet,
  ...state.gameTable,
  ...state.gameCount,
  ...state.gameStat,
  ...state.gameStatus,
});

const actions = { ...actionStatus, ...actionsTable, ...actionStat };

export default connect(mapStateToProps, actions)(GamePage);
