import React from "react";
import { Card } from "antd";
import classes from './TicketCard.module.scss';

const TicketCard = () => {
  return (
    <Card>
      <div style={{display: "flex", flexDirection: "column" ,padding: "20", width: '100%'}}>
        <div style={{display: "flex", justifyContent: "space-between", width: '100%', marginBottom: "20px"}}>
          <span className={classes.price}>13 400 P</span>
          <span>LOGO</span>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
          <div style={{display: "flex", flexDirection: "column", flexBasis: "33%"}}>
            <span className={classes.secondary}>MOW-HKT</span>
            <span className={classes.primary}>10:45-08:00</span>
          </div>
          <div style={{display: "flex", flexDirection: "column", flexBasis: "33%"}}>
            <span className={classes.secondary}>В ПУТИ</span>
            <span className={classes.primary}>21ч 15м</span>
          </div>
          <div style={{display: "flex", flexDirection: "column", flexBasis: "33%"}}>
            <span className={classes.secondary}>2 пересадки</span>
            <span className={classes.primary}>HKG, JNB</span>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{display: "flex", flexDirection: "column", flexBasis: "33%"}}>
            <span className={classes.secondary}>MOW-HKT</span>
            <span className={classes.primary}>10:45-08:00</span>
          </div>
          <div style={{display: "flex", flexDirection: "column", flexBasis: "33%"}}>
            <span className={classes.secondary}>В ПУТИ</span>
            <span className={classes.primary}>21ч 15м</span>
          </div>
          <div style={{display: "flex", flexDirection: "column", flexBasis: "33%"}}>
            <span className={classes.secondary}>2 пересадки</span>
            <span className={classes.primary}>HKG, JNB</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TicketCard;
