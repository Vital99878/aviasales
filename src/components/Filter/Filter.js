import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './Filter.scss';

const Filter = ({ toggle_transfers, toggle_all_transfers }) => {
  const get_quantity_transfer = (evt) => {
    const quantity = evt.target.dataset.transfers;
    toggle_transfers(quantity);
  };

  const get_all_transfer = () => {
    toggle_all_transfers();
  };

  return (
    <div className="filter">
      <div className="filter__title">Количество пересадок</div>
      <ul className="filter__list">
        <li className="filter__item filter__item--active" key="1">
          <label className="filter__checkbox">
            Все
            <input onClick={get_all_transfer} type="checkbox" />
            <span className="checkmark" />
          </label>
        </li>
        <li className={`filter__item `} key="2">
          <label className="filter__checkbox">
            Без пересадок
            <input onClick={get_quantity_transfer} type="checkbox" data-transfers="0" />
            <span className="checkmark" />
          </label>
        </li>
        <li className="filter__item" key="3">
          <label className="filter__checkbox">
            1 пересадка
            <input onClick={get_quantity_transfer} type="checkbox" data-transfers="1" />
            <span className="checkmark" />
          </label>
        </li>
        <li className="filter__item" key="4">
          <label className="filter__checkbox">
            2 пересадки
            <input onClick={get_quantity_transfer} type="checkbox" data-transfers="2" />
            <span className="checkmark" />
          </label>
        </li>
        <li className="filter__item" key="5">
          <label className="filter__checkbox">
            3 пересадки
            <input onClick={get_quantity_transfer} type="checkbox" data-transfers="3" />
            <span className="checkmark" />
          </label>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

Filter.propTypes = {
  toggle_transfers: PropTypes.func.isRequired,
  toggle_all_transfers: PropTypes.func.isRequired,
};
Filter.defaultProp = {
  toggle_transfers: PropTypes.func,
  toggle_all_transfers: PropTypes.func,
  //  filter: 'all',
};

export default connect(mapStateToProps, actions)(Filter);
