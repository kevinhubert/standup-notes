import React from 'react';

class CurrentDate extends React.Component {
  render() {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const date = new Date();

    const displayDate = {
      day: days[date.getDay()],
      month: months[date.getMonth()],
      date: date.getDate()
    };

    return (
      <div className="current-date">
        <div className="current-date__name">{displayDate.day}, </div>
        <div className="current-date__date">
          {`${displayDate.month} ${displayDate.date}`}
        </div>
      </div>
    );
  }
}

export default CurrentDate;
