const sortTicketsByTransfers = (transferFilters, allTickets) => {
  let ticketsForRender = [];

  transferFilters.forEach((filter) => {
    if (filter.isChecked && filter.id !== 4) {
      ticketsForRender = [
        ...ticketsForRender,
        ...allTickets.filter(
          (ticket) => Math.max(ticket.segments[0].stops.length, ticket.segments[1].stops.length) === filter.id
        ),
      ];
    }
  });

  return ticketsForRender;
};

export default sortTicketsByTransfers;
