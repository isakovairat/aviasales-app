import defaultState from './state';
import { TRANSFER_FILTERS_CHECK, TRANSFER_FILTERS_CHECK_ALL } from '../../actions/types';

function transferFiltersCheck(prevState, checkboxId) {
  return prevState.map((filter) => {
    if (filter.id === '4' && filter.isChecked) {
      // eslint-disable-next-line no-param-reassign
      filter.isChecked = false;
    }
    if (filter.id === checkboxId) {
      // eslint-disable-next-line no-param-reassign
      filter.isChecked = !filter.isChecked;
    }

    return filter;
  });
}

function transferFiltersCheckAll(prevState) {
  const isAllCheckedAlready = prevState[0].isChecked;
  return prevState.map((filter) => {
    // eslint-disable-next-line no-param-reassign
    filter.isChecked = !isAllCheckedAlready;
    return filter;
  });
}

const transferFiltersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TRANSFER_FILTERS_CHECK:
      return transferFiltersCheck(state, action.payload);
    case TRANSFER_FILTERS_CHECK_ALL:
      return transferFiltersCheckAll(state);
    default:
      return state;
  }
};

export default transferFiltersReducer;
