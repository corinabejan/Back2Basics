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
            exact path ="/teacher" 
            component={Teacher} 
          />
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
    </div>
    </AuthProvider>
  );
}

export default App;
