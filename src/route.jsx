import React from "react"
import { Route } from "react-router-dom"

import App from "./App"
import { Login, SignUp, RePassword, Dashboard } from "./pages"

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/password",
        element: <RePassword />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]

export default routes
