import React from 'react';
import { connect } from 'react-redux';
import { GameSettingsStateType } from '../../../reducers/game-settings-reducer';
import { GameTableStateType } from '../../../reducers/game-table-reducer';
import { RootStateType } from '../../../reducers/rootReducer';
import Token from '../../token/token';
import * as actionsTable from '../../../actions/game-table-actions';
import * as actionStatus from '../../../actions/game-status-action';
import './game-page.css';
import { BombCountIcon, StepsIcon, TimerIcon } from '../../icons/Icons';
import Steps from '../../steps/Steps';
import BombCount from '../../bombCount/BombCount';
import Timer from '../../timer/Timer';

type Props = GameSettingsStateType & GameTableStateType;

const GamePage: React.FC<Props> = ({ size, gameStartArr }: Props) => {
  const style = {
    gridTemplateColumns: `repeat(${size}, 1fr)`,
    gridTemplateRows: `repeat(${size}, 1fr)`,
  };

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
});

const actions = { ...actionStatus, ...actionsTable };

export default connect(mapStateToProps, actions)(GamePage);
