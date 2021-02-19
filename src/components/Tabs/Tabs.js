/* eslint-disable no-console */
import React from 'react';
import classes from './Tabs.module.scss';
// import PropTypes from 'prop-types';

function Tabs() {
  const { tabs, tab, tabActive } = classes;
  return (
    <div className={tabs}>
      <button className={`${tab} ${tabActive}`} type="button">
        Самый дешевый
      </button>
      <button className={tab} type="button">
        Самый быстрый
      </button>
      <button className={tab} type="button">
        Оптимальный
      </button>
    </div>
  );
}

export default Tabs;
