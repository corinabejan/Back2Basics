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
// import MenteeDetail from './pages/Mentee/Mentee-detail'
import MentorList from './pages/Mentor/Mentor-list';
import Student from './pages/Student'
import MathLesson from "./pages/RegularLessons/math"
import CustomLessons from "./pages/CustomLessons"



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
          <PrivateRoute
            exact path="/mentors"
            component={MentorList}
          />
          <PrivateRoute
            exact path="/mentors/:id"
            component={Mentors}
          />
          <PrivateRoute
            exact path="/mentees"
            component={Mentee}
          />

          {/* <Route
            exact path="/mentee/:id"
            component={MenteeDetail}
          /> */}

          <PrivateRoute
            exact path="/login"
            component={LoginScreen}
          />
          <PrivateRoute
            exact path="/signup"
            component={SignUp}
          />
          <PrivateRoute 
            exact path ="/teacher" 
            component={Teacher} 
          />
          <PrivateRoute
            exact path="/regular/alphabet"
            component={RegularLessons}
          />
          <PrivateRoute

          exact path="/student"
          component={Student}
          />
          <PrivateRoute
            exact path="/regular/math"
            component={MathLesson}

          />
          <PrivateRoute
            exact path="/custom"
            component={CustomLessons}
          />
        </Switch>
    </div>
    </AuthProvider>
  );
}

export default App;
