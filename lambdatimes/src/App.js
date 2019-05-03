import React, { Component } from 'react';
import withAuthenticate from './components/withAuthenticate';
import Login from './components/Login';
import AppContent from './components/AppContent';

// import Carousel from './components/Carousel/Carousel';

const ComponentForPage= withAuthenticate(AppContent)(Login);

const App = () => {
  return (
    <div className="App">
      <ComponentForPage />
    </div>
  );
}

export default App;
