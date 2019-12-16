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
