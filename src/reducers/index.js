import { combineReducers } from 'redux';
import mostFiltersReducer from './mostFilters/reducer';
import transferFiltersReducer from './transferFilters/reducer';
import searchIdReducer from './searchId/reducer';
import ticketsReducer from './tickets/reducer';

const rootReducer = combineReducers({
  transferFilters: transferFiltersReducer,
  mostFilters: mostFiltersReducer,
  searchId: searchIdReducer,
  tickets: ticketsReducer,
});

export default rootReducer;
