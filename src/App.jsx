import React from 'react'
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from './Home/Home';
import ValueMatcher from './Games/ValueMatcher/ValueMatcher';
import Payments from './Payments/Payments';
import Aviator from './Games/Aviator/Aviator';
import Wallets from './Wallets/Wallets';
import Bet from './Games/Aviator/Bet';
import Check from './Games/Aviator/Check';
import Login from './LoginSignup/Login/Login';
import Signup from './LoginSignup/SignUp/Signup';

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/Login",
    element: <Login/>,

  },
  {
    path: "/Signup",
    element: <Signup/>,

  },
  {
    path: "/Check",
    element: <Check/>,

  },

  {
    path: "/Bet",
    element: <Bet />

  },
  {
    path: "/ValueMatcher",
    element: <ValueMatcher />,

  },
  {
    path: "/Wallets",
    element: <Wallets />,

  },
  {
    path: "/Payments",
    element: <Payments />

  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  },
]);

export default App


