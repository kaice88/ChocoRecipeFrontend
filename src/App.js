import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Root from "./page/Root";
import ViewRecipe from "./page/ViewRecipe";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    id: "root",
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <Signup></Signup>,
  },
  {
    path: "home",
    element: <Home></Home>,
  },
  {
    path: "viewrecipe",
    element: <ViewRecipe></ViewRecipe>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
