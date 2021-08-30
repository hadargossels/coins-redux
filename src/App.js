import React from 'react';
import './App.css';
import Coins from './components/Coins';
import { Route, HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Coins}/>
      </Router>
      
    </div>
  );
}

export default App;
