import React from 'react';
import About from '../about/About';
import SettingsMenu from '../settings-menu/Settings-menu';
import './popup.css';

type Props = {
  closePopup: () => void;
  type: 'about' | 'settings';
};

const Popup: React.FC<Props> = ({ closePopup, type }: Props) => {
  const handleClose = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  return (
    <div className="popup-container" onClick={handleClose} aria-hidden="true">
      <div className="popup">
        {type === 'about' ? <About closePopup={closePopup} /> : null}
        {type === 'settings' ? <SettingsMenu closePopup={closePopup} /> : null}
      </div>
    </div>
  );
};

export default Popup;
