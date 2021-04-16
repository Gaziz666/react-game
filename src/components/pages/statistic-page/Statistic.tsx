import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './statistic.css';
import { connect } from 'react-redux';
import { RootStateType } from '../../../reducers/rootReducer';
import { GameStatisticStateType } from '../../../reducers/game-statistic-reducer';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'size', headerName: 'size', width: 80 },
  { field: 'level', headerName: 'level', width: 70 },
  { field: 'timer', headerName: 'timer', width: 80 },
  { field: 'gameStatus', headerName: 'status', width: 80 },
  { field: 'time', headerName: 'time', width: 80 },
  { field: 'stepCount', headerName: 'steps', width: 70 },
];

type Props = GameStatisticStateType;

const Statistic: React.FC<Props> = ({ statistics }: Props) => (
  <div className="table-container">
    <div className="table">
      <DataGrid
        rows={statistics}
        rowHeight={25}
        columns={columns}
        pageSize={10}
        disableColumnMenu
        checkboxSelection={false}
      />
    </div>
  </div>
);

const mapStateToProps = (state: RootStateType) => ({ ...state.gameStat });

export default connect(mapStateToProps, null)(Statistic);
