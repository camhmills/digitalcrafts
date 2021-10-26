import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';

function App() {
  const user = {
    firstName : "Wendy",
    lastName : "Spruce",
    username : "uspruce"
  }
  return (
    <div className="App">
      <Header user = {user}/>
      <CardContainer/>
    </div>
  );
}

export default App;
