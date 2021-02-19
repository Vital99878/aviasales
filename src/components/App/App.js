import React from 'react';
import classes from './App.module.scss';

import CardList from '../Card-List';
import Filter from '../Filter';
import Tabs from '../Tabs';

function App() {
  return (
    <div className={classes.App}>
      <Filter />
      <div className={classes['column-2']}>
        <Tabs />
        <CardList />
        <button className={classes.more} type="button">
          Показать еще 5 билетов!
        </button>
      </div>
    </div>
  );
}

export default App;
