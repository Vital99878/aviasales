import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Tabs.module.scss';

function Tabs({ onToggleTab, tab_value }) {
  const { tabs, tab, tabActive } = classes;
  const [activeList, setActiveClass] = useState([true, false]);
  const [active_1, active_2] = activeList;

  function toggle_tab(evt) {
    const tabContent = evt.target.textContent;
    const tabIndex = Number(evt.target.dataset.index);
    setActiveClass(() => activeList.map((active, index) => tabIndex === index));
    if (tabContent !== tab_value) {
      onToggleTab(tabContent);
    }
  }

  return (
    <div className={tabs}>
      <button className={`${tab} ${active_1 ? tabActive : null}`} onClick={toggle_tab} type="button" data-index="0">
        Самый дешевый
      </button>
      <button className={`${tab} ${active_2 ? tabActive : null}`} onClick={toggle_tab} type="button" data-index="1">
        Самый быстрый
      </button>
    </div>
  );
}

Tabs.propTypes = {
  onToggleTab: PropTypes.func.isRequired,
  tab_value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  tab_value: state.tab_value,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleTab: (tab_value) => dispatch({ type: 'TAB', tab_value }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
