import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './Filter.scss';

const Filter = ({ toggle_transfers, toggle_all_transfers, active_all }) => {
  const select_all = () => {
    const all_items = document.querySelectorAll('.filter__item');
    const all_inputs = document.querySelectorAll('input');

    if (!active_all) {
      for (let i = 0; i < all_items.length; i++) {
        all_items[i].className = 'filter__item filter__item--active';
      }
      for (let i = 1; i < all_inputs.length; i++) {
        all_inputs[i].checked = true;
      }
      toggle_all_transfers();
    } else {
      for (let i = 0; i < all_items.length; i++) {
        all_items[i].className = 'filter__item';
      }
      for (let i = 1; i < all_inputs.length; i++) {
        all_inputs[i].checked = false;
      }
      toggle_all_transfers();
    }
  };

  const get_quantity_transfer = (evt) => {
    const quantity = evt.target.dataset.transfers;
    toggle_transfers(quantity);
    const item = evt.target.parentNode.parentNode;
    item.classList.toggle('filter__item--active');
  };

  const checked = active_all ? 'checked' : null;
  const active_class = checked ? 'filter__item--active' : '';

  return (
    <div className="filter">
      <div className="filter__title">Количество пересадок</div>
      <ul className="filter__list">
        <li className={`filter__item ${active_class}`} key="1">
          <label className="filter__checkbox">
            Все
            <input onClick={select_all} type="checkbox" checked={checked} data-transfers="8" />
            <span className="checkmark" />
          </label>
        </li>
        <li className="filter__item" key="2">
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
  transfers: state.transfers,
  active_all: state.active_all,
});

Filter.propTypes = {
  toggle_transfers: PropTypes.func.isRequired,
  toggle_all_transfers: PropTypes.func.isRequired,
  active_all: PropTypes.string.isRequired,
};
Filter.defaultProp = {
  toggle_transfers: PropTypes.func,
  toggle_all_transfers: PropTypes.func,
  //  filter: 'all',
};

export default connect(mapStateToProps, actions)(Filter);
