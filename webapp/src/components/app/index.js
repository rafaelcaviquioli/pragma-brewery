import React from 'react';
import Navbar from 'components/navbar';
import Dashboard from 'components/dashboard';

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
