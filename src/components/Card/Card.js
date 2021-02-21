import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.scss';
import S7_logo from '../../img/S7 Logo.svg';
import Direction from '../Direction';

const Card = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  return (
    <li className={classes.card} key={Math.random() * 15000}>
      <div className={classes.card__title}>
        <p className={classes.card__price}>{`${price.toLocaleString('ru')} р`}</p>
        <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </div>
      <Direction segment={segments[0]} />
      <Direction segment={segments[1]} />
    </li>
  );
};

Card.defaultProp = {
  label: '',
  created: 'ett',
  status: '',
  id: Math.random() * 784,
};
Card.propTypes = {
  ticket: PropTypes.string.isRequired,
};
export default Card;
