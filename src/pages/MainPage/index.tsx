import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { IRootState } from '../../store';
import { thunkSendMessage } from '../../thunks';
import GridLayout from '../../components/GridLayout';

interface MainPageProps {
  thunkSendMessage: any;
}

const MainPage: FunctionComponent<MainPageProps> = props => {
  const { thunkSendMessage } = props;

  useEffect(() => {
    thunkSendMessage();
  });  

  return (
    <Fragment>
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
)(MainPage);
