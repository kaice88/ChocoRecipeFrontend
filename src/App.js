import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login, { action as LoginAction } from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Root, { loader as userLoader } from "./page/Root";
import ErrorPage from "./page/Error";
import Profile from "./page/Profile";
import { action as LogoutAction } from "./page/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    id: "root",
    loader: userLoader,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/auth",
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
        action: LoginAction,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "logout",
        action: LogoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
