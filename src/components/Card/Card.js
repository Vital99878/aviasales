import React, { Fragment } from 'react';
import './Card.scss';
import PropTypes from 'prop-types';
// import { formatDistance } from 'date-fns';

const Card = ({ ticket }) => <li className="card">{ticket}</li>;

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
