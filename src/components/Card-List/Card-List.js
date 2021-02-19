import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Card-List.module.scss';
import * as actions from '../../redux/actions';

import Card from '../Card';

const CardList = ({ tickets, get_tickets, load_tickets }) => {
  if (!load_tickets) {
    get_tickets();
  }
  const list = tickets.map((ticket) => <Card ticket={ticket} />);
  return <ul className={classes['card-list']}>{list}</ul>;
};

CardList.defaultProp = {
  id: Math.random() * 784,
};
CardList.propTypes = {
  // eslint-disable-next-line no-undef
  tickets: PropTypes.string.isRequired,
  get_tickets: PropTypes.func.isRequired,
  load_tickets: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  tickets: state.tickets,
  load_tickets: state.load_tickets,
});

export default connect(mapStateToProps, actions)(CardList);
