import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import AviaContainer from '../AviaContainer';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <AviaContainer />
    </Provider>
  );
};

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};

export default App;
