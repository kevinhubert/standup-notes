import React from 'react';

class ActionButtonMenuItems extends React.Component {
  render() {
    return (
      <div className="action-button-menu-items">
        <button
          onClick={this.props.handleClick}
          className="action-button-menu-items__button btn btn-primary btn-large"
        >
          Add Item
        </button>
      </div>
    );
  }
}
export default ActionButtonMenuItems;
