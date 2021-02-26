import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import classes from './Filter.module.scss';

const Filter = ({
  toggle_transfers,
  select_all_transfers,
  active_all,
  filtered_tickets,
  sorted_tickets,
  visible_tickets,
  transfers,
  index,
}) => {
  const select_all = () => {
    const all_items = document.querySelectorAll(`.${classes.filter__item}`);
    const all_inputs = document.querySelectorAll('input');

    if (!active_all) {
      for (let i = 0; i < all_items.length; i++) {
        all_items[i].className = `${classes.filter__item} ${classes.filter__itemActive}`;
      }
      for (let i = 1; i < all_inputs.length; i++) {
        all_inputs[i].checked = true;
      }
    } else {
      for (let i = 0; i < all_items.length; i++) {
        all_items[i].className = `${classes.filter__item}`;
      }
      for (let i = 1; i < all_inputs.length; i++) {
        all_inputs[i].checked = false;
      }
    }

    if (transfers.length < 4) {
      transfers = [0, 1, 2, 3];
      active_all = true;
    } else {
      transfers = [];
      active_all = false;
    }

    filtered_tickets = sorted_tickets.filter((ticket) => transfers.includes(ticket.segments[0].stops.length));
    visible_tickets = filtered_tickets.splice(index, 5);
    select_all_transfers(filtered_tickets, visible_tickets, active_all, transfers);
  };

  const get_quantity_transfer = (evt) => {
    const quantity = evt.target.dataset.transfers;
    toggle_transfers(quantity);
    const item = evt.target.parentNode.parentNode;
    item.classList.toggle(classes.filter__itemActive);
  };

  const active_class = active_all ? classes.filter__itemActive : '';
  const checked = active_all ? 'checked' : '';

  useEffect(() => {
    const all_items = document.querySelectorAll(`.${classes.filter__item}`);
    const all_inputs = document.querySelectorAll('input');
    for (let i = 0; i < all_items.length; i++) {
      all_items[i].className = `${classes.filter__item} ${classes.filter__itemActive}`;
    }
    for (let i = 0; i < all_inputs.length; i++) {
      all_inputs[i].checked = true;
    }
  }, []);

  return (
    <div className={classes.filter}>
      <div className={classes.filter__title}>Количество пересадок</div>
      <ul className={classes.filter__list}>
        <li className={`${classes.filter__item} ${active_class}`} key="1">
          <label className={classes.filter__checkbox}>
            Все
            <input onClick={select_all} checked={checked} type="checkbox" data-transfers="8" />
            <span className={classes.checkmark} />
          </label>
        </li>
        <li className={classes.filter__item} key="2">
          <label className={classes.filter__checkbox}>
            Без пересадок
            <input onClick={get_quantity_transfer} type="checkbox" data-transfers="0" />
            <span className={classes.checkmark} />
          </label>
        </li>
        <li className={classes.filter__item} key="3">
          <label className={classes.filter__checkbox}>
            1 пересадка
            <input onClick={get_quantity_transfer} type="checkbox" data-transfers="1" />
            <span className={classes.checkmark} />
          </label>
        </li>
        <li className={classes.filter__item} key="4">
          <label className={classes.filter__checkbox}>
            2 пересадки
            <input onClick={get_quantity_transfer} type="checkbox" data-transfers="2" />
            <span className={classes.checkmark} />
          </label>
        </li>
        <li className={classes.filter__item} key="5">
          <label className={classes.filter__checkbox}>
            3 пересадки
            <input onClick={get_quantity_transfer} type="checkbox" data-transfers="3" />
            <span className={classes.checkmark} />
          </label>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
  transfers: state.transfers,
  active_all: state.active_all,
  checked: state.checked,
  active_class: state.active_class,
  sorted_tickets: state.sorted_tickets,
  filtered_tickets: state.filtered_tickets,
  visible_tickets: state.visible_tickets,
  index: state.index,
});

Filter.propTypes = {
  toggle_transfers: PropTypes.func.isRequired,
  select_all_transfers: PropTypes.func.isRequired,
  active_all: PropTypes.bool.isRequired,
  sorted_tickets: PropTypes.arrayOf.isRequired,
  filtered_tickets: PropTypes.arrayOf.isRequired,
  visible_tickets: PropTypes.arrayOf.isRequired,
  transfers: PropTypes.arrayOf.isRequired,
  index: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, actions)(Filter);
