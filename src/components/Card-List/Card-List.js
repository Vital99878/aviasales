import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Card-List.module.scss';
import * as actions from '../../redux/actions';

import Card from '../Card';

const CardList = ({ get_tickets, stop_load, searchId, setId, visible_tickets }) => {
  if (!searchId) {
    setId();
  }

  if (searchId && !stop_load) {
    get_tickets(searchId);
  }

  const list = visible_tickets.map((ticket) => <Card ticket={ticket} />);
  return <ul className={classes['card-list']}>{list}</ul>;
};

CardList.defaultProp = {
  id: Math.random() * 784,
};

CardList.propTypes = {
  visible_tickets: PropTypes.string.isRequired,
  searchId: PropTypes.string.isRequired,
  get_tickets: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired,
  stop_load: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  visible_tickets: state.visible_tickets,
  load_tickets: state.load_tickets,
  searchId: state.searchId,
  load_all: state.load_all,
  transfers: state.transfers,
});

export default connect(mapStateToProps, actions)(CardList);
