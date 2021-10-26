import CardContainer from './components/CardContainer';
import {data} from './components/pokedata'

function App() {
  const pokedata = data
  return (
    <div className="App">
      <h1>Pokemon Gallery</h1>
      <CardContainer pokedata = {pokedata}/>
    </div>
  );
}

export default App;
