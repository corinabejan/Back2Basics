import './App.css';
import { Switch, Route } from "react-router-dom"
import LoginScreen from "../src/pages/Login/index"
import SignUp from "../src/pages/Sign-Up/index"
import Navigation from './components/Navigations/Navigation';
import HomePage from "./pages/HomePage/HomePage"
import Mentors from './pages/Mentor/Mentors';
import Mentee from './pages/Mentee/Mentee-list/Mentee'
import MenteeDetail from './pages/Mentee/Mentee-detail'
import MentorList from './pages/Mentor/Mentor-list';


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
            exact path="/mentors"
            component={MentorList}
          />
          <Route
            exact path="/mentors/:id"
            component={Mentors}
          />
          <Route
            exact path="/mentee"
            component={Mentee}
          />
          <Route
            exact path="/mentee/:id"
            component={MenteeDetail}
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
