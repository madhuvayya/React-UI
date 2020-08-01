import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Container from './pages/Container';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Container} />
      <Route path="/register" component={Register} /> 
    </Router>
  );
}

export default App;
