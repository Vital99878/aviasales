import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Tabs.module.scss';

function Tabs({ onToggleTab, tab_value }) {
  const { tabs, tab, tabActive } = classes;

  function remove_class(current_class) {
    const item = document.querySelector(`.${current_class}`);
    item.classList.remove(current_class);
  }

  const toggle_tab = (evt) => {
    const item = evt.target;
    const tab_content = evt.target.textContent;
    if (item.classList.contains(tab)) {
      remove_class(tabActive);
      item.classList.add(tabActive);
    }
    if (tab_content !== tab_value) {
      onToggleTab(tab_content);
    }
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
  tab_value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  tab_value: state.tab_value,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleTab: (tab_value) => dispatch({ type: 'TAB', tab_value }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
