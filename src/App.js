import './App.css';
import { Switch, Route } from "react-router-dom"
import LoginScreen from "../src/pages/Login/index"
import SignUp from "../src/pages/Sign-Up/index"
import Teacher from "../src/pages/Teacher"
import { AuthProvider } from "./Components/Auth"
import PrivateRoute from "./Components/PrivateRoute"
import Navigation from './components/Navigations/Navigation';
import HomePage from "./pages/HomePage/HomePage"
import MentorsDetail from './pages/Mentor/MentorDetail';
import MenteeList from './pages/Mentee/Mentee-list/MenteeList'
import MenteeDetail from './pages/Mentee/Mentee-detail'
import MentorList from './pages/Mentor/Mentor-list';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navigation />
        <header className="App-header">
          Back 2 Basics
      </header>
        <Switch>
          <PrivateRoute
            exact path="/teacher"
            component={Teacher}
          />
          <Route
            exact path="/"
            component={HomePage}
          />
          <Route
            exact path="/mentors"
            component={MentorList}
          />
          <Route
            exact path="mentors/id"
            component={MentorsDetail}
          />
          <Route
            exact path="/mentee"
            component={MenteeList}
          />
          <Route
            exact path="/mentees/:id"
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
      </div>
    </AuthProvider>
  );
}

export default App;
