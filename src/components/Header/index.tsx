import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const Header: FunctionComponent<{}> = () => (
  <header className={styles.Navigation}>
    <nav>
      <Link to="/">EDK</Link>
      <div>User</div>
    </nav>
  </header>
);

export default Header;
