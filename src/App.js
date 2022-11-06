import React from 'react';
import './App.css';
import Feed from "./Appbody/Feed";
import Header from './Header/Header';
import Sidebar from './Appbody/Sidebar';

function App() {
  return (
    <div className="app">
      {/*Header */}
      <Header />
      {/*App body */}
      <div className='app__body'>
        <Sidebar />
        <Feed />
        {/*Widgets */}
      </div>

    </div>
  );
}

export default App;
