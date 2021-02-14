import React, { useState } from 'react';
import './App.scss';
import { response_test } from '../../data';

import CardList from '../Card-List';
import Filter from '../Filter';
import Tabs from '../Tabs';

function App() {
  const [tickets, setTickets] = useState(response_test[0].tickets);

  return (
    <div className="App">
      <Filter />
      <div className="column-2">
        <Tabs />
        <CardList tickets={tickets} />
        <button className="more" type="button">
          Показать еще 5 билетов!
        </button>
      </div>
    </div>
  );
}

export default App;
