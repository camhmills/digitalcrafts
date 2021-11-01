import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';

import { MainContainer, SubContainer } from './styled-components/MainContainerStyle';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  const itemData = useSelector(state => state.HomeReducer)
  const wishList = useSelector(state => state.WishList)
  const cartList = useSelector(state => state.CartData)
  const [viewsideBar, setviewsideBar] = useState(true)
  
  console.log(itemData)
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
              <Home itemData = {itemData} />
            </Route>
            <Route exact path = "/wishlist">
              <Wishlist wishList = {wishList} />
            </Route>
            <Route exact path = "/cart">
              <Cart cartList = {cartList} />
            </Route>
            </SubContainer>
        </MainContainer>
      </Switch>
    </Router>
  );
}

export default App;
