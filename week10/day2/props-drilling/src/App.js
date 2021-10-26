import Dealership from "./components/dealership/Dealership";
import Neighborhood from "./components/neighborhood/Neighborhood";
import {useState} from 'react';
import './App.css';

function App() {
  const [mustang, setMustang] = useState("2021 Mustang GT")
  return (
    <div className="box">
      props drilling
      <Neighborhood mustang = {mustang}/>
      <Dealership mustang = {mustang}/>
    </div>
  );
}

export default App;
