/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Tabs.module.scss';

function Tabs({ onToggleTab }) {
  const { tabs, tab, tabActive } = classes;

  function remove_class(current_class) {
    const item = document.querySelector(`.${current_class}`);
    item.classList.remove(current_class);
  }

  const toggle_tab = (evt) => {
    const item = evt.target;
    const tab_value = evt.target.textContent;
    if (item.classList.contains(tab)) {
      remove_class(tabActive);
      item.classList.add(tabActive);
    }
    onToggleTab(tab_value);
  };

  return (
    <div className={tabs}>
      <button className={`${tab} ${tabActive}`} onClick={toggle_tab} type="button">
        Самый дешевый
      </button>
      <button className={tab} onClick={toggle_tab} type="button">
        Самый быстрый
      </button>
    </div>
  );
}

Tabs.propTypes = {
  onToggleTab: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onToggleTab: (tab) => dispatch({ type: 'TAB', payload: { tab } }),
});

export default connect(null, mapDispatchToProps)(Tabs);
// export default Tabs;
