import * as dayjs from 'dayjs';

const getFormattedDate = (date, duration) => {
  const departureTime = `${dayjs(date).hour() < 10 ? `0${dayjs(date).hour()}` : dayjs(date).hour()}:${
    dayjs(date).minute() < 10 ? `0${dayjs(date).minute()}` : dayjs(date).minute()
  }`;
  const totalMinutes = dayjs(date).hour() * 60 + dayjs(date).minute() + duration;

  return `${departureTime} - ${
    Math.floor(totalMinutes / 60) % 24 < 10
      ? `0${Math.floor(totalMinutes / 60) % 24}`
      : Math.floor(totalMinutes / 60) % 24
  }:${totalMinutes % 60 < 10 ? `0${totalMinutes % 60}` : totalMinutes % 60}`;
};

export default getFormattedDate;
