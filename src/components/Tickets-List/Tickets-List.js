import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spin, Alert } from 'antd';
import * as actions from '../../redux/actions';
import classes from './Tickets-List.module.scss';

import './Spin_Alert.scss';

import Ticket from '../Ticket';
import More from '../More/More';

const TicketsList = ({ visible_tickets, get_tickets, set_id, stop_load, searchId }) => {
  useEffect(() => {
    set_id();
  }, []);

  if (searchId && !stop_load) {
    get_tickets(searchId);
  }

  const list = visible_tickets().map((ticket) => <Ticket ticket={ticket} />);

  return (
    <>
      {!stop_load ? <Spin tip="Tickets loading" /> : null}
      {list.length === 0 ? (
        <Alert message="No tickets" description="Please, try selecting other filters" type="info" />
      ) : (
        <ul className={classes['card-list']}>{list}</ul>
      )}
      {list.length !== 0 && <More />}
    </>
  );
};

TicketsList.propTypes = {
  visible_tickets: PropTypes.objectOf.isRequired,
  searchId: PropTypes.string.isRequired,
  get_tickets: PropTypes.func.isRequired,
  set_id: PropTypes.func.isRequired,
  stop_load: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  transfers: state.transfers,
  visible_tickets: () => {
    let sorted_tickets;
    if (state.tab_value === 'Самый дешевый') {
      sorted_tickets = state.all_tickets.sort((a, b) => a.price - b.price);
    }
    if (state.tab_value === 'Самый быстрый') {
      sorted_tickets = state.all_tickets.sort((a, b) => {
        const duration_a = a.segments[0].duration + a.segments[1].duration;
        const duration_b = b.segments[0].duration + b.segments[1].duration;
        return duration_a - duration_b;
      });
    }
    return sorted_tickets
      .filter((ticket) => state.transfers.includes(ticket.segments[0].stops.length))
      .splice(0, state.index);
  },
  searchId: state.searchId,
  stop_load: state.stop_load,
  tab_value: state.tab_value,
  index: state.index,
});

export default connect(mapStateToProps, actions)(TicketsList);
