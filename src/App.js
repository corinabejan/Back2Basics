import './App.css';
import { Switch, Route } from "react-router-dom"
import LoginScreen from "../src/pages/Login/index"
import SignUp from "../src/pages/Sign-Up/index"
import { AuthProvider } from "./Components/Auth"
import PrivateRoute from "./Components/PrivateRoute"

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <header className="App-header">
        Back 2 Basics
      </header>
      <Switch>
          <PrivateRoute exact path="/" />
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
