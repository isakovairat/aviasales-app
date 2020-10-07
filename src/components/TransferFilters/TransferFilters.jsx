import React from 'react';
import { Checkbox } from 'antd';
import classes from './TransferFilters.module.scss';

const LABELS = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const TransferFilters = () => {
  const transferCheckboxes = LABELS.map((label) => {
    return <Checkbox>{label}</Checkbox>;
  });

  return (
    <section className={classes.transfer}>
      <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      {transferCheckboxes}
    </section>
  );
};

export default TransferFilters;
