import Grid from "./components/Grid";
import Header from "./components/Header";
import { MainContainerDiv } from "./styledcomponents/MainContainerStyle";


function App() {
  return (
    <Header/>
    <MainContainerDiv>
      <Grid/>
    </MainContainerDiv>
  );
}

export default App;
