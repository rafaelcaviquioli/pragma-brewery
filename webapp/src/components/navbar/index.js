import React from 'react';
import styles from './styles.scss';
import logo from './logo.svg';

class Navbar extends React.PureComponent {
  render() {
    return (
      <div className={styles.navbarWrapper}>
        <nav className={`navbar fixed-top ${styles.navbar}`}>
          <div className="navbar-brand">
            <img src={logo} alt="Logo" height="52px"/>
            <span className={styles.brandName}>Pragma Brewery</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
