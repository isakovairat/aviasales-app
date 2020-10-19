import defaultState from './state';
import { GET_SEARCH_ID_REQUEST, GET_SEARCH_ID_SUCCESS } from '../../actions/types';

const searchIdReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SEARCH_ID_REQUEST:
      return { ...state, isLoading: true };
    case GET_SEARCH_ID_SUCCESS:
      return { ...state, isLoading: false, searchId: action.payload.searchId };
    default:
      return state;
  }
};

export default searchIdReducer;
