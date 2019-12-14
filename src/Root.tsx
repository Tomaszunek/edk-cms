import React, { FunctionComponent } from 'react';

import { Provider } from 'react-redux';
import App from './App';
import Welcome from './pages/Welcome';
import { configureStore } from './store';

const store = configureStore();

const Root: FunctionComponent = () => (
  <Provider store={store}>
    <App>
      <Welcome />
    </App>
  </Provider>
);

export default Root;
