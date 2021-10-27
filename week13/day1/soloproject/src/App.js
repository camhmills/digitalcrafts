import './App.css';
import { useState } from 'react'
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { MainContainer, SubContainer } from './styled-components/MainContainerStyle';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Wishlist from './components/Wishlist';

function App() {
  const [viewsideBar, setviewsideBar] = useState(true)
  return (
    <Router>
      <Switch>
        <MainContainer>
          <Header viewsideBar={viewsideBar} setviewsideBar={setviewsideBar}/>
            <SubContainer>
              <Sidebar viewsideBar = {viewsideBar}/>
            <Route exact path = "/dashboard">
              <Dashboard/>
            </Route>
            <Route exact path = "/home">
              <Home/>
            </Route>
            <Route exact path = "/wishlist">
              <Wishlist/>
            </Route>  
            </SubContainer>
        </MainContainer>
      </Switch>
    </Router>
  );
}

export default App;
