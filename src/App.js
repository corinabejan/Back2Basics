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
import Mentors from './pages/Mentor/Mentors';
import RegularLessons from "./pages/RegularLessons/alphabet"
import MentorList from './pages/Mentor/Mentor-list';
import Student from './pages/Student'
import MathLesson from "./pages/RegularLessons/math"
import CustomLessons from "./pages/CustomLessons"



function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navigation />

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
            exact path="mentors/id"
            component={MentorsDetail}
          />
          <PrivateRoute
            exact path="/mentee"
            component={MenteeList}
          />
          <PrivateRoute
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
