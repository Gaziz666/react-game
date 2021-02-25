import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GameSettingsStateType } from '../../../reducers/game-settings-reducer';
import { GameTableStateType } from '../../../reducers/game-table-reducer';
import { RootStateType } from '../../../reducers/rootReducer';

import createGame, { GameArrType } from '../../../services/createGame';
import Token from '../../token/token';
import * as actions from '../../../actions/game-table-actions';
import './game-page.css';

type MapDispatchToPropsType = {
  // eslint-disable-next-line no-unused-vars
  gameStart: (value: GameArrType) => actions.GameTableType;
};

type Props = GameSettingsStateType &
  GameTableStateType &
  MapDispatchToPropsType;

const GamePage: React.FC<Props> = ({
  level,
  size,
  timer,
  gameStartArr,
  gameStart,
}: Props) => {
  const style = {
    gridTemplateColumns: `repeat(${size}, 1fr)`,
    gridTemplateRows: `repeat(${size}, 1fr)`,
  };

  const { gameArr } = createGame({ level, size, timer });
  console.log('game-page', gameStartArr);

  useEffect(() => {
    gameStart(gameArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // prettier-ignore
  const renderGame = () => [...gameArr].flat().map((item, index) => {
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
      </div>
      <div>footer</div>
    </>
  );
};

const mapStateToProps = (state: RootStateType) => ({
  ...state.gameSet,
  ...state.gameTable,
});

export default connect(mapStateToProps, actions)(GamePage);
