import React, { Component } from 'react';
import Sidebar from './components/Sidebar.js'
import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Sidebar />
        </div>
    );
  }
}

export default App;
