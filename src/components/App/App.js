import React from 'react';
import classes from './App.module.scss';
import TicketsList from '../Tickets-List';
import Filter from '../Filter';
import Tabs from '../Tabs';
import More from '../More';

function App() {
  return (
    <div className={classes.App}>
      <Filter />
      <div className={classes['column-2']}>
        <Tabs />
        <TicketsList />
      </div>
    </div>
  );
}

export default App;
