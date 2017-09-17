import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from 'components/navbar';
import Dashboard from 'components/dashboard';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <ToastContainer hideProgressBar={true}/>
        <Navbar/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
