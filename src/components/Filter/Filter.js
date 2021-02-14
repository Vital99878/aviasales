import React, { useState } from 'react';
import './Filter.scss';
// import PropTypes from 'prop-types';
// import { formatDistance } from 'date-fns';

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
    const { input } = evt.target;
    // eslint-disable-next-line no-shadow
    const all = document.querySelector("[data-toggle='all']");
    if (all.checked) {
      all.checked = false;
    }
    // todo doing this
  };

  return (
    <div className="filter">
      <div className="filter__title">Количество пересадок</div>
      <ul className="filter__list">
        <li className={`filter__item ${active_class}`} key="1">
          <input onClick={toggleAll} checked={check} type="checkbox" data-toggle="all" />
          <p>Все</p>
        </li>
        <li className={`filter__item ${active_class}`} key="2">
          <input onClick={toggleOne} checked={check} type="checkbox" data-toggle="!all" />
          <p>Без пересадок</p>
        </li>
        <li className={`filter__item ${active_class}`} key="3">
          <input checked={check} type="checkbox" data-toggle="1" />
          <p>1 пересадка</p>
        </li>
        <li className={`filter__item ${active_class}`} key="4">
          <input checked={check} type="checkbox" data-toggle="2" />
          <p>2 пересадка</p>
        </li>
        <li className={`filter__item ${active_class}`} key="5">
          <input checked={check} type="checkbox" data-toggle="3" />
          <p>3 пересадка</p>
        </li>
      </ul>
    </div>
  );
};

Filter.defaultProp = {
  label: '',
  created: 'ett',
  status: '',
  id: Math.random() * 784,
};
Filter.propTypes = {
  // label: PropTypes.string.isRequired,
  // created: PropTypes.string.isRequired,
  // toggle_status: PropTypes.func.isRequired,
  // remove_todo: PropTypes.func.isRequired,
  // status: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  // min: PropTypes.number.isRequired,
  // sec: PropTypes.number.isRequired,
};
export default Filter;
