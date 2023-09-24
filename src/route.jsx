import React from "react"
import { Route } from "react-router-dom"

import App from "./App"
import { Login } from "./pages"

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
    ],
  },
]

export default routes
