import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { thunkDropdownData } from '../../thunks';
import DropdownMenu from './DropdownMenu';
import styles from './styles.scss';

interface IProps {
  thunkDropdownData: typeof thunkDropdownData;
}

const SideBar: FunctionComponent<IProps> = props => {
  const { thunkDropdownData: thunkDropdown } = props;
  useEffect(() => {
    thunkDropdown();
  });

  return (
    <nav className={styles.SideBar}>
      <DropdownMenu />
    </nav>
  );
};

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { thunkDropdownData }
)(SideBar);
