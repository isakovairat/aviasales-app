import defaultState from './state';
import { MOST_FILTERS_CHECK } from '../../actions/types';

const mostFiltersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MOST_FILTERS_CHECK:
      return state.map((filter) => ({ ...filter, isChecked: filter.id === action.payload }));
    default:
      return state;
  }
};

export default mostFiltersReducer;
