import React from 'react';

class ItemsSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yesterday: [
        {
          task: 'Fix API calls',
          time: '1pm'
        },
        {
          task: 'Retro at brewery',
          time: '3pm'
        }
      ],
      today: [
        {
          task: 'Create pricing grid UI',
          time: '10am'
        },
        {
          task: 'Happy Hour w/ Product',
          time: '3pm'
        }
      ]
    };
  }
  render() {
    return (
      <>
        <div className="items-section">
          <div className="items-section__title">Yesterday</div>
          {this.state.yesterday.map((item, index) => {
            return (
              <div className="checklist-item" key={index}>
                <div className="checklist-item__task">{item.task}</div>
                <div className="checklist-item__time">{item.time}</div>
              </div>
            );
          })}
        </div>
        <div className="items-section">
          <div className="items-section__title">Today</div>
          {this.state.today.map((item, index) => {
            return (
              <div className="checklist-item" key={index}>
                <div className="checklist-item__task">{item.task}</div>
                <div className="checklist-item__time">{item.time}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ItemsSection;
