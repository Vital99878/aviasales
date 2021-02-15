import React, { useState } from 'react';
import classes from './App.module.scss';
import { response_test } from '../../data';

import CardList from '../Card-List';
import Filter from '../Filter';
import Tabs from '../Tabs';

function App() {
  const [tickets, setTickets] = useState(response_test[0].tickets);

  return (
    <div className={classes.App}>
      <Filter />
      <div className={classes['column-2']}>
        <Tabs />
        <CardList tickets={tickets} />
        <button className={classes.more} type="button">
          Показать еще 5 билетов!
        </button>
      </div>
    </div>
  );
}

export default App;
