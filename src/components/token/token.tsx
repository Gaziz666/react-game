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

type OwnProps = {
  dataX: number;
  dataY: number;
  size: string;
};

type MapDispatchToPropsType = {
  // eslint-disable-next-line no-unused-vars
  gameStart: (value: GameArrType) => tableActions.GameTableType;
  gameStatusChange: (
    // eslint-disable-next-line no-unused-vars
    value: GameStatusType,
  ) => statusAction.GameStatusActionType;
};

type Props = GameTableStateType &
  GameStatusStateType &
  MapDispatchToPropsType &
  OwnProps;

const Token: React.FC<Props> = ({
  gameStartArr,
  gameStatus,
  gameStatusChange,
  gameStart,
  dataX,
  dataY,
  size,
}: Props) => {
  const tokenHandleClick = (event: React.MouseEvent) => {
    if (!(event.target as HTMLElement).classList.contains('button')) {
      return;
    }

    const currentElement = event.target as HTMLElement;
    const x = Number(currentElement.dataset.x);
    const y = Number(currentElement.dataset.y);
    const currentToken = gameStartArr[x][y];

    if (currentToken.flag) {
      return;
    }

    currentElement.classList.remove('button');
    currentElement.classList.add('open-button');

    if (currentToken.back === 10) {
      currentElement.innerHTML = '<div class="bomb"></div>';
      gameStatusChange('lose');
      console.log('gamestatus', gameStatus);
    } else if (currentToken.back !== 0) {
      currentElement.innerHTML = `<span class="open${currentToken.back}">${currentToken.back}</span>`;
    }

    const newStateArr = [...gameStartArr];
    newStateArr[x][y].open = true;
    gameStart(newStateArr);
  };

  const flagHandleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const currentElement = (event.target as HTMLElement).closest(
      '.button',
    ) as HTMLElement;

    if (!currentElement) {
      return;
    }

    const x = Number(currentElement.dataset.x);
    const y = Number(currentElement.dataset.y);
    const newStateArr = [...gameStartArr];

    currentElement.innerHTML = newStateArr[x][y].flag
      ? ''
      : '<div class="flag-click"></div>';

    newStateArr[x][y].flag = !newStateArr[x][y].flag;
    gameStart(newStateArr);
  };

  return (
    <div
      className={`button token-${size}`}
      data-x={dataX}
      data-y={dataY}
      aria-hidden="true"
      onClick={(event) => tokenHandleClick(event)}
      onContextMenu={(event) => flagHandleClick(event)}
    />
  );
};

const actions = { ...tableActions, ...statusAction };

const mapStateToProps = (state: RootStateType) => ({
  ...state.gameTable,
  ...state.gameStatus,
});

export default connect(mapStateToProps, actions)(Token);
