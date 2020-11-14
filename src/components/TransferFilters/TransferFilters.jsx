import React from 'react';
import { Checkbox } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './TransferFilters.module.scss';
import * as actions from '../../actions';

const TransferFilters = ({ transferFilters, transferFiltersCheck, transferFiltersCheckAll }) => {
  const transferCheckboxes = transferFilters.map((filter) => {
    if (filter.id === 4) {
      return (
        <Checkbox key={filter.id} onChange={transferFiltersCheckAll} checked={filter.isChecked}>
          {filter.title}
        </Checkbox>
      );
    }
    return (
      <Checkbox key={filter.id} onChange={() => transferFiltersCheck(filter.id)} checked={filter.isChecked}>
        {filter.title}
      </Checkbox>
    );
  });

  return (
    <section className={classes.transfer}>
      <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      {transferCheckboxes}
    </section>
  );
};

TransferFilters.defaultProps = {
  transferFilters: [],
  transferFiltersCheck: () => {},
  transferFiltersCheckAll: () => {},
};

TransferFilters.propTypes = {
  transferFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      isChecked: PropTypes.bool,
    })
  ),
  transferFiltersCheck: PropTypes.func,
  transferFiltersCheckAll: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    transferFilters: state.transferFilters,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { transferFiltersCheck, transferFiltersCheckAll } = bindActionCreators(actions, dispatch);

  return {
    transferFiltersCheck,
    transferFiltersCheckAll,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferFilters);
