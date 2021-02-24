import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import classes from './Card-List.module.scss';
import { get_tickets, setId } from '../../redux/actions';
import './Spin.scss';
import Card from '../Card';

const CardList = ({ on_get_tickets, onSetId, stop_load, searchId, visible_tickets }) => {
  useEffect(() => {
    onSetId();
  }, []);

  if (searchId && !stop_load) {
    on_get_tickets(searchId).catch(() => [[], false]);
  }

  const list = visible_tickets.map((ticket) => <Card ticket={ticket} />);
  return (
    <>
      {!stop_load ? <Spin tip="Tickets loading" /> : null}
      {list.length === 0 && stop_load ? (
        <Spin tip="try another filter" />
      ) : (
        <ul className={classes['card-list']}>{list}</ul>
      )}
    </>
  );
};

CardList.defaultProp = {
  id: Math.random() * 784,
};

CardList.propTypes = {
  visible_tickets: PropTypes.string.isRequired,
  searchId: PropTypes.string.isRequired,
  on_get_tickets: PropTypes.func.isRequired,
  onSetId: PropTypes.func.isRequired,
  stop_load: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  visible_tickets: state.visible_tickets,
  load_tickets: state.load_tickets,
  searchId: state.searchId,
  stop_load: state.stop_load,
  transfers: state.transfers,
});

const mapDispatchToProps = (dispatch) => ({
  on_get_tickets: (id) => dispatch(get_tickets(id)),
  onSetId: () => dispatch(setId()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
