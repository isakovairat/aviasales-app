import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TicketCard from '../TicketCard';
import * as classes from './TicketsContainer.module.scss';

const TicketsContainer = ({ tickets, transferFilters, mostFilters }) => {
  // console.log(tickets);
  const filtersIsEmpty = transferFilters.reduce((acc, filter) => (filter.isChecked ? acc + 1 : acc), 0);
  const ticketsForRender = tickets.tickets.slice(0, 10);

  if (mostFilters[0].isChecked) {
    ticketsForRender.sort((ticketA, ticketB) => ticketA.price - ticketB.price);
  }
  if (mostFilters[1].isChecked) {
    ticketsForRender.sort(
      (ticketA, ticketB) =>
        ticketA.segments.reduce((acc, segment) => acc + segment.duration, 0) -
        ticketB.segments.reduce((acc, segment) => acc + segment.duration, 0)
    );
  }

  return (
    <div className={classes.container}>
      {filtersIsEmpty ? (
        ticketsForRender.map((ticket) => {
          return <TicketCard key={`${ticket.carrier}_${ticket.price}`} ticket={ticket} />;
        })
      ) : (
        <div className={classes.empty}>
          <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
        </div>
      )}
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
      id: PropTypes.string,
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
