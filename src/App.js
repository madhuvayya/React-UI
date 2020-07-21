import React from 'react';
import Header from './components/Header'
import Subscription from './components/Subscription'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div id="container">
        <Header />
        <Subscription />
        <Footer />
      </div>
    </div>
  );
}

export default App;
