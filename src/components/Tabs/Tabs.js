import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Tabs.module.scss';

function Tabs({ sorted_tickets, filtered_tickets, onToggleTab, transfers }) {
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

    if (tab_value === 'Самый дешевый') {
      sorted_tickets = sorted_tickets.sort((a, b) => a.price - b.price);
    }
    if (tab_value === 'Самый быстрый') {
      sorted_tickets = sorted_tickets.sort((a, b) => {
        const duration_a = a.segments[0].duration + a.segments[1].duration;
        const duration_b = b.segments[0].duration + b.segments[1].duration;
        return duration_a - duration_b;
      });
    }

    filtered_tickets = sorted_tickets.filter((ticket) =>
      transfers.includes(ticket.segments[0].stops.length + ticket.segments[1].stops.length)
    );

    onToggleTab(filtered_tickets);
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
  filtered_tickets: PropTypes.arrayOf.isRequired,
  sorted_tickets: PropTypes.arrayOf.isRequired,
  transfers: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  sorted_tickets: state.sorted_tickets,
  filtered_tickets: state.filtered_tickets,
  transfers: state.transfers,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleTab: (filtered_tickets) => dispatch({ type: 'TAB', filtered_tickets }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
