import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../reducers/rootReducer';
import * as countActions from '../../actions/game-count-actions';
import * as statusAction from '../../actions/game-status-action';
import { GameCountStateType } from '../../reducers/game-count-reducer';
import './timer.css';
import { GameStatusStateType } from '../../reducers/game-status-reducer';
import { GAME_STATUS } from '../../utils/gameConstant';
import { GameSettingsStateType } from '../../reducers/game-settings-reducer';

type MapDispatchToPropsType = {
  gameStopWatchMinInc: () => countActions.GameCountActionType;
  gameStopWatchSecInc: () => countActions.GameCountActionType;
  gameTimerMinDec: () => countActions.GameCountActionType;
  gameTimerSecDec: () => countActions.GameCountActionType;
  // eslint-disable-next-line no-unused-vars
  gameStatusChange: (value: string) => statusAction.GameStatusActionType;
};

type Props = MapDispatchToPropsType &
  GameCountStateType &
  GameStatusStateType &
  GameSettingsStateType;

const Timer: React.FC<Props> = ({
  stopWatch,
  gameStatus,
  timer,
  timerCounter,
  gameStopWatchMinInc,
  gameStopWatchSecInc,
  gameTimerMinDec,
  gameTimerSecDec,
  gameStatusChange,
}: Props) => {
  const stopWatchRun = () => {
    if (stopWatch!.sec < 59) {
      gameStopWatchSecInc();
    } else {
      gameStopWatchMinInc();
    }
  };

  const timerRun = () => {
    if (timer !== 'none' && gameStatus === GAME_STATUS.play) {
      if (timerCounter!.sec > 0) {
        gameTimerSecDec();
      } else {
        gameTimerMinDec();
      }
      if (timerCounter!.sec === 1 && timerCounter!.min === 0) {
        gameStatusChange(GAME_STATUS.lose);
      }
    }
  };

  useEffect(() => {
    let timerInterval = 0;
    let stopWatchInterval = 0;
    if (gameStatus === GAME_STATUS.play) {
      timerInterval = window.setTimeout(stopWatchRun, 1000);
      stopWatchInterval = window.setTimeout(timerRun, 1000);
    }

    return () => {
      clearTimeout(timerInterval);
      clearTimeout(stopWatchInterval);
    };
  }, [gameStatus, stopWatch, timerCounter]);

  return (
    <>
      {timer === 'none' ? (
        <span>
          {stopWatch!.min < 10 ? `0${stopWatch?.min}` : stopWatch?.min}
        </span>
      ) : (
        <span>
          {timerCounter!.min < 10 ? `0${timerCounter?.min}` : timerCounter?.min}
        </span>
      )}

      <span className="timer-margin">:</span>

      {timer === 'none' ? (
        <span>
          {stopWatch!.sec < 10 ? `0${stopWatch?.sec}` : stopWatch?.sec}
        </span>
      ) : (
        <span>
          {timerCounter!.sec < 10 ? `0${timerCounter?.sec}` : timerCounter?.sec}
        </span>
      )}
    </>
  );
};
const mapStateToProps = (state: RootStateType) => ({
  ...state.gameCount,
  ...state.gameStatus,
  ...state.gameSet,
});

const actions = { ...countActions, ...statusAction };

export default connect(mapStateToProps, actions)(Timer);
