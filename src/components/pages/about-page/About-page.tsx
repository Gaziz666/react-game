import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootStateType } from '../../../reducers/rootReducer';
import * as actions from '../../../actions/game-status-action';

import { Close } from '../../icons/Icons';
import './about-page.css';
import { GameStatusStateType } from '../../../reducers/game-status-reducer';
import { GAME_STATUS } from '../../../utils/gameConstant';

type Props = GameStatusStateType & MapDispatchToPropsType;
type MapDispatchToPropsType = {
  // eslint-disable-next-line no-unused-vars
  gameStatusChange: (value: string) => actions.GameStatusActionType;
};

const AboutPage: React.FC<Props> = ({
  gameStatus,
  gameStatusChange,
}: Props) => {
  const history = useHistory();

  useEffect(() => {
    if (gameStatus === GAME_STATUS.play) {
      gameStatusChange(GAME_STATUS.pause);
    }
  }, []);

  const goBack = () => {
    if (gameStatus === GAME_STATUS.pause) {
      gameStatusChange(GAME_STATUS.play);
    } else {
      gameStatusChange(GAME_STATUS.start);
    }
    history.goBack();
  };

  return (
    <div className="about-container">
      <h3>About</h3>
      <h5>Mine hunter 2021.02.001</h5>
      <h5>
        {'Created by: '}
        <a href="https://github.com/Gaziz666">#Gaziz666</a>
      </h5>
      <p className="text-center">
        Mine Hunter is a single - player puzzle game and has square blocks with
        hidden bombs or mines in it.
      </p>
      <p className="text-center">
        You have to find the square, which has hidden bomb(mine) and ‘flag’ on
        that square by using ‘clues’ around each square.
      </p>
      <p className="text-center">
        Here clues are numbers that tells you how many bombs(mine) are in the
        adjacent blocks in all directions (8).
      </p>
      <p className="text-center">
        For example, if the clue numbers is 1, that means it has only one in
        it’s 8 adjacent squares and the remaining 7 squares are free to dig.
      </p>
      <p className="text-center">
        If there is no clue means there is no bomb around the adjacent square
        blocks, you can dig the square.
      </p>
      <p className="text-center">
        So use your calculation based on clues and flag on correct squares
        having bomb(mine) and dig the square.
      </p>
      <div className="close-icon-wrapper" onClick={goBack} aria-hidden="true">
        <Close width="30px" height="30px" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => ({ ...state.gameStatus });

export default connect(mapStateToProps, actions)(AboutPage);
