import React from 'react';
import './menu-button.css';

type Props = {
  value: string;
  click: () => void;
};

const MenuButton: React.FC<Props> = ({ value, click }: Props) => (
  <button className="menu-button" type="button" onClick={click}>
    {value}
  </button>
);

export default MenuButton;
