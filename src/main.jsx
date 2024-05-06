import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Authentication from './pages/Authentication/Authentication.jsx';
import { GlobalStyled } from './GlobalStyled.jsx';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Authentication />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
