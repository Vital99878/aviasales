import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import classes from './Filter.module.scss';

const { filter__item, filter__itemActive } = classes;

const Filter = ({ toggle_transfers, select_all_transfers, active_all, transfers }) => {
  const [activeList, setActiveClass] = useState([true, true, true, true]);
  const [transfers_0, transfers_1, transfers_2, transfers_3] = activeList;
  const allTransfers = activeList.filter((item) => item === true).length === 4;

  const select_all = () => {
    if (transfers.length < 4) {
      transfers = [0, 1, 2, 3];
      active_all = true;
      setActiveClass([true, true, true, true]);
    } else {
      transfers = [];
      active_all = false;
      setActiveClass([false, false, false, false]);
    }
    select_all_transfers(active_all, transfers);
  };

  const get_quantity_transfer = (evt) => {
    const quantity = Number(evt.target.dataset.transfers);
    setActiveClass(
      activeList.map((item, index) => {
        if (index === quantity) {
          return !item;
        }
        return item;
      })
    );

    if (transfers.includes(quantity)) {
      transfers = transfers.filter((item) => item !== quantity);
    } else {
      transfers.push(quantity);
    }

    toggle_transfers(transfers);

    const item = evt.target.parentNode.parentNode;
    item.classList.toggle(filter__itemActive);
  };

  return (
    <div className={classes.filter}>
      <div className={classes.filter__title}>Количество пересадок</div>
      <ul className={classes.filter__list}>
        <li className={`${filter__item} ${allTransfers ? filter__itemActive : null}`} key="1">
          <label className={classes.filter__checkbox}>
            Все
            <input onClick={select_all} checked={allTransfers} type="checkbox" data-transfers="8" />
            <span className={classes.checkmark} />
          </label>
        </li>
        <li className={`${filter__item} ${transfers_0 ? filter__itemActive : null}`} key="2">
          <label className={classes.filter__checkbox}>
            Без пересадок
            <input onClick={get_quantity_transfer} checked={transfers_0} type="checkbox" data-transfers="0" />
            <span className={classes.checkmark} />
          </label>
        </li>
        <li className={`${filter__item} ${transfers_1 ? filter__itemActive : null}`} key="3">
          <label className={classes.filter__checkbox}>
            1 пересадка
            <input onClick={get_quantity_transfer} checked={transfers_1} type="checkbox" data-transfers="1" />
            <span className={classes.checkmark} />
          </label>
        </li>
        <li className={`${filter__item} ${transfers_2 ? filter__itemActive : null}`} key="4">
          <label className={classes.filter__checkbox}>
            2 пересадки
            <input onClick={get_quantity_transfer} checked={transfers_2} type="checkbox" data-transfers="2" />
            <span className={classes.checkmark} />
          </label>
        </li>
        <li className={`${filter__item} ${transfers_3 ? filter__itemActive : null}`} key="5">
          <label className={classes.filter__checkbox}>
            3 пересадки
            <input onClick={get_quantity_transfer} checked={transfers_3} type="checkbox" data-transfers="3" />
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
  transfers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps, actions)(Filter);
