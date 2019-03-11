import React from 'react';

class ItemsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          task: 'Fix API calls',
          time: '1pm'
        },
        {
          task: 'Retro at brewery',
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
          {this.state.tasks.map((item, index) => {
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
          <div className="checklist-item">
            <div className="checklist-item__task">Checklist Item 1</div>

            <div className="checklist-item__time">1pm</div>
          </div>
          <div className="checklist-item">
            <div className="checklist-item__task">Checklist Item 2</div>

            <div className="checklist-item__time">2pm</div>
          </div>
          <div className="checklist-item">
            <div className="checklist-item__task">Checklist Item 3</div>

            <div className="checklist-item__time">3pm</div>
          </div>
          <div className="checklist-item">
            <div className="checklist-item__task">Checklist Item 4</div>

            <div className="checklist-item__time">4pm</div>
          </div>
          <div className="checklist-item">
            <div className="checklist-item__task">Checklist Item 5</div>

            <div className="checklist-item__time">5pm</div>
          </div>
        </div>
      </>
    );
  }
}

export default ItemsSection;
