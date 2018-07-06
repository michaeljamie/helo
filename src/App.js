import React, { Component } from 'react';
import Nav from './component/Nav/Nav';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    const currentPath = window.location.href
    
    return (
      <div>
        {currentPath === 'http://localhost:3000/#/' ? '' : <Nav />  }
        { routes }
      </div>
    );
  }
}

export default App;
