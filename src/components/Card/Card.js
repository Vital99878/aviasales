import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.scss';
import Direction from '../Direction';

const Card = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  const { date } = segments[0];

  return (
    <li className={classes.card} key={date + price + segments[0].stops.toString()}>
      <div className={classes.card__title}>
        <p className={classes.card__price}>{`${price.toLocaleString('ru')} р`}</p>
        <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </div>
      <Direction segment={segments[0]} />
      <Direction segment={segments[1]} />
    </li>
  );
};

Card.propTypes = {
  // todo react/forbid-prop-types
  // eslint-disable-next-line react/forbid-prop-types
  ticket: PropTypes.object.isRequired,
};
export default Card;
