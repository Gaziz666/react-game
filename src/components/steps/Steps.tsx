import React from 'react';
import { connect } from 'react-redux';
import { GameCountStateType } from '../../reducers/game-count-reducer';
import { RootStateType } from '../../reducers/rootReducer';

const Steps: React.FC<GameCountStateType> = ({
  stepCount,
}: GameCountStateType) => <span>{stepCount}</span>;

const mapStateToProps = (state: RootStateType) => ({ ...state.gameCount });

export default connect(mapStateToProps, null)(Steps);
