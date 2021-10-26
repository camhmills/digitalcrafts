import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { MainContainerDiv } from './components/styledcomponents/MainContainer';

function App() {
  const [viewSidebar, setViewSidebar] = useState(true);
  return (
    <Router>
      <Header viewSidebar={viewSidebar} setViewSidebar={setViewSidebar}/>
      <Switch>
      <MainContainerDiv>
        <Sidebar viewSidebar={viewSidebar}/>
        <Route path='/dashboard'>
        <Dashboard/>
        </Route>
      </MainContainerDiv>
      </Switch>
    </Router>
  );
}

export default App;
