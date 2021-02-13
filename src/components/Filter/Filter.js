import React from 'react';
import './Filter.scss';
// import PropTypes from 'prop-types';
// import { formatDistance } from 'date-fns';

function Filter() {
  return <div className="filter">Filter</div>;
}

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
