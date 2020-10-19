import {
  MOST_FILTERS_CHECK,
  TRANSFER_FILTERS_CHECK,
  TRANSFER_FILTERS_CHECK_ALL,
  GET_SEARCH_ID_SUCCESS,
  GET_SEARCH_ID_REQUEST,
  GET_TICKETS_REQUEST,
  GET_TICKETS_SUCCESS,
} from './types';

import { getSearchId as fetchSearchId, getTickets as fetchTickets } from '../middleware/api';

const transferFiltersCheck = (checkboxId) => {
  return {
    type: TRANSFER_FILTERS_CHECK,
    payload: checkboxId,
  };
};

const transferFiltersCheckAll = () => {
  return {
    type: TRANSFER_FILTERS_CHECK_ALL,
  };
};

const mostFiltersCheck = () => {
  return {
    type: MOST_FILTERS_CHECK,
  };
};

const getTickets = () => {
  return async (dispatch) => {
    dispatch({ type: GET_SEARCH_ID_REQUEST });
    dispatch({ type: GET_TICKETS_REQUEST });
    const searchId = await fetchSearchId();
    dispatch({ type: GET_SEARCH_ID_SUCCESS, payload: searchId });
    const tickets = await fetchTickets(searchId.searchId);
    dispatch({ type: GET_TICKETS_SUCCESS, payload: tickets });

    // .then(response => {
    //   dispatch({type: GET_TICKETS_SUCCESS, payload: response});
    // })
    // .then(response => {
    //   dispatch({type: GET_SEARCH_ID_SUCCESS, payload: response});
    // }
  };
};

// const getTickets = (searchId) => {
//   return (dispatch) => {
//     dispatch({type: GET_TICKETS_REQUEST});
//     fetchTickets(searchId)
//       .then(response => {
//         dispatch({type: GET_TICKETS_SUCCESS, payload: response});
//       })
//   }
// }

export { mostFiltersCheck, transferFiltersCheck, transferFiltersCheckAll, getTickets };
