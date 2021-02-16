import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Card-List.module.scss';

import Card from '../Card';

const CardList = ({ tickets }) => {
  const list = tickets.map((ticket) => <Card ticket={ticket} />);
  return <ul className={classes['card-list']}>{list}</ul>;
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
};
const mapStateToProps = (state) => ({
  tickets: state.tickets,
});

export default connect(mapStateToProps)(CardList);
