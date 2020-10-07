import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Activities from './components/Activities/Activities';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserDashboard from './components/UserDashboard/UserDashboard';
export const UserContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({});
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Activities></Activities>
          </Route>
          <PrivateRoute path="/register/:activity">
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/userDashboard">
            <UserDashboard></UserDashboard>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/'>
            <Activities></Activities>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
