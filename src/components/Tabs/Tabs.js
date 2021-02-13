import React from 'react';
import './Tabs.scss';
// import PropTypes from 'prop-types';
// import { formatDistance } from 'date-fns';

function Tabs() {
  return (
    <div className="tabs">
      <button className="tab tab--active" type="button">
        1
      </button>
      <button className="tab" type="button">
        2
      </button>
      <button className="tab" type="button">
        3
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
