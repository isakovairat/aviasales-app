const onTheWayTime = (duration) => {
  return `${Math.floor(duration / 60)}ч ${duration % 60 < 10 ? `0${duration % 60}` : duration % 60}м`;
};

export default onTheWayTime;
