import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import TicketCard from '../TicketCard';
import * as classes from './TicketsContainer.module.scss';
import sortTicketsByTransfers from '../../utils/sortTicketsByTransfers';
import sortByMost from '../../utils/sortByMost';

const TicketsContainer = ({ tickets, transferFilters, mostFilters }) => {
  const filtersIsEmpty = transferFilters.reduce((acc, filter) => (filter.isChecked ? acc + 1 : acc), 0);
  const allTickets = tickets.tickets;

  const ticketsRender = () => {
    if (filtersIsEmpty) {
      const sortedByTransfers = sortTicketsByTransfers(transferFilters, allTickets);
      const ticketsForRender = sortByMost(mostFilters, sortedByTransfers);
      return ticketsForRender.slice(0, 5).map((ticket) => {
        return (
          <TicketCard
            key={`${ticket.carrier}_${ticket.price}_${ticket.segments[0].duration * ticket.segments[1].duration}`}
            ticket={ticket}
          />
        );
      });
    }

    return (
      <div className={classes.empty}>
        <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
      </div>
    );
  };
  return (
    <div className={classes.container}>
      {!tickets.stop && <Spin size="large" />}
      {ticketsRender()}
    </div>
  );
};

TicketsContainer.defaultProps = {
  tickets: {},
  transferFilters: [],
  mostFilters: [],
};

TicketsContainer.propTypes = {
  tickets: PropTypes.shape({
    isLoading: PropTypes.bool,
    stop: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    tickets: PropTypes.array,
  }),
  transferFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      isChecked: PropTypes.bool,
    })
  ),
  mostFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      isChecked: PropTypes.bool,
    })
  ),
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    transferFilters: state.transferFilters,
    mostFilters: state.mostFilters,
  };
};

export default connect(mapStateToProps)(TicketsContainer);
