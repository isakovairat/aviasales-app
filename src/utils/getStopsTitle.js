const getStopsTitle = (stops) => {
  switch (stops.length) {
    default:
    case 0:
      return 'без пересадок';
    case 1:
      return '1 пересадка';
    case 2:
    case 3:
      return `${stops.length} пересадки`;
  }
};

export default getStopsTitle;
