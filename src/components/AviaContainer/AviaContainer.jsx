import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import Header from '../Header';
import classes from './AviaContainer.module.scss';
import TransferFilters from '../TransferFilters';
import MostFilters from '../MostFilters';
import TicketsContainer from '../TicketsContainer';
import { getTickets } from '../../actions/index';

const AviaContainer = ({ searchId, getTicketsAction }) => {
  useEffect(() => {
    getTicketsAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !searchId.isLoading ? (
    <>
      <Header />
      <div className={classes.container}>
        <TransferFilters />
        <div className={classes.mostFiltersAndTicketsCardsContainer}>
          <MostFilters />
          <TicketsContainer />
        </div>
      </div>
    </>
  ) : (
    <div className={classes.pageContainer}>
      <Spin size="large" />
    </div>
  );
};

AviaContainer.defaultProps = {
  searchId: {
    searchId: '',
    isLoading: false,
  },
  getTicketsAction: () => {},
};

AviaContainer.propTypes = {
  searchId: PropTypes.shape({
    searchId: PropTypes.string,
    isLoading: PropTypes.bool,
  }),
  getTicketsAction: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    searchId: state.searchId,
    tickets: state.tickets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTicketsAction: (searchId) => dispatch(getTickets(searchId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AviaContainer);
