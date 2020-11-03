import './App.css';
import { Switch, Route } from "react-router-dom"
import LoginScreen from "../src/pages/Login/index"
import SignUp from "../src/pages/Sign-Up/index"
import Navigation from './components/Navigations/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">

        Back 2 Basics
      </header>
      <Switch>
        <Route
          exact path="/login"
          component={LoginScreen}
        />
        <Route
          exact path="/signup"
          component={SignUp}
        />
      </Switch>
    </div>
  );
}

export default App;
