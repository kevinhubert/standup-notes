import React from 'react';
import ActionButtonMenuItems from './ActionButtonMenuItems';

class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isactive: false };
  }
  handleClick = () => {
    console.log('clicked');
    const currentState = this.state.isactive;
    this.setState({ isactive: !currentState });
  };
  render() {
    return (
      <div>
        {this.state.isactive ? (
          <ActionButtonMenuItems handleClick={this.handleClick} />
        ) : null}
        <div
          className={
            this.state.isactive ? 'circle-button is-active' : 'circle-button'
          }
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default ActionButton;
