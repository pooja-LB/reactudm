import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  state = {
  }

  render() {
    return (
      <div>
          <BrowserRouter>
              <Layout />
          </BrowserRouter>
      </div>
    );
  }

}


export default App;
