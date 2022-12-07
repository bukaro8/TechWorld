import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path="/">
          <h1>TechWord BoilerPlate</h1>
        </Route>
        <Route exact path="/home">
          <NavBar />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
