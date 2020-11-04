import './App.css';
import { Switch, Route } from "react-router-dom"
import LoginScreen from "../src/pages/Login/index"
import SignUp from "../src/pages/Sign-Up/index"
import Navigation from './components/Navigations/Navigation';
import HomePage from "./pages/HomePage/HomePage"
import Mentors from './pages/Mentor/Mentors';


function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <Switch>
          <Route
            exact path="/"
            component={HomePage}
          />
          <Route
            exact path="/mentor"
            component={Mentors}
          />
          <Route
            exact path="/login"
            component={LoginScreen}
          />
          <Route
            exact path="/signup"
            component={SignUp}
          />
        </Switch>
      </header>

    </div>
  );
}

export default App;
