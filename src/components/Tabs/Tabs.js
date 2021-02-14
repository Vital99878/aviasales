/* eslint-disable no-console */
import React from 'react';
import './Tabs.scss';
// import PropTypes from 'prop-types';
// import { formatDistance } from 'date-fns';

function Tabs() {
  return (
    <div className="tabs">
      <button className="tab tab--active" type="button">
        Самый дешевый
      </button>
      <button className="tab" type="button">
        Самый быстрый
      </button>
      <button className="tab" type="button">
        Оптимальный
      </button>
    </div>
  );
}

Tabs.defaultProp = {
  label: '',
  created: 'ett',
  status: '',
  id: Math.random() * 784,
};
Tabs.propTypes = {
  // label: PropTypes.string.isRequired,
  // created: PropTypes.string.isRequired,
  // toggle_status: PropTypes.func.isRequired,
  // remove_todo: PropTypes.func.isRequired,
  // status: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  // min: PropTypes.number.isRequired,
  // sec: PropTypes.number.isRequired,
};
export default Tabs;
