import defaultState from './state';
import { MOST_FILTERS_CHECK } from '../../actions/types';

const mostFiltersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MOST_FILTERS_CHECK:
      return state.map((filter) => {
        // eslint-disable-next-line no-param-reassign
        filter.isChecked = filter.id === action.payload;

        return filter;
      });
    default:
      return state;
  }
};

export default mostFiltersReducer;
