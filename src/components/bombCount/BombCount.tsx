import React from 'react';
import { connect } from 'react-redux';
import { GameCountStateType } from '../../reducers/game-count-reducer';
import { RootStateType } from '../../reducers/rootReducer';

const BombCount: React.FC<GameCountStateType> = ({
  bombCount,
}: GameCountStateType) => <span>{bombCount}</span>;

const mapStateToProps = (state: RootStateType) => ({ ...state.gameCount });

export default connect(mapStateToProps, null)(BombCount);
