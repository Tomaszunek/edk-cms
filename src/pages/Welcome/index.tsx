import React, { FunctionComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';

import { IRootState } from '../../store';
import { INCRE, DECRE } from '../../store/Counter/actions';

import { thunkSendMessage } from '../../thunks';

import Header from '../../components/Header';

import { Counter } from '../../store/Counter/types';

interface WelcomeProps {
  INCRE: typeof INCRE;
  DECRE: typeof DECRE;
  counter: Counter;
  thunkSendMessage: any;
}

const Welcome: FunctionComponent<WelcomeProps> = props => {
  const { counter } = props;
  const { count } = counter;

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'count', name: 'Count' }
  ];

  const rows = [
    { id: 0, title: 'row1', count: 20 },
    { id: 1, title: 'row1', count: 40 },
    { id: 2, title: 'row1', count: 60 }
  ];

  return (
    <Fragment>
      <Header />
      <section className={""}>
        <span>{count}</span>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => rows[i]}
          rowsCount={3}
          minHeight={150}
        />
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state: IRootState) => ({
  counter: state.counter
});

export default connect(
  mapStateToProps,
  { INCRE, DECRE, thunkSendMessage }
)(Welcome);
