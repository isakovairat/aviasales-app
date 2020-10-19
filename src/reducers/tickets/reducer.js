import defaultState from './state';
import { GET_TICKETS_SUCCESS, GET_TICKETS_REQUEST } from '../../actions/types';

const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TICKETS_REQUEST:
      return { ...state, isLoading: true };
    case GET_TICKETS_SUCCESS:
      return { ...state, isLoading: false, tickets: action.payload.tickets, stop: action.payload.stop };
    default:
      return state;
  }
};

export default ticketsReducer;
