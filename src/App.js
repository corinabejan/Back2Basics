import './App.css';
import { Switch, Route } from "react-router-dom"
import LoginScreen from "../src/pages/Login/index"
import SignUp from "../src/pages/Sign-Up/index"
import Teacher from "../src/pages/Teacher"
import { AuthProvider } from "./Components/Auth"
import PrivateRoute from "./Components/PrivateRoute"
import Navigation from './components/Navigations/Navigation';
import HomePage from "./pages/HomePage/HomePage"
import Mentors from './pages/Mentor/Mentors';
import RegularLessons from "./pages/RegularLessons/alphabet"
import Mentee from './pages/Mentee/Mentee-list/Mentee'
import MentorList from './pages/Mentor/Mentor-list';
import MathLesson from "./pages/RegularLessons/math"


function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Navigation />
      <header className="App-header">
        Back 2 Basics
      </header>
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
            exact path="/mentees"
            component={Mentee}
          />
          <Route
            exact path="/login"
            component={LoginScreen}
          />
          <Route
            exact path="/signup"
            component={SignUp}
          />
          <PrivateRoute 
            exact path ="/teacher" 
            component={Teacher} 
          />
          <Route
            exact path="/regular/alphabet"
            component={RegularLessons}
          />
          <Route
            exact path="/regular/math"
            component={MathLesson}
          />
        </Switch>
    </div>
    </AuthProvider>
  );
}

export default App;
