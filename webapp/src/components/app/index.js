import React from 'react';
import Navbar from '../navbar';
import Dashboard from '../dashboard';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
