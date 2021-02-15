import React, { useState } from 'react';
import './Filter.scss';

const Filter = () => {
  const [all, setAll] = useState({ check: '', active_class: '' });
  const { check, active_class } = all;

  const toggleAll = (evt) => {
    const filter = evt.target.dataset.toggle;
    const { checked } = evt.target;
    if (filter === 'all') {
      if (checked) {
        setAll({ check: 'checked', active_class: 'filter__item--active' });
      } else {
        setAll({ check: '', active_class: '' });
      }
    }
  };

  const toggleOne = (evt) => {
    const filter = evt.target.dataset.toggle;
    const { checked } = evt.target;
  };

  return (
    <div className="filter">
      <div className="filter__title">Количество пересадок</div>
      <ul className="filter__list">
        <li className={`filter__item ${active_class}`} key="1">
          <label className="filter__checkbox">
            Все
            <input onClick={toggleAll} checked={check} type="checkbox" data-toggle="all" />
            <span className="checkmark" />
          </label>
        </li>
        <li className={`filter__item ${active_class}`} key="2">
          <label className="filter__checkbox">
            Без пересадок
            <input onClick={toggleOne} checked={false} type="checkbox" data-toggle="!all" />
            <span className="checkmark" />
          </label>
        </li>
        <li className={`filter__item ${active_class}`} key="3">
          <label className="filter__checkbox">
            1 пересадка
            <input onClick={toggleOne} checked={check} type="checkbox" data-toggle="1" />
            <span className="checkmark" />
          </label>
        </li>
        <li className={`filter__item ${active_class}`} key="4">
          <label className="filter__checkbox">
            2 пересадки
            <input onClick={toggleOne} checked={check} type="checkbox" data-toggle="2" />
            <span className="checkmark" />
          </label>
        </li>
        <li className={`filter__item ${active_class}`} key="5">
          <label className="filter__checkbox">
            3 пересадки
            <input onClick={toggleOne} checked={check} type="checkbox" data-toggle="3" />
            <span className="checkmark" />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
