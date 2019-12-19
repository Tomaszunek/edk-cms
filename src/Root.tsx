import React, { FunctionComponent } from 'react';
import { Route, Switch, Router } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import MainPage from './pages/MainPage';
import Header from './components/Header';
import { configureStore } from './store';
import SideBar from './components/SideBar';
import styles from './main.scss';

const store = configureStore();
const history = createBrowserHistory();

const Root: FunctionComponent = () => (
  <Provider store={store}>
    <Router history={history}>
      <Header />
      <div className={styles.MainContainer}>
        <SideBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root;
