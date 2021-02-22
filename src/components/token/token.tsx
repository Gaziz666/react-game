import React from 'react';
import './token.css';

type Props = {
  dataX: number;
  dataY: number;
};

const Token: React.FC<Props> = ({ dataX, dataY }: Props) => (
  <div
    className="token"
    data-x={dataX}
    data-y={dataY}
    aria-hidden="true"
    onClick={() => console.log('click')}
  />
);

export default Token;
