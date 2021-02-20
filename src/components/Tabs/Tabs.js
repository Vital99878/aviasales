/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Tabs.module.scss';

function Tabs({ test }) {
  const { tabs, tab, tabActive } = classes;

  return (
    <div className={tabs}>
      <button className={`${tab} ${tabActive}`} onClick={test} type="button">
        Самый дешевый
      </button>
      <button className={tab} onClick={test} type="button">
        Самый быстрый
      </button>
    </div>
  );
}

Tabs.propTypes = {
  test: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  visible_tickets: state.visible_tickets,
});

const mapDispatchToProps = (dispatch) => ({
  test: () => dispatch({ type: 'TAB' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
// export default Tabs;
