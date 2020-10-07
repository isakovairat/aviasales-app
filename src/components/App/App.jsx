import React from 'react';
import Header from '../Header';
import TransferFilters from '../TransferFilters';
import MostFilters from '../MostFilters';
import TicketCard from '../TicketCard';

import classes from './App.module.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <TransferFilters />
        <div className={classes.mostFiltersAndTicketsCardsContainer}>
          <MostFilters />
          <TicketCard />
        </div>
      </div>
    </>
  );
};

export default App;
