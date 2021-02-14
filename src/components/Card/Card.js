import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';
import S7_logo from '../../S7 Logo.svg';
import Direction from '../Direction';

const Card = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  return (
    <li className="card" key={Math.random() * 15000}>
      <div className="card__title">
        <p className="card__price">{`${price.toLocaleString('ru')} р`}</p>
        <img src={S7_logo} alt={carrier} />
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
