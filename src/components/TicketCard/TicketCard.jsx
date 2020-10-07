import React from 'react';
import { Card } from 'antd';
import classes from './TicketCard.module.scss';

const TicketCard = () => {
  return (
    <Card>
      <div className={classes.card__tickets_header}>
        <span className={classes.price}>13 400 P</span>
        <div className={classes.card__logo} />
      </div>
      <div className={classes.card__tickets_ticket}>
        <div className={classes.card__parts}>
          <span className={classes.secondary}>MOW-HKT</span>
          <span className={classes.primary}>10:45-08:00</span>
        </div>
        <div className={classes.card__parts}>
          <span className={classes.secondary}>В ПУТИ</span>
          <span className={classes.primary}>21ч 15м</span>
        </div>
        <div className={classes.card__parts}>
          <span className={classes.secondary}>2 пересадки</span>
          <span className={classes.primary}>HKG, JNB</span>
        </div>
      </div>
      <div className={classes.card__tickets_ticket}>
        <div className={classes.card__parts}>
          <span className={classes.secondary}>MOW-HKT</span>
          <span className={classes.primary}>10:45-08:00</span>
        </div>
        <div className={classes.card__parts}>
          <span className={classes.secondary}>В ПУТИ</span>
          <span className={classes.primary}>21ч 15м</span>
        </div>
        <div className={classes.card__parts}>
          <span className={classes.secondary}>2 пересадки</span>
          <span className={classes.primary}>HKG, JNB</span>
        </div>
      </div>
    </Card>
  );
};

export default TicketCard;
