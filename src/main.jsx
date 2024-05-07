import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyled } from "./GlobalStyled.jsx";
import HomeUser from "./pages/User/Home/HomeUser.jsx";
import ClassRooms from "./pages/User/ClassRooms/ClassRooms.jsx";
import ClassRequests from "./pages/User/ClassRequests/ClassRequests.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeUser />,
    children: [{
      path: "/salas",
      element: <ClassRooms />
    },{
      path: "/solicitacoes",
      element: <ClassRequests />
    }]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
