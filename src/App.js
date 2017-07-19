import React, { Component } from 'react';
import Sidebar from './components/Sidebar.js'
import Header from './components/Header.js'
import Main from './components/Main.js'

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Main />
        </div>
    );
  }
}

export default App;
