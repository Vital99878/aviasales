import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './More.module.scss';

const More = ({ index, more_tickets }) => (
  <button
    className={classes.more}
    onClick={() => {
      index += 5;
      more_tickets(index);
    }}
    type="button"
  >
    Показать еще 5 билетов!
  </button>
);

More.propTypes = {
  index: PropTypes.number.isRequired,
  more_tickets: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  index: state.index,
});

const mapDispatchToProps = (dispatch) => ({
  more_tickets: (index) => dispatch({ type: 'MORE', index }),
});

export default connect(mapStateToProps, mapDispatchToProps)(More);
