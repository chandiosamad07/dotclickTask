import React from 'react';
import './App.css';
import MainContainer from './Components/Layout/MainContainer';
import Sidebar from './Components/Layout/Sidebar';

function App() {
  return (
    <React.Fragment >
      <Sidebar/>
      <MainContainer/>
    </React.Fragment>
  );
}

export default App;
