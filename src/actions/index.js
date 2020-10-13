import { MOST_FILTERS_CHECK, TRANSFER_FILTERS_CHECK, TRANSFER_FILTERS_CHECK_ALL } from './types';

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

export { mostFiltersCheck, transferFiltersCheck, transferFiltersCheckAll };
