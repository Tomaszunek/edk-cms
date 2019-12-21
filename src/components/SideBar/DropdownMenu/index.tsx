import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../../store';
import styles from './styles.scss';

interface IProps {
  dropdownMenu: any;
}

const DropdownMenu: FunctionComponent<IProps> = props => {
  const { dropdownMenu } = props;
  console.log(dropdownMenu);

  return <nav className={styles.DropdownMenu}>DropdownMenu</nav>;
};

const mapStateToProps = (state: IRootState) => ({
  dropdownMenu: state.dropdownMenu
});

export default connect(
  mapStateToProps,
  {}
)(DropdownMenu);
