const sortByMost = (mostFilters, ticketsForRender) => {
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
};

export default sortByMost;
