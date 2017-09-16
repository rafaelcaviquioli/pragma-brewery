import React from 'react';
import styles from './navbar.scss';
import breweryLogo from './brewery-logo.svg';

class Navbar extends React.PureComponent {
  render() {
    return (
      <div className={styles.navbarWrapper}>
        <nav className={`navbar fixed-top ${styles.navbar}`}>
          <div className="navbar-brand">
            <img src={breweryLogo} alt="Logo" height="52px"/>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
