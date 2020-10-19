import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import classes from './TicketCard.module.scss';
import getStopsTitle from '../../utils/getStopsTitle';
import getCarrierLogo from '../../utils/getCarrierLogo';
import getFormattedDate from '../../utils/getFormattedDate';
import onTheWayTime from '../../utils/getOnTheWayTime';

const TicketCard = ({ ticket }) => {
  return (
    <Card>
      <div className={classes.card__tickets_header}>
        <span className={classes.price}>
          {ticket.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 })}
        </span>
        <div
          className={classes.card__logo}
          style={{ background: `url(${getCarrierLogo(ticket.carrier)}) no-repeat 50%` }}
        />
      </div>
      <div className={classes.card__tickets_ticket}>
        <div className={classes.card__parts}>
          <span
            className={classes.secondary}
          >{`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}</span>
          <span className={classes.primary}>
            {getFormattedDate(ticket.segments[0].date, ticket.segments[0].duration)}
          </span>
        </div>
        <div className={classes.card__parts}>
          <span className={classes.secondary}>В ПУТИ</span>
          <span className={classes.primary}>{onTheWayTime(ticket.segments[0].duration)}</span>
        </div>
        <div className={classes.card__parts}>
          <span className={classes.secondary}>{getStopsTitle(ticket.segments[0].stops)}</span>
          <span className={classes.primary}>
            {ticket.segments[0].stops.length > 0 ? ticket.segments[0].stops.join(',') : ''}
          </span>
        </div>
      </div>
      <div className={classes.card__tickets_ticket}>
        <div className={classes.card__parts}>
          <span
            className={classes.secondary}
          >{`${ticket.segments[1].origin} - ${ticket.segments[1].destination}`}</span>
          <span className={classes.primary}>
            {getFormattedDate(ticket.segments[1].date, ticket.segments[1].duration)}
          </span>
        </div>
        <div className={classes.card__parts}>
          <span className={classes.secondary}>В ПУТИ</span>
          <span className={classes.primary}>{onTheWayTime(ticket.segments[1].duration)}</span>
        </div>
        <div className={classes.card__parts}>
          <span className={classes.secondary}>{getStopsTitle(ticket.segments[1].stops)}</span>
          <span className={classes.primary}>
            {ticket.segments[1].stops.length > 0 ? ticket.segments[1].stops.join(',') : ''}
          </span>
        </div>
      </div>
    </Card>
  );
};

TicketCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  ticket: PropTypes.object.isRequired,
};

export default TicketCard;
