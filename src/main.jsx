import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyled } from "./GlobalStyled.jsx";
import HomeUser from "./pages/User/Home/HomeUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
