import React from 'react';
import CurrentDate from './CurrentDate';

class Header extends React.Component {
  render() {
    return (
      <header className="header-primary">
        <div className="primary-nav">Standup Notes</div>
        <div className="header-primary__title">Hello Kevin</div>
        <CurrentDate />
      </header>
    );
  }
}

export default Header;
