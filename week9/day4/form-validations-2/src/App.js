import Header from './components/Header'
import Account from './components/Account'
import Garage from './components/Garage'
import Form from './components/Form'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import {SidebarFormContainer} from './styled-components/PageStyle'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
      <Header/>
      <SidebarFormContainer>
      <Sidebar />

      <Route path="/login">
        <Form />
      </Route>

      <Route exact path = "/">
      <Home />
      </Route>

      <Route path = "/account">
      <Account/>
      </Route>

      <Route path = "/garage">
      <Garage/>
      </Route>

      </SidebarFormContainer>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
