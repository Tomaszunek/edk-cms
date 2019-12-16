import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';

import { IRootState } from '../../store';

import { thunkSendMessage } from '../../thunks';

import Header from '../../components/Header';
import GridLayout from '../../components/GridLayout';

interface WelcomeProps {
  thunkSendMessage: any;
}

const Welcome: FunctionComponent<WelcomeProps> = props => {
  const { thunkSendMessage } = props;

  useEffect(() => {
    thunkSendMessage();
  });

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
      <section className="">
        <GridLayout/>
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state: IRootState) => ({});

export default connect(
  mapStateToProps,
  { thunkSendMessage }
)(Welcome);
