import React from 'react';

const Lose: React.FC = () => (
  <div className="lose-container">
    <div className="lose-img">
      <div className="bomb-img" />
      <div className="bomb-container">
        <div className="bomb-img" />
        <div className="lose-nam">you</div>
      </div>
      <div className="bomb-img" />
    </div>
    <div className="lose-text">lose</div>
    <div className="lose-info">
      <div className="info-container">
        <div className="lose-nam">time:</div>
        <div className="lose-nam">03:03</div>
      </div>
      <div className="close-container">
        <div className="ok-button" aria-hidden="true">
          ok
        </div>
      </div>
      <div className="info-container">
        <div className="lose-nam">time:</div>
        <div className="lose-nam">03:03</div>
      </div>
    </div>
  </div>
);

export default Lose;
