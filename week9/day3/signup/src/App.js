import Signup from './components/Signup'
import DB from './components/DB'
import {useState} from 'react'
import "./components/index.css"


function App() {
  const [userList, setuserList] = useState([])
  return (
    <div className="App">
      <Signup userList = {userList} setuserList={setuserList}/>
      <DB userList = {userList}/>
    </div>
  );
}

export default App;
