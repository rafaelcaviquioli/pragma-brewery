import React from 'react';
import Card from '../card';
import styles from './dashboard.scss';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className={`col-md-4 ${styles.col}`}>
              <Card className={styles.col}>
                <h2>Beer​ 1</h2>
                <hr/>
                <h3>X°C</h3>
                <small>4°C - 6°C</small>
              </Card>
            </div>
            <div className={`col-md-4 ${styles.col}`}>
              <Card className={styles.col}>
                <h2>Beer​ 2</h2>
                <hr/>
                <h3>X°C</h3>
                <small>5°C - 6°C</small>
              </Card>
            </div>
            <div className={`col-md-4 ${styles.col}`}>
              <Card className={styles.col}>
                <h2>Beer​ 3</h2>
                <hr/>
                <h3>X°C</h3>
                <small>4°C - 7°C</small>
              </Card>
            </div>
            <div className={`col-md-4 ${styles.col}`}>
              <Card className={styles.col}>
                <h2>Beer​ 4</h2>
                <hr/>
                <h3>X°C</h3>
                <small>6°C - 8°C</small>
              </Card>
            </div>
            <div className={`col-md-4 ${styles.col}`}>
              <Card className={styles.col}>
                <h2>Beer​ 5</h2>
                <hr/>
                <h3>X°C</h3>
                <small>3°C - 5°C</small>
              </Card>
            </div>
            <div className={`col-md-4 ${styles.col}`}>
              <Card className={styles.col}>
                <h2>Beer​ 6</h2>
                <hr/>
                <h3>X°C</h3>
                <small>4°C - 6°C</small>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
