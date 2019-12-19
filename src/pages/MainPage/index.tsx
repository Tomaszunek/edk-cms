import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';

import { thunkSendMessage } from '../../thunks';
import GridLayout from '../../components/GridLayout';

interface MainPageProps {
  thunkSendMessage: any;
}

const MainPage: FunctionComponent<MainPageProps> = props => {
  const { thunkSendMessage: thunkMessage } = props;

  useEffect(() => {
    thunkMessage();
  });

  return (
    <Fragment>
      <section className={styles.MainPage}>
        <GridLayout />
      </section>
    </Fragment>
  );
};

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { thunkSendMessage }
)(MainPage);
