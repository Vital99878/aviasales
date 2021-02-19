/* eslint-disable no-shadow,consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Direction.module.scss';

const Direction = ({ segment }) => {
  const { origin, destination, date, stops, duration } = segment;
  const time = `${Math.floor(duration / 60)}ч ${duration % 60}м `;
  const add_zero = (number) => {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  };
  const time_begin = `${add_zero(new Date(date).getHours())}:${add_zero(new Date(date).getMinutes())}`;
  const time_end_hours = add_zero(new Date(date).getHours() + (Math.floor(duration / 60) % 24));
  const time_end_minutes = add_zero((new Date(date).getMinutes() + (duration % 60)) % 60);
  const time_end = `${time_end_hours}:${time_end_minutes}`;

  const update_transfer = (stops) => {
    if (stops.length === 0) {
      return 'без пересадок';
    }
    if (stops.length === 1) {
      return 'пересадка';
    }
    if ([2, 3, 4].includes(stops.length)) {
      return 'пересадки';
    }
    if (stops.length > 4) {
      return 'пересадок';
    }
  };

  const transfer = update_transfer(stops);

  return (
    <div className={classes.direction}>
      <div className={classes.direction__part}>
        <p className={classes.direction__title}>{`${origin} - ${destination}`}</p>
        <p className={classes.direction__data}>{`${time_begin} - ${time_end}`}</p>
      </div>
      <div className={classes.direction__part}>
        <p className={classes.direction__title}>В ПУТИ</p>
        <p className={classes.direction__data}>{time}</p>
      </div>
      <div className={classes.direction__part}>
        <p className={classes.direction__title}>{`${stops.length ? stops.length : ''} ${transfer}`}</p>
        <p className={classes.direction__data}>{stops.length === 0 ? `\u2014` : stops.join(', ')}</p>
      </div>
    </div>
  );
};

Direction.defaultProp = {
  label: '',
  created: 'ett',
  status: '',
  id: Math.random() * 784,
};
Direction.propTypes = {
  segment: PropTypes.objectOf.isRequired,
  //  origin: PropTypes.string.isRequired,
  //  destination: PropTypes.string.isRequired,
  //  date: PropTypes.string.isRequired,
  //  stops: PropTypes.arrayOf.isRequired,
  //  duration: PropTypes.number.isRequired
};
export default Direction;
