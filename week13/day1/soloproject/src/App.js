import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Error from './components/Error';

import { MainContainer, SubContainer } from './styled-components/MainContainerStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  const itemData = useSelector(state => state.HomeReducer)
  const wishList = useSelector(state => state.WishList)
  const cartList = useSelector(state => state.CartData)
  const [viewsideBar, setviewsideBar] = useState(false)

  const totalDue = []
    cartList.map(item => {totalDue.push(item.price)})
    let sum = totalDue.reduce(function (a, b) {
        return a+b;
    }, 0);
  
  return (
    <Router>
      <Switch>
        <MainContainer>
          <Header viewsideBar={viewsideBar} setviewsideBar={setviewsideBar} sum = {sum}/>
            <SubContainer>
              <Sidebar viewsideBar = {viewsideBar}/>
            <Switch>
            <Route exact path = "/home">
              <Home itemData = {itemData} />
            </Route>
            <Route exact path = "/wishlist">
              <Wishlist wishList = {wishList} />
            </Route>
            <Route exact path = "/cart">
              <Cart cartList = {cartList} sum = {sum} />
            </Route>
            <Route path = "*">
              <Error/>
            </Route>
            </Switch> 
            </SubContainer>
        </MainContainer>
      </Switch>
    </Router>
  );
}

export default App;
