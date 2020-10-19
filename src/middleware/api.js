const API_ROOT = 'https://front-test.beta.aviasales.ru/';
const URL_CARRIER = 'https://pics.avs.io/99/36/';

const getSearchId = async () => {
  const response = await fetch(`${API_ROOT}search`);
  const data = await response.json();

  return data;
};

const getTickets = async (searchId) => {
  const response = await fetch(`${API_ROOT}tickets?searchId=${searchId}`);
  const data = await response.json();

  return data;
};

export { getSearchId, getTickets, URL_CARRIER };
