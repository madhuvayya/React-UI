import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Container} />
      <Route path="/register" component={Register} /> 
    </Router>
  );
}

export default App;
