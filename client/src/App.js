import './App.css';
import {Route, Switch} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/">
          <h1>TechWord BoilerPlate</h1>
        </Route>
        <Route exact path="/home">
          <NavBar />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
