import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TicketCard from '../TicketCard';
import * as classes from './TicketsContainer.module.scss';

const TicketsContainer = ({ tickets }) => {
  const ticketsForRender = tickets.tickets.slice(0, 5);

  return (
    <div className={classes.container}>
      {ticketsForRender.map((ticket) => {
        return <TicketCard key={`${ticket.carrier}_${ticket.price}`} ticket={ticket} />;
      })}
    </div>
  );
};

TicketsContainer.defaultProps = {
  tickets: {},
};

TicketsContainer.propTypes = {
  tickets: PropTypes.shape({
    isLoading: PropTypes.bool,
    stop: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    tickets: PropTypes.array,
  }),
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  };
};

export default connect(mapStateToProps)(TicketsContainer);
