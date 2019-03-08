import React from 'react';

class ItemsSection extends React.Component {
  render() {
    return (
      <>
        <div className="items-section">
          <div className="items-section__title">Yesterday</div>
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
