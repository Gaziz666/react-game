import React from 'react';
import { connect } from 'react-redux';
import { GameSettingsStateType } from '../../../reducers/game-settings-reducer';
import { RootStateType } from '../../../reducers/rootReducer';
import createGame from '../../../services/createGame';
import Token from '../../token/token';
import './game-page.css';

const GamePage: React.FC<Props> = ({ level, size, timer }: Props) => {
  const style = {
    gridTemplateColumns: `repeat(${size}, 1fr)`,
    gridTemplateRows: `repeat(${size}, 1fr)`,
  };

  const { gameArr, gameArrWithBomb } = createGame({ level, size, timer });
  console.log(gameArrWithBomb);

  // prettier-ignore
  const renderGame = () => gameArr.flat().map((item, index) => {
    const key = index + 1;
    return (
      <Token
        dataX={item.x}
        dataY={item.y}
        key={key}
      />
    );
  });

  return (
    <>
      <div className="game-container">
        <div className="game" style={style}>
          {renderGame()}
        </div>
      </div>
      <div>footer</div>
    </>
  );
};

type Props = GameSettingsStateType;

const mapStateToProps = (state: RootStateType) => ({ ...state.gameSet });

export default connect(mapStateToProps, null)(GamePage);
