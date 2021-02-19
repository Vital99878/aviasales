import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Card-List.module.scss';
import * as actions from '../../redux/actions';

import Card from '../Card';

const CardList = ({ tickets, get_tickets, stop, searchId, setId }) => {
  console.log(tickets);
  if (!searchId) {
    setId();
  }

  if (searchId && !stop) {
    get_tickets(searchId);
  }

  const list = tickets.map((ticket) => <Card ticket={ticket} />);
  return <ul className={classes['card-list']}>{list}</ul>;
};

CardList.defaultProp = {
  id: Math.random() * 784,
};

CardList.propTypes = {
  tickets: PropTypes.string.isRequired,
  searchId: PropTypes.string.isRequired,
  get_tickets: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired,
  stop: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  tickets: state.tickets,
  load_tickets: state.load_tickets,
  searchId: state.searchId,
  load_all: state.load_all,
});

export default connect(mapStateToProps, actions)(CardList);
