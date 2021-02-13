import React from 'react';
import './Card-List.scss';
import PropTypes from 'prop-types';

import Card from '../Card';
// import { formatDistance } from 'date-fns';

const CardList = ({ tickets }) => {
  const list = tickets.map((ticket) => <Card ticket={ticket} />);
  return <ul className="card-list">{list}</ul>;
};

CardList.defaultProp = {
  label: '',
  created: 'ett',
  status: '',
  id: Math.random() * 784,
};
CardList.propTypes = {
  // eslint-disable-next-line no-undef
  tickets: PropTypes.string.isRequired,
  // created: PropTypes.string.isRequired,
  // toggle_status: PropTypes.func.isRequired,
  // remove_todo: PropTypes.func.isRequired,
  // status: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  // min: PropTypes.number.isRequired,
  // sec: PropTypes.number.isRequired,
};
export default CardList;
