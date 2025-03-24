import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
 

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/signUp' exact element={<SignUp />} />
          <Route path='/dashboard' exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

// const Root = () => {
//   //Check if token exists in localStorage
//   const isAuthenticated = !!localStorage.getItem("token");

//   //Redirect to dashboard if authenticated, otherwise to login
//   return isAuthenticated ? (
//     <Navigate to="/dashboard" />
//   ) : (
//     <Navigate to="/dashboard" />
//   );
// };