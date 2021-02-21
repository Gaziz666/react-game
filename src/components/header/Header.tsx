import React from 'react';
import MenuButton from '../menu-button/Menu-button';
import './header.css';

type HeaderProps = {
  // eslint-disable-next-line no-unused-vars
  openPopup: (type: string) => void;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const about = 'About';
  const settings = 'Menu';
  return (
    <header className="header">
      <MenuButton value={about} click={() => props.openPopup(about)} />
      <div className="flag" />
      <MenuButton value={settings} click={() => props.openPopup(settings)} />
    </header>
  );
};

export default Header;
