import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyled } from "./GlobalStyled.jsx";
import HomeUser from "./pages/User/Home/HomeUser.jsx";
import ClassRooms from "./pages/User/ClassRooms/ClassRooms.jsx";
import ClassRequests from "./pages/User/ClassRequests/ClassRequests.jsx";
import UserProvider from "./Context/UserContext.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Authentication from "./pages/Authentication/Authentication.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    element: <HomeUser />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <ClassRooms />,
      },
      {
        path: "/user/salas",
        element: <ClassRooms />,
      },
      {
        path: "/user/salas/livres",
        element: <h1>Livres</h1>,
      },
      {
        path: "/user/salas/ocupadas",
        element: <h1>Ocupadas</h1>,
      },
      {
        path: "/user/solicitacoes",
        element: <ClassRequests />,
      },
    ],
  },
  {
    path: "/user/minhaconta",
    element: <h1>Minha conta</h1>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Authentication />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
