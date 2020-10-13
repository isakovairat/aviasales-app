// import {combineReducers} from "redux";
import { TRANSFER_FILTERS_CHECK, TRANSFER_FILTERS_CHECK_ALL, MOST_FILTERS_CHECK } from '../actions/types';

const initialState = {
  tickets: [],
  transferFilters: [
    {
      id: '1',
      title: 'Все',
      isChecked: false,
    },
    {
      id: '2',
      title: 'Без пересадок',
      isChecked: false,
    },
    {
      id: '3',
      title: '1 пересадка',
      isChecked: false,
    },
    {
      id: '4',
      title: '2 пересадки',
      isChecked: false,
    },
    {
      id: '5',
      title: '3 пересадки',
      isChecked: false,
    },
  ],
  mostFilters: [
    {
      id: '1',
      title: 'Самый дешевый',
      isChecked: true,
    },
    {
      id: '2',
      title: 'Самый быстрый',
      isChecked: false,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOST_FILTERS_CHECK:
      // eslint-disable-next-line no-case-declarations
      const mostFilters = state.mostFilters.map((filter) => {
        // eslint-disable-next-line no-param-reassign
        filter.isChecked = !filter.isChecked;

        return filter;
      });
      return { ...state, mostFilters };
    case TRANSFER_FILTERS_CHECK:
      // eslint-disable-next-line no-case-declarations
      const checkboxId = action.payload;
      // eslint-disable-next-line no-case-declarations
      const transferFilters = state.transferFilters.map((filter) => {
        if (filter.id === checkboxId) {
          // eslint-disable-next-line no-param-reassign
          filter.isChecked = !filter.isChecked;
        }

        return filter;
      });
      return { ...state, transferFilters };
    case TRANSFER_FILTERS_CHECK_ALL:
      // eslint-disable-next-line no-case-declarations
      let checkAll;
      if (state.transferFilters[0].isChecked) {
        checkAll = state.transferFilters.map((filter) => {
          // eslint-disable-next-line no-param-reassign
          filter.isChecked = false;

          return filter;
        });
      } else {
        checkAll = state.transferFilters.map((filter) => {
          // eslint-disable-next-line no-param-reassign
          filter.isChecked = true;

          return filter;
        });
      }
      return { ...state, transferFilters: checkAll };
    default:
      return state;
  }
};

export default rootReducer;
