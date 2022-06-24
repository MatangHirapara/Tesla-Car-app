import React from 'react';
import './App.css';
import Topbar from './component/dashboard/topbar/Topbar';
import Home from './home/Home';

function App() {
  return (
    <>
      <Topbar/>
      <div>
        <Home/>
      </div>
    </>
  );
}

export default App;
