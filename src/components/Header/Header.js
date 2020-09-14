import React from 'react';
import logo from '../../asserts/img/logo.png'
import './Header.scss';

export class Header extends React.Component {
  render() {
    return (
      <div className="header-body">
          <div className="logo-container">
            <img className="logo" src={logo} alt="Rits logo"/>
          </div>
          <div className="menu-container">
            <span className="item-menu">Proin</span>
            <span className="item-menu">Atendimento</span>
          </div>
      </div>
    );
  }
}