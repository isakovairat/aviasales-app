import React from 'react';
import { Radio } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classes from './MostFilters.module.scss';
import * as actions from '../../actions/index';

const MostFilters = ({ mostFilters, mostFiltersCheck }) => {
  const mostButtons = mostFilters.map((filter) => {
    return (
      <Radio.Button key={filter.id} value={filter.id} checked={filter.isChecked}>
        {filter.title}
      </Radio.Button>
    );
  });

  return (
    <div className={classes.container}>
      <Radio.Group defaultValue="1" buttonStyle="solid" onChange={mostFiltersCheck}>
        {mostButtons}
      </Radio.Group>
    </div>
  );
};

MostFilters.defaultProps = {
  mostFilters: [],
  mostFiltersCheck: () => {},
};

MostFilters.propTypes = {
  mostFilters: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.string,
      title: PropTypes.string,
      isChecked: PropTypes.bool,
    })
  ),
  mostFiltersCheck: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    mostFilters: state.mostFilters,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { mostFiltersCheck } = bindActionCreators(actions, dispatch);

  return {
    mostFiltersCheck,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MostFilters);
