import Form from './components/Form'
import Userlist from './components/Userlist'
import {useState} from 'react'


function App() {
  const [listOfNames, setlistOfNames] = useState([])
  return (
    <div className="App">
      <Form listOfNames = {listOfNames} setListOfNames={setlistOfNames}/>
      <Userlist list={listOfNames}/>
    </div>
  );
}

export default App;
