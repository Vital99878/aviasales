import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spin, Alert } from 'antd';
import classes from './Card-List.module.scss';
import { get_tickets, setId } from '../../redux/actions';
import './Spin_Alert.scss';

import Card from '../Card';
import More from '../More/More';

const CardList = ({ all_tickets, transfers, on_get_tickets, onSetId, stop_load, index, searchId, tab_value }) => {
  useEffect(() => {
    onSetId();
  }, [transfers]);

  if (searchId && !stop_load) {
    on_get_tickets(searchId);
  }

  let sorted_tickets;
  if (tab_value === 'Самый дешевый') {
    sorted_tickets = all_tickets.sort((a, b) => a.price - b.price);
  }
  if (tab_value === 'Самый быстрый') {
    sorted_tickets = all_tickets.sort((a, b) => {
      const duration_a = a.segments[0].duration + a.segments[1].duration;
      const duration_b = b.segments[0].duration + b.segments[1].duration;
      return duration_a - duration_b;
    });
  }

  const filtered_tickets = sorted_tickets.filter((ticket) =>
    transfers.includes(ticket.segments[0].stops.length + ticket.segments[1].stops.length)
  );

  const visible_tickets = filtered_tickets.splice(0, index);

  const list = visible_tickets.map((ticket) => <Card ticket={ticket} />);

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

CardList.propTypes = {
  all_tickets: PropTypes.arrayOf.isRequired,
  searchId: PropTypes.string.isRequired,
  on_get_tickets: PropTypes.func.isRequired,
  onSetId: PropTypes.func.isRequired,
  stop_load: PropTypes.bool.isRequired,
  tab_value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  transfers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => ({
  transfers: state.transfers,
  all_tickets: state.all_tickets,
  searchId: state.searchId,
  stop_load: state.stop_load,
  tab_value: state.tab_value,
  index: state.index,
});

const mapDispatchToProps = (dispatch) => ({
  on_get_tickets: (id) => dispatch(get_tickets(id)),
  onSetId: () => dispatch(setId()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
