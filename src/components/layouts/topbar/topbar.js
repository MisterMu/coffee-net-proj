import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import './topbar.scss';

export const Topbar = () => (
  <header className="topbar">
    <ul>
      <li><Link to="/"><Icon type="phone" /> +6612 345 6789</Link></li>
      <li><Link to="/"><Icon type="mail" /> หัวกล้วย@se.cpe</Link></li>
    </ul>
  </header>
);