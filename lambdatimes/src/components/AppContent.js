import React, { Component } from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Content from './Content/Content';
// import Carousel from './components/Carousel/Carousel';


const AppContent = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      {/* <Carousel /> */}
      <Content />
    </div>
  );
}

export default AppContent;
