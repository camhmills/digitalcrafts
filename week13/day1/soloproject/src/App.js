import './App.css';
import { useState } from 'react'
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { MainContainer, SubContainer } from './styled-components/MainContainerStyle';

function App() {
  const [viewsideBar, setviewsideBar] = useState(true)
  return (
    <div className="App">
      <MainContainer>
      <Header viewsideBar={viewsideBar} setviewsideBar={setviewsideBar}/>
      <SubContainer>
      <Sidebar viewsideBar = {viewsideBar}/>
      <Dashboard/>
      </SubContainer>
      </MainContainer>
    </div>
  );
}

export default App;
