import React, { useState } from 'react';
import './App.scss';

import CardList from '../Card-List';
import Filter from '../Filter';
import Tabs from '../Tabs';

function App() {
  const [tickets, setTickets] = useState(['ticket-1', 'ticket-2', 'ticket-3']);

  return (
    <div className="App">
      <Filter />
      <div className="column-2">
        <Tabs />
        <CardList tickets={tickets} />
        <button className="more" type="button">
          Показать ещё 5 билетов!
        </button>
      </div>
    </div>
  );
}

export default App;
