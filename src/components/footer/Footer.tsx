import React from 'react';
import './footer.css';

const Footer: React.FC = () => (
  <div className="footer">
    <span>Created by: </span>
    <a className="margin" href="https://github.com/Gaziz666/" target="_blanc">
      {' '}
      Gaziz Tuleukulov
    </a>
    <a href="https://rs.school/react/" target="_blanc">
      <div className="rs-logo" />
    </a>
    <span> 2021</span>
  </div>
);

export default Footer;
