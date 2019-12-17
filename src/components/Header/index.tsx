import React, { FunctionComponent } from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

const Header: FunctionComponent<{}> = () => (
  <header className={styles.Navigation}>
    <nav>
      <Link to="/">EDK</Link>
      <div>User</div>
    </nav>
  </header>
);

export default Header;
